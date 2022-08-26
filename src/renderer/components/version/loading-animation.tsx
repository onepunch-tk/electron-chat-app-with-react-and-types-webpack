import * as React from "react";

/**
 * import css
 * */
import './loading-animation.css';

export const LoadingAnimation = () => {
    const date = new Date();
    console.log(`hi:${date.toUTCString()}`);
    return (
        <div>
            <h1 className="loading__text">Test Loading!</h1>
            <div>
            </div>
        </div>
    );
}