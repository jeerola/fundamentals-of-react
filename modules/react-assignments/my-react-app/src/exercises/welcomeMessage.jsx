import { useState } from "react";

const IsLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <div>
        <p>{isLoggedIn ? "Welcome!" : "Please sign in."}</p>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            Toggle login
        </button>
      </div>
    );

}

export default IsLoggedIn;