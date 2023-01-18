import React, { PropsWithChildren, useState, useRef } from "react";
import { MainBackground } from "./MainBackground";
import { PetalMaker } from "./Petals/PetalMaker";
import { Footer } from "./Text Components/Footer";
import { DefaultPerson, IPerson, People } from "../data/people";
import { Invitation } from "./Invitation";
import { Howl, Howler} from "howler";
import { BGM } from "./BGM";

interface IProps {
    path: string;
}

enum EState {
    Fresh,
    Correct,
    Wrong,
}

export const Main = (props: PropsWithChildren<IProps>) => {
    const { children } = props;
    const [password, setPassword] = useState<string>("");
    const [state, setState] = useState<EState>(EState.Fresh);
    const [guest, setGuest] = useState<IPerson>(DefaultPerson);
    const [isYeOlde, setIsYeOlde] = useState<boolean>(true);
    const Trumpets = new Howl({src: require('../audio/Trumpet-Fanfare.wav'), volume: 0.5, preload: true});
    const Sparkles = 
    [
        new Howl({src: require('../audio/Sparkle1.wav'), volume: 0.25, preload: true}),
        new Howl({src: require('../audio/Sparkle2.wav'), volume: 0.25, preload: true}),
        new Howl({src: require('../audio/Sparkle3.wav'), volume: 0.25, preload: true}),
        new Howl({src: require('../audio/Sparkle4.wav'), volume: 0.25, preload: true}),
        new Howl({src: require('../audio/Sparkle5.wav'), volume: 0.25, preload: true}),
        new Howl({src: require('../audio/Sparkle6.wav'), volume: 0.25, preload: true}),
    ];
    const Slap = new Howl({src: require('../audio/Slap.wav'), volume: 0.5, preload: true});

    const bgmRef = useRef();
    const BGM2Audio = require('../audio/MainBGM.mp3');

    const [BGMCount, setBGMCount] = useState<number>(0);

    const BGM2 = new Howl({
        src: BGM2Audio,
        volume: 0.4,
        loop: true,
        preload: true,
    });

    const UpdatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const SubmitPassword = () => {
        const person = People.find(p => p.password == password);
        if(person != undefined)
        {
            setGuest(person);
            setState(EState.Correct);
            bgmRef.current.Stop();
            Trumpets.play();
            Trumpets.on('end', () =>
            {
                BGM2.play();
            });
        }
        else
        {
            setState(EState.Wrong);
            setPassword("");
            Slap.play();
        }
    }

    const TogglePlainText = () => {
        setIsYeOlde(!isYeOlde);
        let index = Math.floor(Math.random() * (Sparkles.length - 1));
        Sparkles[index].play();
    }
    
    return (
        <>
            <BGM ref={bgmRef}/>
            <MainBackground />
            <div className="hero">
                {state != EState.Correct ? 
                <div className="password-wrapper">  
                    {state == EState.Wrong ? 
                    <div className="wrong-text instruction">{'<'} Thine passed phrase art invalid, thy scurrilous knave!  {'>'}</div> 
                    : <div className="instruction-text instruction">{'<'} Entereth thines passed phrase {'>'}</div> }
                    <input type="password" className="password-input" value={password} onChange={UpdatePassword}/>
                    <div className="submit-button" onClick={SubmitPassword}>Submiteth</div>
                </div> 
                : 
                <div className="invitation-wrapper">
                    <Invitation guest={guest} isYeOlde={isYeOlde}/>
                    <div className="wizard-button" onClick={TogglePlainText}>
                        <div className="wizard-speech">
                        {isYeOlde ? "Speak plainly, you pompous buffoon!" : "Speak properly, you simpleton!"}
                        </div>
                        <div className="wizard-image"/>
                    </div>
                </div>}
            </div>
            {children}
            <Footer />
        </>
    );
};