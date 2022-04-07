import React from "react";

const MovieDetail = (props) => {
    return (
        <div>
            <strong>{props.lable} : </strong> {props.value}
        </div>
    );
};

export default MovieDetail;
