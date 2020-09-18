import React from 'react';

var Buttons = [];
for(var i=9; i>=0; i--) {
    Buttons.push(i);
}
const btn = Buttons.map((n) => {return AmazingButton({"number":n})});



function AmazingNumberButton() {
    return( 
        <section id='anb' class='col-8 p-0  row justify-content-center '>
            {btn}        
        </section>
    )
        
}

function AmazingButton(props) {
    return (
        <div class='btn btn-secondary col-3 m-1 d-flex justify-content-center align-items-center rounded-sm border numberButton'>
                {props.number}
        </div>
    );
}

export default AmazingNumberButton;