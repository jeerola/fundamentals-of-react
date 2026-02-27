import { useRef } from "react";

const FocusInput = () => {
    const inputElement = useRef(null);

    const handleFocus = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <input
                ref={inputElement}
                type="text"
                placeholder="Press the button to focus here"
            />

            <button onClick={handleFocus} style={{ padding: '8px 16px' }}>
                Press this to focus
            </button>
        </>
    )
}

export default FocusInput;