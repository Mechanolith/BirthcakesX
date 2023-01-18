import React, { PropsWithChildren, useState } from "react";
import { ImageDisplay } from "./ImageDisplay";
import { CarouselContent } from "../../../data/projects";
import { Carousel } from "react-responsive-carousel";

interface IProps {
    images: CarouselContent[];
    openPopup: (url: string) => void;
}

export const ImageCarousel = (props: PropsWithChildren<IProps>) => {
    const images = props.images;
    const [selectedImage, setSelectedImage] = useState(0);

    const previousImage = selectedImage > 0 ? selectedImage - 1 : images.length - 1;
    const nextImage = selectedImage < images.length - 1 ? selectedImage + 1 : 0;

    const NextProject = () => {
        setSelectedImage(nextImage)
    }

    const PreviousProject = () => {
        setSelectedImage(previousImage)
    }

    return (
        <div className={`carousel image-carousel`}>
            <Carousel
                autoPlay={false}
                selectedItem={selectedImage}
                onChange={setSelectedImage}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={true}
                showIndicators={false}
                showArrows={false}
                useKeyboardArrows={false}
                swipeable={false}
                emulateTouch={false}
                transitionTime={150}
                centerMode={false}
            >
                {images.map((entry, index) => {
                    return <ImageDisplay image={entry} key={index} openPopup={props.openPopup}/>
                })}
            </Carousel>
            <div className={'navigation image-navigation'}>
                <div className={`button button-left`} onClick={PreviousProject} />
                <div className={`button button-right`} onClick={NextProject} />
            </div>
        </div>
    );
}
