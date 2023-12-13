import React from "react";

import Guess from "../Guess";
import RenderGuesses from "../RenderGuesses";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guessList, setGuessList] = React.useState([]);

    return (
        <>
            <RenderGuesses guessList={guessList} />
            <Guess setGuessList={setGuessList} />
        </>
    );
}

export default Game;
