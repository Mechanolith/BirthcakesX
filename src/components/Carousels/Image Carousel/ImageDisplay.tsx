import React, { PropsWithChildren, useState } from "react";
import { CarouselContent, ContentType } from "../../../data/projects";

interface IProps {
    image: CarouselContent;
    openPopup: (url: string) => void;
}

export const ImageDisplay = (props: PropsWithChildren<IProps>) => {
    const [expanded, setExpanded] = useState(false);
    const carouselWidth = "100%";
    const carouselHeight = "100%";

    const GenerateContent = () => {
        switch (props.image.type)
        {
            case ContentType.image:
                return (
                    <div className={"image"} style={GenerateImageStyle()}>
                        <div className={"expand-button"} onClick={ExpandImage}/>
                    </div>
                );

            case ContentType.video:
                const url = `https://www.youtube.com/embed/${props.image.url}`;
                return (<iframe width={carouselWidth} height={carouselHeight} src={url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>);
        }
    }

    const GenerateImageStyle = () => {
        let url = "";

        //Use the thumbnail if it has one. Otherwise use the regular image if it has one.
        if (props.image.thumb && props.image.thumb.length > 0) {
            url = props.image.thumb;
        }
        else if(props.image.url.length > 0)
        {
            url = props.image.url;
        }
        else {
            return {};
        }

        return {
            backgroundImage: "url(" + require(`../../../images/${url}`) + ")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: `${carouselWidth}`,
            height: `${carouselHeight}`,
        };
    }

    const ExpandImage = () => {
        props.openPopup(props.image.url);
    }

    return (
        <div className={`image-display carousel-item`}>
            {GenerateContent()}
        </div>
    );
}
