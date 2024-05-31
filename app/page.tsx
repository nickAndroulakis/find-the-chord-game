"use client";

import { useState } from "react";
import * as Tone from "tone";
import { Keyboard } from "./components/Keyboard";
import { Grid } from "./components/Grid";

type Guess = string[];

export default function Home() {

  const solution = ["C4", "E4", "G4", "C5"];
  const [previousGuesses, setPreviousGuessses] = useState<Guess[]>([]);
  const [currentGuess, setCurrentGuess] = useState<Guess>([]);

  function handleClick(note: string) {
    play(note);

    setCurrentGuess((prev) => [...prev, note]);
    console.log("CurrentGuess after click: " + currentGuess);

    if (currentGuess.length == 4) {
      //Pause to animate reveal of guess
      //Check if guess is correct
      if (currentGuess == solution) {
        console.log("Correct!");
        //END GAME
      } else {
        console.log("Incorrect");
      }
      setPreviousGuessses((prev) => [...prev, currentGuess]);
      setCurrentGuess([]);
    }

    function play(note: string) {
      const synth = new Tone.Synth().toDestination();

      Tone.loaded().then(() => {
        synth.triggerAttackRelease(`${note}`, 1);
      });
      console.log("Playing note: " + note);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <h1 className="text-black text-2xl font-bold">Find the Chord</h1>
      <Grid previousGuesses={previousGuesses} currentGuess={currentGuess} />
      <Keyboard handleClick={handleClick} />
    </main>
  );
}

