import React from "react";
import { Camera, CameraCapturedPicture } from "expo-camera";

const capturePhoto = async (cameraRef: React.RefObject<Camera>): Promise<CameraCapturedPicture | null> => {
    if (cameraRef && cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        return photo;
    }
    return null;
};

export default capturePhoto;