import React from "react";

export const Title = (props) => {
    return
    <div className="Titleprot">
        <h2>{props.Title}</h2>
        {props.children}
    </div>
}