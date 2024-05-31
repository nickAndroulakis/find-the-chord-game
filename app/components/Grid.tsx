type Guess = string[];

type GridProps = {
    previousGuesses: Guess[];
    currentGuess: Guess;
};

export function Grid({ previousGuesses, currentGuess }: GridProps) {

    //Fill current guess with empty strings
    const filledCurrentGuess = currentGuess.concat(Array(4 - currentGuess.length).fill(""));

    //Fill remaining rows with empty strings
    const emptyRows = 4 - previousGuesses.length - 1;
    const emptyGuesses = Array(emptyRows).fill(Array(4).fill("")) as Guess[];

    //Combine all guesses
    const finalGuesses = previousGuesses.concat([filledCurrentGuess]).concat(emptyGuesses);

    return (
        <ul className="p-12 guess-grid flex flex-col gap-4">
            {finalGuesses.map((guess, index) => (
                <li key={index}>
                    <ul className="flex flex-row gap-4">
                        {guess.map((note, indexn) => (
                            <li key={indexn}>
                                <div className="guess-box w-24 h-24 border-2 border-black flex items-center justify-center">
                                    <div className="text-2xl">{note}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}