import React, { PropsWithChildren } from "react";

interface IProps { }

export const Blurb = (props: PropsWithChildren<IProps>) => {
    return (
        <div className={"blurb"}>
            <p>Coming in at exactly 7 foot, I can guarantee you I'm probably the longest person you'll ever meet. I also make games (and even websites sometimes), specialising in C#, Unity, and React.</p>
        </div>
    );
}
