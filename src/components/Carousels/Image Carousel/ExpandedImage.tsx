import React, { PropsWithChildren } from "react";

interface IProps {
    url: string;
    onClose: () => void;
}

export const ExpandedImage = (props: PropsWithChildren<IProps>) => 
{
    const tags = props.url.length > 0 ? "active" : "inactive";

    const GenerateImageStyle = () => {
        if (props.url.length > 0){
            return {
                backgroundImage: "url(" + require(`../../../images/${props.url}`) + ")",
            };
        }

        return {};
    }

    return (
        <div className={`expanded-image-container ${tags}`}>
            <div className={"expanded-image-background"}>
                <div className={"expanded-image"} style={GenerateImageStyle()}/>
            </div>
            <div className={"expanded-image-close"} onClick={props.onClose}/>
        </div>
    );
}