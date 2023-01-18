import React, { PropsWithChildren, memo, useImperativeHandle, forwardRef } from "react";
import { Howl, Howler} from "howler";

interface IProps {
}

export const BGM = memo(forwardRef((props, ref) => 
{
    const BGM1Audio = require('../audio/PasswordBGM.mp3');

    const BGM1 = new Howl({
        src: BGM1Audio,
        volume: 0.4,
        loop: true,
        autoplay: true,
    });

    useImperativeHandle(ref, () => ({
        Stop(){
            BGM1.stop();
        }
    }));

    return (
        <div>
        </div>
    );
}));