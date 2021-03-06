/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useRef, useContext } from "react";
import { ImageURISource, View } from "react-native";

import * as Permission from "expo-permissions";
import { Camera } from "expo-camera";

import { bundleResourceIO } from "@tensorflow/tfjs-react-native";
import * as tf from "@tensorflow/tfjs";

import { Button, TouchableIcon } from "../../components/Interactive";
import { Block, Rounded } from "../../components/Layout";
import Loading from "../Loading";

import { AppStorage } from "../../routes-and-providers/AppProvider";
import { ScanStackNavProps } from "../../navigation/ScanParamList";
import {
  capturePhoto,
  convertTo4d,
  resizePhoto,
  unpackAiPredictions,
} from "../../utilities/functions";

type predictionType = tf.Tensor<tf.Rank> | tf.Tensor<tf.Rank>[];

interface predictionItem {
  label: number;
  certainty: number;
}

const Scan = ({ navigation }: ScanStackNavProps<"Scan">): JSX.Element => {
  const MODELJSON: tf.io.ModelJSON = require("../../../assets/model/model.json");
  const MODELBIN: number = require("../../../assets/model/group1-shard1of1.bin");
  const THRESHOLD = 0.3; // For selecting the correct image from detection - ex. 0.3 = certainty 30%

  const ICON1: ImageURISource = require("./../../../assets/icons/Icon1.png");
  const ICON2: ImageURISource = require("./../../../assets/icons/Icon2.png");

  const { ai } = useContext(AppStorage);

  const [hasPermission, setHasPermission] = useState(false);
  const [isScaning, setIsScaning] = useState(false);
  const [isTfReady, setIsTfReady] = useState(false);
  const [tfModel, setTfModel] = useState<tf.GraphModel | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [sessionScannedItems, setSessionScannedItems] = useState<
    Array<predictionItem>
  >([]);

  const cameraRef = useRef<Camera>(null);

  // Object detection logic based on impoted and loaded ai model from file or context.
  // Can scan only one image at the time!
  // !!! Console log's for debugging purpose only !!!
  const detectObjects = async () => {
    if (!isScaning) {
      setIsScaning(true);
      const photo = await capturePhoto(cameraRef);

      if (photo && tfModel) {
        try {
          const { base64 } = await resizePhoto(photo.uri, 640, 640);

          if (base64) {
            // Change image to 4-dimension's array to fit into ai model
            const image4d = convertTo4d(base64);
            const rawPredictions: predictionType = await tfModel.executeAsync(
              image4d
            );

            // Each prediction is array where on the
            // 2nd place is prediction's score
            // 8th place is prediction's label
            const predictions = unpackAiPredictions(
              rawPredictions,
              THRESHOLD,
              8,
              2
            );

            predictions.forEach((prediction) => {
              setSessionScannedItems((items) => [...items, prediction]);
            });

            console.log("predictions");
            console.log(predictions);
            console.log("sessionScannedItems");
            console.log(sessionScannedItems);
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
          if (!ai.model) {
            console.log("From file");

            const model = await tf.loadGraphModel(
              bundleResourceIO(MODELJSON, MODELBIN)
            );

            ai.setModel(model);
            setTfModel(model);
          } else {
            console.log("From context");
            setTfModel(ai.model);
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
  }, [MODELBIN, MODELJSON, hasPermission, isTfReady, tfModel, ai]);

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
            icon={ICON1}
            handleOnClick={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          />
          <TouchableIcon
            icon={ICON2}
            reversed
            handleOnClick={() => {
              navigation.navigate("Accept", sessionScannedItems);
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
