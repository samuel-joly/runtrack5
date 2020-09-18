import React from 'react';
import MagnificientEqualButton from './MagnificienEqualButton';

var operationButtons = ["*", "/", "+", "-"];
const operationButton = operationButtons.map((operation) => {
    return AmazingButton({'number':operation});
});

function AmazingButton(props) {
    return (
        <div class='btn btn-secondary col-5 m-1 d-flex justify-content-center align-items-center rounded-sm border operationButton '>
                {props.number}

        </div>
    );
}

function GreatOperationButton(){
    return (
        <div class='col-4 m-0 p-0 row justify-content-center align-items-center'>
            {operationButton}
            <MagnificientEqualButton />
            <div class='col-12 operationButton'></div>
        </div>
    )
}

export default GreatOperationButton;