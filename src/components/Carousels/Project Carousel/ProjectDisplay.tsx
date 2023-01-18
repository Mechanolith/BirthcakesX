import React, { PropsWithChildren } from "react";
import { ImageCarousel } from "../Image Carousel/ImageCarousel";
import { IProject } from "../../../data/projects";
import ReactHtmlParser from "react-html-parser";

interface IProps {
    project: IProject;
    openPopup: (url: string) => void;
}

export const ProjectDisplay = (props: PropsWithChildren<IProps>) => {
    const project = props.project;

    const OpenProjectPage = () => {
        window.open(project.link, "_blank");
        console.log("Attempting to open", project.link);
    }

    return (
        <div className={`project-display carousel-item`}>
            <div className={"project-title"}>{project.title}</div>
            <div className={"project-company"}>{project.company}</div>
            <ImageCarousel images={project.images} openPopup={props.openPopup}/>
            <div className={"project-blurb"}>
                <div className={"project-credit"}><em>{project.credit}</em></div>
                <div className={"project-description"}>{ ReactHtmlParser(project.description) }</div>
            </div>
            { project.link ? (
                <div className={"button-container"}>
                    <div className={"project-button"} onClick={OpenProjectPage}>
                        <p>Check it out!</p>
                    </div>
                </div>
            ) :
            null}
        </div>
    );
}
