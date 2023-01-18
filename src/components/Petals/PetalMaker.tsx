import React, { PropsWithChildren, useEffect, useState, useReducer } from "react";
import { Petal } from "./Petal";

interface IProps { }

export const PetalMaker = (props: PropsWithChildren<IProps>) => {
    const [ignore, forceUpdate] = useReducer(x => x + 1, 0);
    const [petals, setPetals] = useState<any[]>([]);

    const minDelay = 0.2;
    const maxDelay = 0.65;
    const burstCount = 10;
    const passiveCount = 25;

    useEffect(() => {
        PopulatePetals();
    }, []);

    const PopulatePetals = () => {
        let petalID = 0;
        let totalOffset = 0;

        while (petalID < burstCount) {
            petals.push(<Petal key={petalID} timeOffset={0} bonusSpeed={0.5} cycle={false} />);
            ++petalID;
        }

        while(petalID < burstCount + passiveCount) {
            petals.push(<Petal key={petalID} timeOffset={totalOffset} bonusSpeed={0} cycle={true} />);
            ++petalID;

            totalOffset += minDelay + Math.random() * (maxDelay - minDelay);
        }

        forceUpdate();
    }

    return (
        <div className={"petal-maker"}>
            {petals.map((entry) => { return entry; })}
        </div>
    );
}
