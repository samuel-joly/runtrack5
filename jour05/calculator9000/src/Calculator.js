import React from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifullScreen from './BeautifullScreen';
import GreatOperationButton from './GreatOperationButton';


function Calculator(){
    return (
        <div class='row w-100 p-3 m-3 justify-content-center align-items-center'>
            <BeautifullScreen />
            <div class='row justify-content-between align-items-center col-8 p-0'>
                <AmazingNumberButton />
                <GreatOperationButton />
            </div>
        </div>
    )
}

export default Calculator;