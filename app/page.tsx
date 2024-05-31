"use client";

import { useState } from "react";
import * as Tone from "tone";
import { Keyboard } from "./components/Keyboard";
import { Grid } from "./components/Grid";
import { useToast } from "@/components/ui/use-toast"

type Guess = string[];

export default function Home() {

  const { toast } = useToast()
  const solution = ["C4", "E4", "G4", "C5"];
  const [previousGuesses, setPreviousGuessses] = useState<Guess[]>([]);
  const [currentGuess, setCurrentGuess] = useState<Guess>([]);

  function handleClick(note: string) {
    if (currentGuess.length < 4) {
      play(note);
      setCurrentGuess((prev) => [...prev, note]);
      console.log("CurrentGuess after click: " + currentGuess);
    }
  }

  function play(note: string) {
    const synth = new Tone.Synth().toDestination();

    Tone.loaded().then(() => {
      synth.triggerAttackRelease(`${note}`, 1);
    });
    console.log("Playing note: " + note);
  }

  function handleCheck() {
    if (currentGuess.length == 4) {
      //Pause to animate reveal of guess
      //Check if guess is correct
      console.log("Checking guess: " + currentGuess);
      console.log("Solution: " + solution);
      if (currentGuess == solution) {
        console.log("Correct!");
        toast({
          description: "Your guess was correct! You win",
        });
        //END GAME
      } else {
        console.log("Incorrect");
        toast({
          description: "Your guess was wrong.",
        });
      }
      setPreviousGuessses((prev) => [...prev, currentGuess]);
      setCurrentGuess([]);
    }
    else {
      console.log("Guess is not complete");
    }
  }

  function handleDelete() {
    if (currentGuess.length > 0) {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <h1 className="text-black text-2xl font-bold">Find the Chord</h1>
      <Grid previousGuesses={previousGuesses} currentGuess={currentGuess} />
      <Keyboard handleClick={handleClick} handleCheck={handleCheck} handleDelete={handleDelete} />
    </main>
  );
}

