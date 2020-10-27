/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useRef, useContext } from "react";
import { ImageURISource, View } from "react-native";

import * as Permission from "expo-permissions";
import { Camera } from "expo-camera";

import { bundleResourceIO, decodeJpeg } from "@tensorflow/tfjs-react-native";
import * as tf from "@tensorflow/tfjs";

import { AppStorage } from "../../routes-and-providers/AppProvider";

import { capturePhoto, resizePhoto } from "../../utilities/functions";
import { Button, TouchableIcon } from "../../components/Interactive";
import { ScanStackNavProps } from "../../navigation/ScanParamList";
import { Block, Rounded } from "../../components/Layout";
import Loading from "../Loading";

type predictionType = tf.Tensor<tf.Rank> | tf.Tensor<tf.Rank>[];
type dataSyncType = Float32Array | Int32Array | Uint8Array;

const Scan = ({ navigation }: ScanStackNavProps<"Scan">): JSX.Element => {
  const MODELJSON: tf.io.ModelJSON = require("../../../assets/model/model.json");
  const MODELBIN: number = require("../../../assets/model/group1-shard1of1.bin");

  const icon1: ImageURISource = require("./../../../assets/icons/Icon1.png");
  const icon2: ImageURISource = require("./../../../assets/icons/Icon2.png");

  const { aiModel, setAiModel } = useContext(AppStorage);

  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [isTfReady, setIsTfReady] = useState<boolean>(false);
  const [isScaning, setIsScaning] = useState<boolean>(false);
  const [tfModel, setTfModel] = useState<tf.GraphModel | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const cameraRef = useRef<Camera>(null);

  // Object detection logic based on impoted and loaded ai model from file or context.
  // Can scan only one image at the time!
  // !!! Console log's for debugging !!!
  const detectObjects = async () => {
    if (!isScaning) {
      setIsScaning(true);
      console.log("Capture photo!");
      const photo = await capturePhoto(cameraRef);

      if (photo && tfModel) {
        try {
          console.log("Resize photo!");
          const { base64 } = await resizePhoto(photo.uri, 640, 640);

          if (base64) {
            // Change image to 4-dimension's array to fit into ai model
            const imgBuffer = tf.util.encodeString(base64, "base64").buffer;
            const raw = new Uint8Array(imgBuffer);
            const imageTensor = decodeJpeg(raw);
            const image4d = imageTensor.expandDims(0);

            // Each prediction is array where on the
            // 8 place is prediction's label
            // 2 place is prediction's score
            const predictions: predictionType = await tfModel.executeAsync(
              image4d
            );

            if (Array.isArray(predictions) && predictions[7]) {
              const scores: dataSyncType = predictions[1].dataSync();
              const names: dataSyncType = predictions[7].dataSync();

              scores.forEach((score: number, i: number) => {
                // 0.3 === 30% certainty
                if (score > 0.3) {
                  console.log(`Item: ${names[i]}, score: ${score}`);
                  //
                  // * Send to app provider *
                  //
                }
              });
            }
          } else {
            console.log("Cant properly resize photo with base64 as output");
          }
        } catch (error) {
          console.log("Error with detecting: " + error);
        } finally {
          setIsScaning(false);
          console.log("! Done !");
        }
      } else {
        console.log("Problem with model or photo");
      }
    }
  };

  const askPermission = async () => {
    const { status } = await Permission.askAsync(Permission.CAMERA);
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    (async () => {
      if (!isTfReady || !tfModel) {
        await tf.ready();
        console.log("Loading ai model");
        try {
          if (!aiModel) {
            console.log("From file");

            const model = await tf.loadGraphModel(
              bundleResourceIO(MODELJSON, MODELBIN)
            );

            setAiModel(model);
            setTfModel(model);
          } else {
            console.log("From context");
            setTfModel(aiModel);
          }

          setIsTfReady(true);
          console.log("Succes");
        } catch (error) {
          console.log("Failed with: " + error);
        }
      }

      if (!hasPermission) {
        askPermission().catch((e) => console.log(e));
      }
    })();
  }, [
    MODELBIN,
    MODELJSON,
    aiModel,
    setAiModel,
    hasPermission,
    isTfReady,
    tfModel,
  ]);

  if (isTfReady === false) {
    return <Loading />;
  }

  if (hasPermission === false) {
    return (
      // <Block flexDirection={"column"} justifyContent={"space-between"}>
      //   <BackgroundImage reversed />
      //   <Block>
      //     <Text>Brak uprawnień do aparatu!</Text>;
      <Button
        handleOnClick={() => {
          askPermission();
        }}
        primmary
        small
        text={"Zapytaj"}
      />
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
      {/* Połączenie view i block bo jak było na samych blocka
      ch to przycisków nie dało się klikać ?!?, trzeba to naprawić */}
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
              navigation.navigate("Accept");
            }}
          />
        </View>
        <View
          style={{
            height: "25%",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {isScaning && <Rounded>Skanowanie...</Rounded>}
          <Button
            primmary
            small
            text={"Skanuj!"}
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
