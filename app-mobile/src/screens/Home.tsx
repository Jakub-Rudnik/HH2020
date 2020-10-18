import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as Permission from "expo-permissions";
import * as ImageManipulator from "expo-image-manipulator";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import { decodeJpeg } from "@tensorflow/tfjs-react-native";
import { Camera } from "expo-camera";

const Home = (): JSX.Element => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [isTfReady, setIsTfReady] = useState<boolean>(false);
  const [tfModel, setTfModel] = useState<cocossd.ObjectDetection | null>(null);
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

          const predictions = await model.detect(imageTensor);

          console.log(predictions);
        } else {
          console.log("Cant properly resize photo with base64 as output");
        }
      } catch (e) {
        console.log("Error with detecting: " + e);
      } finally {
        console.log("! Done !");
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
          console.log("Loading ai model");
          const model = await cocossd.load();
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
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            flexDirection: "column",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.7,
              alignSelf: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              Flip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.7,
              alignSelf: "center",
              alignItems: "center",
            }}
            onPress={detectObjects}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              Scan
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default Home;
