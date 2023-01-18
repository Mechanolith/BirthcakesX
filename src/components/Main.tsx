import React, { PropsWithChildren, useState } from "react";
import { MainBackground } from "./MainBackground";
import { PetalMaker } from "./Petals/PetalMaker";
import { Footer } from "./Text Components/Footer";
import { DefaultPerson, IPerson, People } from "../data/people";
import { Invitation } from "./Invitation";

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

    const UpdatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const SubmitPassword = () => {
        const person = People.find(p => p.password == password);
        if(person != undefined)
        {
            setGuest(person);
            setState(EState.Correct);
        }
        else
        {
            setState(EState.Wrong);
        }
    }

    const TogglePlainText = () => {
        setIsYeOlde(!isYeOlde);
    }
    
    return (
        <>
            <MainBackground />
            <PetalMaker />
            <div className="hero">
                {state != EState.Correct ? 
                <div className="password0wrapper">
                    {state == EState.Wrong ? 
                    <div className="wrong-text">Thine passed phrase art invalid, thy scurrilous knave.</div> 
                    : <div className="instruction-text">Entereth thines passed phrase:</div> }
                    <input type="password" className="password-input" onChange={UpdatePassword}/>
                    <div className="submit-button" onClick={SubmitPassword}>Submiteth</div>
                </div> 
                : 
                <div className="invitation-wrapper">
                    <Invitation guest={guest} isYeOlde={isYeOlde}/>
                    <div className="wizard-button" onClick={TogglePlainText}>
                        {isYeOlde ? "Speak plainly, knave!" : "Bring back the nonsense text please."}
                    </div>
                </div>}
            </div>
            {children}
            <Footer />
        </>
    );
};
