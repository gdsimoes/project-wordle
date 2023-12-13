import React from "react";

function RenderGuesses({ guessList }) {
    return (
        <div className="guess-results">
            {guessList.map((guess) => (
                <p key={guess.key} className="guess">
                    {guess.label}
                </p>
            ))}
        </div>
    );
}

export default RenderGuesses;
