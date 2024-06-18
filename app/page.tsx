"use client";

import { useState } from "react";
import * as Tone from "tone";
import { Keyboard } from "../components/Keyboard";
import { Grid } from "../components/Grid";
import { useToast } from "@/components/ui/use-toast";
import { solution } from "../lib/chords";

type Guess = string[];

export default function Home() {

  const notesAlphabet = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const { toast } = useToast()
  const [previousGuesses, setPreviousGuessses] = useState<Guess[]>([]);
  const [currentGuess, setCurrentGuess] = useState<Guess>([]);
  const [octave, setOctave] = useState<number>(4);

  function handleClick(note: string) {
    if (currentGuess.length < 4) {
      setCurrentGuess((prev) => [...prev, note]);
      play(note);
    }
  }

  function play(note: string) {
    let playOctave = octave;
    if (currentGuess.length > 0) {
      if (notesAlphabet.indexOf(note) <= notesAlphabet.indexOf(currentGuess[currentGuess.length - 1])) {
        playOctave++
        setOctave(playOctave);
      }

    }

    const synth = new Tone.Synth().toDestination();

    Tone.loaded().then(() => {
      synth.triggerAttackRelease(note+playOctave, 1);
    });
  }

  function handleCheck() {
    if (currentGuess.length == 4) {
      //Pause to animate reveal of guess
      //Check if guess is correct
      if (JSON.stringify(currentGuess) == JSON.stringify(solution)) {
        toast({
          description: "Your guess was correct! You win",
        });
        //END GAME
      } else {
        toast({
          description: "Your guess was wrong.",
        });
      }
      if (previousGuesses.length == 3) {
        //END GAME
        toast({
          description: "Game Over. You lose.",
        });
        setPreviousGuessses((prev) => [...prev, currentGuess]);

      }
      else {
      setPreviousGuessses((prev) => [...prev, currentGuess]);
      setCurrentGuess([]);
      setOctave(4);
      }
    }
    else {
      toast({
        description: "Guess is not complete.",
      });
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
      <Grid previousGuesses={previousGuesses} currentGuess={currentGuess} solution={solution} />
      <Keyboard handleClick={handleClick} handleCheck={handleCheck} handleDelete={handleDelete} />
    </main>
  );
}

