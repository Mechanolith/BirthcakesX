import React, { PropsWithChildren, useEffect, useState } from "react";
import BezierEasing from "bezier-easing";
import { WaitForSeconds } from "../../utils/TimeManagement";
import { BellRandom } from "../..//utils/Randomisers";
import { isSafari, isMobileSafari } from "react-device-detect";

interface IProps {
    timeOffset: number;
    bonusSpeed: number;
    cycle: boolean;
}

interface IBezier {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

export const Beziers: IBezier[] =
    [
        { x1: 0.33, y1: 0.56, x2: 1, y2: 0.74 },
        { x1: 0.4, y1: 0.4, x2: 0.85, y2: 0.25 },
        { x1: 0.44, y1: 0.39, x2: 0.59, y2: 0.9 },
        { x1: 0.71, y1: 0.44, x2: 0.39, y2: 0.61 },
        { x1: 0.21, y1: 0.41, x2: 0.38, y2: 0.89 },
    ];

export const Petal = (props: PropsWithChildren<IProps>) => {
    const [style, setStyle] = useState({});
    const duration = 5000;
    let active = true;

    let bezier = BezierEasing(0, 0.61, 1, 0.24);
    const minScale = 0.5;
    const maxScale = 1.75;
    const minSpeed = 0.5;
    const maxSpeed = 0.8;
    const minOffset = -40;
    const maxOffset = 40;
    const minLayer = 3;
    const maxLayer = 5;
    const petalTypeCount = 2;
    const maxTorque = 1.5;
    const maxStartRot = 90;

    const [petalType, setPetalType] = useState(0);

    let scale = 1;
    let speed = 1;
    let offset = 0;
    let layer = 2;
    let pattern = 0;
    let startTime = 0;
    let xTorque = 0;
    let yTorque = 0;
    let zTorque = 0;
    let startX = 0;
    let startY = 0;
    let startZ = 0;

    useEffect(() => {
        //window.addEventListener('blur', () => {setActive(false)});
        //window.addEventListener('focus', () => {restartAnimation});
        delayAnimation();
    }, []);

    const randomise = () => {
        setPetalType(Math.floor(Math.random() * petalTypeCount));

        startTime = performance.now();
        scale = minScale + BellRandom(1, 1) * (maxScale - minScale);
        speed = minSpeed + BellRandom(1, 1) * (maxSpeed + props.bonusSpeed - minSpeed);
        offset = minOffset + BellRandom(3, 1) * (maxOffset - minOffset);
        layer = Math.floor(minLayer + Math.random() * (maxLayer - minLayer));
        pattern = Math.floor(Math.random() * Beziers.length);

        const values = Beziers[pattern];
        bezier = BezierEasing(values.x1, values.y1, values.x2, values.y2);

        xTorque = Math.random() * maxTorque;
        yTorque = Math.random() * maxTorque;
        zTorque = Math.random() * maxTorque;
        startX = Math.random() * maxStartRot;
        startY = Math.random() * maxStartRot;
        startZ = Math.random() * maxStartRot;
    }

    const delayAnimation = async () => {
        await WaitForSeconds(props.timeOffset);
        randomise();
        window.requestAnimationFrame(animate);
    }

    const restartAnimation = () => {
        active = true;
        window.requestAnimationFrame(animate);
    }

    const animate = async (timestep: number) => {
        const time = timestep - startTime;
        const progress = (time / duration);

        const x = (100 - (100 * speed * progress));
        const y = bezier(x * 0.01) * 100;

        const xRot = 360 * xTorque * progress + startX;
        const yRot = 360 * yTorque * progress + startY;
        const zRot = 360 * zTorque * progress + startZ;

        let nextStyle: any = {
            position: `fixed`,
            left: (x - offset) + `vw`,
            bottom: (y + offset) + `vh`,
            transform: `scale(${scale}) rotate(${zRot}deg)`,
            zIndex: layer,
        };

        if(!isSafari && !isMobileSafari) {
            nextStyle = {...nextStyle, 
                transform: `scale(${scale}) rotateX(${xRot}deg) rotateY(${yRot}deg) rotateZ(${zRot}deg)`,
            }
        }

        setStyle(nextStyle);

        if (x < -20 || y < -20) {
            if(props.cycle) {
                randomise();
                window.requestAnimationFrame(animate);
            }
        }
        else {
            window.requestAnimationFrame(animate);
        }
    }

    return (
        <div className={`petal petal-type-${petalType}`} style={style} />
    );
}
