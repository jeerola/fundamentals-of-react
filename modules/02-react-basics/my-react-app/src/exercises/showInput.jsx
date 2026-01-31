import { useState } from "react";

function NameForm() {
    const [input, setInput] = useState("");

    const handleClick = () => {
        alert(input);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your name"
        />
            <button onClick={handleClick}>Show Name</button>
        </div>
    );
}

export default NameForm;
