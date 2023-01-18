import React, { PropsWithChildren } from "react";

interface IProps { }

export const Footer = (props: PropsWithChildren<IProps>) => {
    return (
        <div className={"footer"}>
            © Jack Pilz 2023 <br/>
            Assets Shamelessly "Borrowed" From Around The Web
        </div>
    );
}
