import React, { PropsWithChildren, useState } from "react";
import { IProject } from "../../../data/projects";
import { ProjectDisplay } from "./ProjectDisplay";
import { Carousel } from "react-responsive-carousel";

interface IProps {
    projects: IProject[];
    projectTag: string;
    openPopup: (url: string) => void;
}

export const ProjectCarousel = (props: PropsWithChildren<IProps>) => {
    const projects = props.projects;
    const [selectedProject, setSelectedProject] = useState(0);
    const previousProject = selectedProject > 0 ? selectedProject - 1 : projects.length - 1;
    const nextProject = selectedProject < projects.length - 1 ? selectedProject + 1 : 0;

    const NextProject = () => {
        setSelectedProject(nextProject);
    }

    const PreviousProject = () => {
        setSelectedProject(previousProject);
    }

    const renderIndicator = (
        onClickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
        isSelected: boolean,
        index: number,
        label: string
      ) => { 
        return (
        // This will render inside an ul element
            <li
            className={`dot ${isSelected ? "selected" : ""}`}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            aria-label={`${label} ${index + 1}`}
            />
      )}

    const tagTitle = props.projectTag.substring(0,1).toUpperCase() + props.projectTag.slice(1); //Capitalise the tag title.

    return (
        <div className={'project-carousel-container'}>
            <div className={`carousel project-carousel ${props.projectTag}`}>
                <div className={'project-window-heading'}>{tagTitle} Projects</div>
                <div className={'columns'}>
                    <div className={'column-one'}/>
                    <div className={'column-two'}/>
                </div>
                <div className={'projects'}>
                    <Carousel 
                        autoPlay={false} 
                        selectedItem={selectedProject}
                        onChange={setSelectedProject}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        showArrows={false}
                        useKeyboardArrows={false}
                        swipeable={true}
                        emulateTouch={true}
                        transitionTime={150}
                        centerMode={false}
                        renderIndicator={renderIndicator}
                        >
                        {projects.map((entry, index) => {
                            return <ProjectDisplay project={entry} key={index} openPopup={props.openPopup}/>
                        })}
                    </Carousel>
                </div>
                <div className={'navigation'}>
                    <div className={`button button-left`} onClick={PreviousProject} />
                    <div className={`button button-right`} onClick={NextProject} />
                </div>
            </div>
        </div>
    );
}
