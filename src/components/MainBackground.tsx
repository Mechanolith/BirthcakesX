import React, { PropsWithChildren } from "react";

interface IProps { }

export const MainBackground = (props: PropsWithChildren<IProps>) => {
    return (
        <div className={"main-background"}>
            <div className={"tree-branch"}>
            </div>
        </div>
    );
}
