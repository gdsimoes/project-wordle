import React from "react";

function Guess() {
    const [guess, setGuess] = React.useState("");

    function handleChange(event) {
        const upper = event.target.value.toUpperCase();

        setGuess(upper);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const guessObj = { guess };
        console.log(guessObj);

        setGuess("");
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                pattern="^[A-Za-z]{5}$"
                maxLength={5}
                value={guess}
                onChange={handleChange}
            />
        </form>
    );
}

export default Guess;
