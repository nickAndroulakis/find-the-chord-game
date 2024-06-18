import { Cell } from "./Cell";

type Guess = string[];

type GridProps = {
    previousGuesses: Guess[];
    currentGuess: Guess;
    solution: string[];
};

export function GridBeginner({ previousGuesses, currentGuess, solution }: GridProps) {

    //Fill current guess with empty strings
    const filledCurrentGuess = currentGuess.concat(Array(3 - currentGuess.length).fill(""));

    //Fill remaining rows with empty strings
    const emptyRows = Math.max(4 - previousGuesses.length - 1, 0);
    const emptyGuesses = Array(emptyRows).fill(Array(3).fill("")) as Guess[];

    //Combine all guesses
    const finalGuesses = [filledCurrentGuess].concat(emptyGuesses);

    return (
        <div>
            {previousGuesses.length > 0 &&
                <ul className="pt-4 guess-grid flex flex-col gap-4">
                    {previousGuesses.map((guess, index) => (
                        <li key={index}>
                            <ul className="flex flex-row gap-4">
                                {guess.map((note, indexn) => (
                                    <li key={indexn}>
                                        <Cell note={note} position={indexn} solution={solution} isRevealed={true} />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            }
            {previousGuesses.length < 4 &&
                <ul className="pt-4 pb-12 guess-grid flex flex-col gap-4">
                    {finalGuesses.map((guess, index) => (
                        <li key={index}>
                            <ul className="flex flex-row gap-4">
                                {guess.map((note, indexn) => (
                                    <li key={indexn}>
                                        <Cell note={note} position={indexn} solution={solution} isRevealed={false} />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export function Grid({ previousGuesses, currentGuess, solution }: GridProps) {

    //Fill current guess with empty strings
    const filledCurrentGuess = currentGuess.concat(Array(4 - currentGuess.length).fill(""));

    //Fill remaining rows with empty strings
    const emptyRows = Math.max(4 - previousGuesses.length - 1, 0);
    const emptyGuesses = Array(emptyRows).fill(Array(4).fill("")) as Guess[];

    //Combine all guesses
    const finalGuesses = [filledCurrentGuess].concat(emptyGuesses);

    return (
        <div>
            {previousGuesses.length > 0 &&
                <ul className="pt-4 guess-grid flex flex-col gap-4">
                    {previousGuesses.map((guess, index) => (
                        <li key={index}>
                            <ul className="flex flex-row gap-4">
                                {guess.map((note, indexn) => (
                                    <li key={indexn}>
                                        <Cell note={note} position={indexn} solution={solution} isRevealed={true} />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            }
            {previousGuesses.length < 4 &&
                <ul className="pt-4 pb-12 guess-grid flex flex-col gap-4">
                    {finalGuesses.map((guess, index) => (
                        <li key={index}>
                            <ul className="flex flex-row gap-4">
                                {guess.map((note, indexn) => (
                                    <li key={indexn}>
                                        <Cell note={note} position={indexn} solution={solution} isRevealed={false} />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}