import { decodeJpeg } from "@tensorflow/tfjs-react-native";
import { util, Tensor, Rank } from "@tensorflow/tfjs";

const convertTo4d = (base64: string): Tensor<Rank> => {
    const imgBuffer = util.encodeString(base64, "base64").buffer;
    const raw = new Uint8Array(imgBuffer);
    const imageTensor = decodeJpeg(raw);
    const image4d = imageTensor.expandDims(0);

    return image4d;
};

export default convertTo4d;