import React, { useState, useEffect, useRef } from "react";
import { Text } from "react-native";
import * as Permission from "expo-permissions";
import * as ImageManipulator from "expo-image-manipulator";
import * as tf from "@tensorflow/tfjs";
import { bundleResourceIO, decodeJpeg } from "@tensorflow/tfjs-react-native";
import { Camera } from "expo-camera";
import { TouchableIcon } from "../../components/Interactive";
import { Block } from "../../components/Layout";

const Scan = (): JSX.Element => {
  const MODELJSON = "../../../assets/model/model.json";
  const MODELBIN = "../../../assets/model/group1-shard1of1.bin";

  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [isTfReady, setIsTfReady] = useState<boolean>(false);
  const [tfModel, setTfModel] = useState<tf.GraphModel | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef<Camera>(null);

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

          // console.log(predictions[0].dataSync());
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
  // -----------------------------------------------------
  // -----------------------------------------------------

  useEffect(() => {
    (async () => {
      if (!isTfReady || tfModel == null) {
        await tf.ready();
        console.log("Tenserflow framework is ready to work!");
        try {
          console.log("Loading files");

          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const modelJson = require(MODELJSON);
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const modelWeights = require(MODELBIN);

          console.log("Loading ai model");
          const model = await tf.loadGraphModel(
            bundleResourceIO(modelJson, modelWeights)
          );

          setTfModel(model);
          console.log("Succes");
        } catch (error) {
          console.log("Failed with: " + error);
        } finally {
          setIsTfReady(true);
          console.log("Operation ended.");
        }
      }

      if (!hasPermission) {
        const { status } = await Permission.askAsync(Permission.CAMERA);
        console.log("Permission to camera: " + status);
        setHasPermission(status === "granted");
      }
    })();
  }, [hasPermission, isTfReady, tfModel]);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera ref={cameraRef} style={{ flex: 1 }} type={type}>
      <Block justifyContent={"space-between"} flexDirection={"column"}>
        <TouchableIcon
          handleOnPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        />
        <TouchableIcon
          handleOnPress={() => {
            detectObjects();
          }}
        />
      </Block>
    </Camera>
  );
};

export default Scan;
