import { useRef, useState } from "react";

function LoginForm() {
    const inputRef = useRef(null);
    const [message, setMessage] = useState("");

    return (
      <div style={{ maxWidth: "300px", margin: "20px auto" }}>
        <form>
          <input ref={inputRef} type="text" placeholder="Enter text" />

          <button
            type="button"
            onClick={() =>
              setMessage(
                inputRef.current.value
                  ? inputRef.current.value
                  : "Nothing to display",
              )
            }
          >
            Show value
          </button>
        </form>
        {message}
      </div>
    );
}

export default LoginForm;

