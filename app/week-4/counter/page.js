// In order to effect those changes we need to use the client side to send the changes
"use client"

import { useState } from "react";
import Counter from "./counter";
import CounterDisplay from "./counter-display";

export default function CounterPage() {

    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        let currentCount = counter;
        if(counter <= 9 ){
            setCounter(currentCount + 1);
        }
        // counter = counter + 1; Don't do this
    }

    const resetCounter = () => {
        setCounter(0);
    }

    return (
        <main>
            {/* <p>{counter}</p>
            <button onClick={incrementCounter}>Increment</button> */}
            <Counter currentCount={counter} incrementCountFunction={incrementCounter} resetCounterFunction={resetCounter}/>
            <CounterDisplay CounterDisplay={counter} />
        </main>
    );
}