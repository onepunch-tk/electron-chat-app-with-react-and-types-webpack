import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {LoadingAnimation} from "./components/version/loading-animation";

function render() {
    console.log('welcome react!');
    ReactDOM.render(
        <div>
            <LoadingAnimation/>
        </div>,
        document.getElementById('electron-root'));
}

render();