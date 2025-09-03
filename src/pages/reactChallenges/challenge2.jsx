import { useEffect, useRef } from "react"
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ReactChallenge2() {

    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1000); // Initial Delay
    const [message, setMEssage] = useState("Initial Callback");

    // Callback that depends on message state
    const callback = () => {
        console.log(`Timer fired with message: "${message}"`);
        setCount(count + 1);
    };

    function useTimeout(callback, delay) {
        const savedCallBack = useRef();

        useEffect(() => {
            savedCallBack.current = callback;
        }, [callback])

        useEffect(() => {
            if (delay !== null && delay !== undefined) {
                const id = setTimeout(() => savedCallBack.current(), delay);
                return () => clearTimeout(id)
            }
        }, [delay])

    }

    useTimeout(callback, delay)

    return (
        <div className="challenge-container">
            <h1>Challenge 2</h1>
            <h3>useTimeout()</h3>
            <br />
            <h5>Create a hook to easily use <code className="">setTimeout(callback, delay)</code></h5>
            <ol>
                <li>
                    reset the timer if delay changes
                </li>
                <li>
                    DO NOT reset the timer if only callback changes
                </li>
            </ol>

            {/* Challenge Area */}

            <h5>Completed Challenge Demo</h5>
            <p>Count: {count}</p>
            <p>Current Delay: {delay}ms</p>
            <p>Current Callback Message: "{message}"</p>
            <Button variant="primary" 
                onClick={()=> setDelay(delay+1000)}
                >Increase Delay
            </Button>
            <Button variant="secondary"
                onClick={() => setMEssage(`New Message ${count}`)}
                > Change Callback Message
            </Button>

        </div>
    )
}