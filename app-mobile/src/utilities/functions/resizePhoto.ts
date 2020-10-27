import * as ImageManipulator from "expo-image-manipulator";

type manipulatedImageType = { 
    uri: string,
    width: number,
    height: number,
    base64?: string,
};

const resizePhoto = async (photo: string, h: number, w: number): Promise<manipulatedImageType> => {
    const manipulatedImage: manipulatedImageType =
    await ImageManipulator.manipulateAsync(
        photo,
        [{ resize: { height: h, width: w } }],
        { compress: 0.9, base64: true }
    );
    return manipulatedImage;
};

export default resizePhoto;