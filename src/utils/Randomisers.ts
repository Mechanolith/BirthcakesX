    //A bigger difference in weight makes this less of a bell curve.
    export const BellRandom = (weightA: number, weightB: number) => {
        return (Math.random() * weightA + Math.random() * weightB) / (weightA + weightB);
    }