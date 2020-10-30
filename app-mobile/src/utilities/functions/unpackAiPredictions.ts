import { Tensor, Rank} from "@tensorflow/tfjs";

type dataSyncType = Float32Array | Int32Array | Uint8Array;
type predictionsType = Tensor<Rank> | Tensor<Rank>[];

interface predictionObject {
    item: number,
    certainty: number,
}

const unpackAiPredictions = (rawPredictions: predictionsType, threshold: number, namesIndex: number, scoresIndex: number): Array<predictionObject> => {
    if (Array.isArray(rawPredictions) 
            && rawPredictions[namesIndex] 
            && rawPredictions[scoresIndex]) {

        const scores: dataSyncType = rawPredictions[scoresIndex].dataSync();
        const names: dataSyncType = rawPredictions[namesIndex].dataSync();

        const predictions: Array<predictionObject> = [];

        scores.forEach((score: number, i: number) => {
          if (score > threshold) {
            console.log(`Item: ${names[i]}, score: ${score}`);
            
            const prediction = {
                item: names[i],
                certainty: score,
            }

            predictions.push(prediction);

          }
        })

        return predictions;

    } else {
        return [];
    }
}


export default unpackAiPredictions;