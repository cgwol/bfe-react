import { useState } from "react"
import { Button } from "react-bootstrap";

export default function ReactChallenge1() {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="challenge-container">
            <div className="d-flex flex-column">
                <h1>Challenge 1</h1>
                <h3>The React Counter App</h3>
                <br />
                <h5>As the first React problem, you are asked to create the famous Counter app.</h5>
                <ol>
                    <li>counter starts from 0.</li>
                    <li>click the '+' button to increment.</li>
                    <li>click the '-' button to decrement.</li>
                </ol>
                <br />

                {/* Challenge Area */}
                <div>
                    <Button onClick={handleIncrement} className="me-1" data-testid="increment-button" variant= "primary">+</Button>
                    <Button onClick={handleDecrement} className="ms-1" data-testid="decrement-button" variant= "primary">-</Button>
                    <h5>clicked: {`${counter}`}</h5>
                </div>
            </div>
        </div>
    )
}