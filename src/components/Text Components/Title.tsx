import React, { PropsWithChildren } from "react";

interface IProps { }

export const Title = (props: PropsWithChildren<IProps>) => {
    return (
        <div className={"title"}>
            <h1>JACK H. PILZ</h1>
            <ul className={"japanese-title"}>
                <li className={"japanese-text"}>ジ</li>
                <li className={"japanese-text"}>ャ</li>
                <li className={"japanese-text"}>ク</li>
                <li className={"japanese-text"}>・</li>
                <li className={"japanese-text"}>エ</li>
                <li className={"japanese-text"}>イ</li>
                <li className={"japanese-text"}>チ</li>
                <li className={"japanese-text"}>・</li>
                <li className={"japanese-text"}>ピ</li>
                <li className={"japanese-text"}>ル</li>
                <li className={"japanese-text"}>ズ</li>
            </ul>
            <h2>TALL GUY EXTRAORDINAIRE</h2>
        </div>
    );
}

    //<div className={"japanese-title japanese-text"}>ジャク・カスコフ</div>