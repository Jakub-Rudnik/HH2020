/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useRef, useContext } from "react";
import { Text, View } from "react-native";
import * as Permission from "expo-permissions";
import * as ImageManipulator from "expo-image-manipulator";
import * as tf from "@tensorflow/tfjs";
import { bundleResourceIO, decodeJpeg } from "@tensorflow/tfjs-react-native";
import { Camera } from "expo-camera";
import { TouchableIcon } from "../../components/Interactive";
import { BackgroundImage, Block } from "../../components/Layout";
import { AppStorage } from "../../routes-and-providers/AppProvider";
import Loading from "../Loading";

const Scan = (): JSX.Element => {
  const MODELJSON = "../../../assets/model/model.json";
  const MODELBIN = "../../../assets/model/group1-shard1of1.bin";

  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [isTfReady, setIsTfReady] = useState<boolean>(false);
  const [tfModel, setTfModel] = useState<tf.GraphModel | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef<Camera>(null);

  const icon1 = require("./../../../assets/icons/Icon1.png");
  const icon2 = require("./../../../assets/icons/Icon2.png");

  const { aiModel, changeAiModel } = useContext(AppStorage);

  // -----------------------------------------------------
  // Utilyty functions
  // -----------------------------------------------------
  const capturePhoto = async () => {
    if (cameraRef && cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      return photo;
    }
    return null;
  };

  const resizePhoto = async (photo: string) => {
    const manipulatedImage = await ImageManipulator.manipulateAsync(
      photo,
      [{ resize: { height: 300, width: 300 } }],
      { compress: 0.7, base64: true }
    );
    return manipulatedImage;
  };

  const detectObjects = async () => {
    console.log("1/2 Capture photo!");
    const photo = await capturePhoto();

    console.log("2/2 Loading model!");
    const model = tfModel;

    if (photo && model) {
      try {
        console.log("! Starting !");
        const resPhoto = await resizePhoto(photo.uri);
        console.log("Photo has been resized.");

        if (resPhoto.base64) {
          const imgBuffer = tf.util.encodeString(resPhoto.base64, "base64")
            .buffer;
          console.log("Photo has been encoded.");
          const raw = new Uint8Array(imgBuffer);
          console.log("Photo has been converted to unit8array.");
          const imageTensor = decodeJpeg(raw);
          console.log("Photo has been decoded to a 3D Tensor.");
          const image4d = imageTensor.expandDims(0);

          const predictions:
            | tf.Tensor<tf.Rank>
            | tf.Tensor<tf.Rank>[] = await model.executeAsync(image4d);

          if (Array.isArray(predictions) && predictions[2]) {
            const element = predictions[2].arraySync();
            if (Array.isArray(element) && element[0]) {
              console.log(element[0]);
            }
          }
        } else {
          console.log("Cant properly resize photo with base64 as output");
        }
      } catch (e) {
        console.log("Error with detecting: " + e);
      } finally {
        console.log("! Done  !");
      }
    } else {
      console.log("Problem with model or photo");
    }
  };

  const askPermission = async () => {
    const { status } = await Permission.askAsync(Permission.CAMERA);
    console.log("Permission to camera: " + status);
    setHasPermission(status === "granted");
  };
  // -----------------------------------------------------
  // -----------------------------------------------------

  useEffect(() => {
    (async () => {
      if (!isTfReady || tfModel == null) {
        await tf.ready();
        console.log("Tenserflow framework is ready to work!");
        try {
          console.log("Loading ai model");
          if (aiModel === null) {
            console.log("From file");
            const modelJson = require(MODELJSON);
            const modelWeights = require(MODELBIN);

            const model = await tf.loadGraphModel(
              bundleResourceIO(modelJson, modelWeights)
            );

            changeAiModel(model);
            setTfModel(model);
          } else {
            console.log("From context");
            const model = aiModel;
            setTfModel(model);
          }

          console.log("Succes");
        } catch (error) {
          console.log("Failed with: " + error);
        } finally {
          setIsTfReady(true);
          console.log("Operation ended.");
        }
      }

      if (!hasPermission) {
        askPermission().catch((e) => console.log(e));
      }
    })();
  }, [aiModel, changeAiModel, hasPermission, isTfReady, tfModel]);

  if (isTfReady === false) {
    return <Loading />;
  }

  if (hasPermission === false) {
    return (
      <Text>nocamera123</Text>
      // <Block flexDirection={"column"} justifyContent={"space-between"}>
      //   <BackgroundImage reversed />
      //   <Block>
      //     <Text>Brak uprawnień do aparatu!</Text>;
      //     <Button
      //       handleOnClick={() => {
      //         askPermission();
      //       }}
      //       primmary
      //       small
      //       text={"Zapytaj"}
      //     />
      //   </Block>
      // </Block>
    );
  }

  return (
    <Camera
      ref={cameraRef}
      style={{ width: "100%", height: "100%" }}
      type={type}
    >
      <Block flexDirection={"column"} justifyContent={"flex-start"}>
        <View style={{ height: "25%" }} />
        <View
          style={{
            width: "100%",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableIcon
            icon={icon1}
            handleOnClick={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          />
          <TouchableIcon
            icon={icon2}
            reversed
            handleOnClick={() => {
              detectObjects();
            }}
          />
        </View>
      </Block>
    </Camera>
  );
};

export default Scan;
