import { useState } from "react";

function Display({ number }) {
  return <p>Number: {number}</p>;
}

function IncrementButton( { number, setNumber }) {
    return <button onClick={ () => setNumber(number + 1) }>Increment number</button>
}

function Parent() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <IncrementButton number={number} setNumber={setNumber}/>
            <Display number={number}/>
        </div>
    );
}

export default Parent;
