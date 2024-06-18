"use client";

import { useState } from "react";
import * as Tone from "tone";
import { Keyboard } from "../components/Keyboard";
import { GridBeginner, Grid } from "../components/Grid";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { solutionBeginner, solutionAdvanced } from "../lib/chords";

type Guess = string[];

export default function Home() {

  const notesAlphabet = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const { toast } = useToast()
  const [previousGuessesBeginner, setPreviousGuesssesBeginner] = useState<Guess[]>([]);
  const [previousGuessesAdvanced, setPreviousGuesssesAdvanced] = useState<Guess[]>([]);

  const [currentGuessBeginner, setCurrentGuessBeginner] = useState<Guess>([]);
  const [currentGuessAdvanced, setCurrentGuessAdvanced] = useState<Guess>([]);

  const [octaveBeginner, setOctaveBeginner] = useState<number>(4);
  const [octaveAdvanced, setOctaveAdvanced] = useState<number>(4);

  const [tab, setTab] = useState("beginner");

  const onTabChange = (value: string) => {
    setTab(value);
  }


  function handleClick(note: string) {
    if (tab == "beginner") {
      if (currentGuessBeginner.length < 3) {
        setCurrentGuessBeginner((prev) => [...prev, note]);
        play(note);
      }
    } else {
      if (currentGuessAdvanced.length < 4) {
        setCurrentGuessAdvanced((prev) => [...prev, note]);
      }
    }
  }

  function play(note: string) {
    let playOctave = null;
    if (tab == "beginner") {
      playOctave = octaveBeginner;
      if (currentGuessBeginner.length > 0) {
        if (notesAlphabet.indexOf(note) <= notesAlphabet.indexOf(currentGuessBeginner[currentGuessBeginner.length - 1])) {
          playOctave++
          setOctaveBeginner(playOctave);
        }
      }
    } else {
      playOctave = octaveAdvanced;
      if (currentGuessAdvanced.length > 0) {
        if (notesAlphabet.indexOf(note) <= notesAlphabet.indexOf(currentGuessAdvanced[currentGuessAdvanced.length - 1])) {
          playOctave++
          setOctaveAdvanced(playOctave);
        }
      }
    }

    const synth = new Tone.Synth().toDestination();

    Tone.loaded().then(() => {
      synth.triggerAttackRelease(note + playOctave, 1);
    });
  }

  function handleCheck() {
    if (tab == "beginner") {
      if (currentGuessBeginner.length == 3) {
        //Pause to animate reveal of guess
        //Check if guess is correct
        if (JSON.stringify(currentGuessBeginner) == JSON.stringify(solutionBeginner)) {
          toast({
            description: "Your guess was correct! You win",
          });
          //END GAME
        } else {
          toast({
            description: "Your guess was wrong.",
          });
        }
        if (previousGuessesBeginner.length == 2) {
          //END GAME
          toast({
            description: "Game Over. You lose. Correct answer was " + solutionBeginner.join(" "),
          });
          setPreviousGuesssesBeginner((prev) => [...prev, currentGuessBeginner]);

        }
        else {
          setPreviousGuesssesBeginner((prev) => [...prev, currentGuessBeginner]);
          setCurrentGuessBeginner([]);
          setOctaveBeginner(4);
        }
      }
      else {
        toast({
          description: "Guess is not complete.",
        });
      }
    } else {
      if (currentGuessAdvanced.length == 4) {
        //Pause to animate reveal of guess
        //Check if guess is correct
        if (JSON.stringify(currentGuessAdvanced) == JSON.stringify(solutionAdvanced)) {
          toast({
            description: "Your guess was correct! You win",
          });
          //END GAME
        } else {
          toast({
            description: "Your guess was wrong.",
          });
        }
        if (previousGuessesAdvanced.length == 4) {
          //END GAME
          toast({
            description: "Game Over. You lose. Correct answer was " + solutionAdvanced.join(" "),
          });
          setPreviousGuesssesAdvanced((prev) => [...prev, currentGuessAdvanced]);

        }
        else {
          setPreviousGuesssesAdvanced((prev) => [...prev, currentGuessAdvanced]);
          setCurrentGuessAdvanced([]);
          setOctaveAdvanced(4);
        }
      }
      else {
        toast({
          description: "Guess is not complete.",
        });
      }
    }
  }

  function handleDelete() {
    if (tab == "beginner") {
      if (currentGuessBeginner.length > 0) {
        if (notesAlphabet.indexOf(currentGuessBeginner[currentGuessBeginner.length - 1]) <= notesAlphabet.indexOf(currentGuessBeginner[currentGuessBeginner.length - 2])) {
          setOctaveBeginner((prev) => prev - 1);
        }

        setCurrentGuessBeginner((prev) => prev.slice(0, -1));
      }
    } else {
      if (currentGuessAdvanced.length > 0) {
        if (notesAlphabet.indexOf(currentGuessAdvanced[currentGuessAdvanced.length - 1]) <= notesAlphabet.indexOf(currentGuessAdvanced[currentGuessAdvanced.length - 2])) {
          setOctaveAdvanced((prev) => prev - 1);
        }

        setCurrentGuessAdvanced((prev) => prev.slice(0, -1));
      }
    }

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <h1 className="text-black text-2xl font-bold">Find the Chord</h1>
      <Tabs value={tab} onValueChange={onTabChange} defaultValue="beginner" className="w-[400px] flex flex-col items-center">
        <TabsList>
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        <TabsContent value="beginner">
          <GridBeginner previousGuesses={previousGuessesBeginner} currentGuess={currentGuessBeginner} solution={solutionBeginner} />
        </TabsContent>
        <TabsContent value="advanced">
          <Grid previousGuesses={previousGuessesAdvanced} currentGuess={currentGuessAdvanced} solution={solutionAdvanced} />
        </TabsContent>
      </Tabs>
      <Keyboard handleClick={handleClick} handleCheck={handleCheck} handleDelete={handleDelete} />
    </main>
  );
}

