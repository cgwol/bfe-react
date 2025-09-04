import { useRef, useState } from "react"
import { Button } from "react-bootstrap";

export default function ReactChallenge3() {

    function useIsFirstRender() {
        const isFirstRender = useRef(true);

        if(isFirstRender.current) {
            isFirstRender.current = false;
            return true;
        }

        return false;
    }

    const isFirstRender = useIsFirstRender();
    const [toggle, setToggle] = useState(false)

    if (isFirstRender){
        console.log("Component Mounted, this logs on only the first render.")
    }

    if(!isFirstRender) {
        console.log("This a subsequent render.")
    }

    return(
        <div className="challenge-container">
            <h1>Challenge 3</h1>
            <h3>useIsFirstRender()</h3>
            <br />
            <h5>Create a hook to tell if it is the first render.</h5>
            <br />

            {/* Challenge Area */}
            <h5>Completed Challenge Demo</h5>
            <br />
            <p>Toggle State: {toggle ? "On" : "Off"}</p>
            <p>Check Console. The message <code>Component Mounted</code> logs only on the first render.</p>
            <Button
                onClick={()=> setToggle(!toggle)}
            >
                Toggle State
            </Button>
        </div>
    )
}