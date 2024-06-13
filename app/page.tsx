"use client";

import { useState } from "react";
import * as Tone from "tone";
import { Keyboard } from "./components/Keyboard";
import { Grid } from "./components/Grid";
import { useToast } from "@/components/ui/use-toast"

type Guess = string[];

export default function Home() {

  const notesAlphabet = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
  const { toast } = useToast()
  const solution = ["C", "E", "G", "C"];
  const [previousGuesses, setPreviousGuessses] = useState<Guess[]>([]);
  const [currentGuess, setCurrentGuess] = useState<Guess>([]);
  const [octave, setOctave] = useState<number>(4);

  function handleClick(note: string) {
    if (currentGuess.length < 4) {
      setCurrentGuess((prev) => [...prev, note]);
      console.log("CurrentGuess after click: " + currentGuess);
      play(note);
    }
  }

  function play(note: string) {
    let playOctave = octave;
    console.log("Current Guess: " + currentGuess)
    if (currentGuess.length > 0) {
      console.log("Current Octave: " + octave)
      console.log("Comparing notes: " + note + " and " + currentGuess[currentGuess.length - 1])
      if (notesAlphabet.indexOf(note) <= notesAlphabet.indexOf(currentGuess[currentGuess.length - 1])) {
        playOctave++
        console.log("Incrementing octave to: " + playOctave);
        setOctave(playOctave);
      }

    }

    const synth = new Tone.Synth().toDestination();

    Tone.loaded().then(() => {
      synth.triggerAttackRelease(note+playOctave, 1);
    });
    console.log("Playing note: " + note+playOctave);
  }

  function handleCheck() {
    if (currentGuess.length == 4) {
      //Pause to animate reveal of guess
      //Check if guess is correct
      console.log("Checking guess: " + currentGuess);
      console.log("Solution: " + solution);
      if (JSON.stringify(currentGuess) == JSON.stringify(solution)) {
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
      setOctave(4);
      if (previousGuesses.length == 4) {
        //END GAME
        console.log("Game Over");
        toast({
          description: "Game Over. You lose.",
        });
      }
    }
    else {
      console.log("Guess is not complete");
    }
  }

  function handleDelete() {
    if (currentGuess.length > 0) {
      if (notesAlphabet.indexOf(currentGuess[currentGuess.length - 1]) <= notesAlphabet.indexOf(currentGuess[currentGuess.length - 2])) {
        setOctave((prev) => prev - 1);
      }

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

