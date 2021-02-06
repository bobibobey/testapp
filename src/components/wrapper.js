import React from "react";
import "./wrapper.css";

const Wrapper = (props) => {
    return (<>
        <div className="center">
            {props.children}
            {props.children}
        </div> 
        </>
    )
};

export default Wrapper;