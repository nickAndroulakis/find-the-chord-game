"use client";

import { useState } from "react";
import * as Tone from "tone";

export default function Home() {

  const solution = ["C4", "E4", "G4", "C5"];
  const [guesses, setGuesses] = useState(Array.from({ length: 4 }));
  const [currentGuess, setCurrentGuess] = useState(["", "", "", ""]); 

  function play(note: string) {
    const synth = new Tone.Synth().toDestination();

    Tone.loaded().then(() => {
      synth.triggerAttackRelease(`${note}`, 1);
    });
    console.log(note);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white"> 
      <h1 className="text-black text-2xl font-bold">Find the Chord</h1>
      <div className="guess-grid flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="guess-box w-32 h-32 border-2 border-black"></div>
          <div className="guess-box w-32 h-32 border-2 border-black"></div>
          <div className="guess-box w-32 h-32 border-2 border-black"></div>
          <div className="guess-box w-32 h-32 border-2 border-black"></div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="guess-box w-32 h-32 border-2 border-black"></div>
          <div className="guess-box w-32 h-32 border-2 border-black"></div>
          <div className="guess-box w-32 h-32 border-2 border-black"></div>
          <div className="guess-box w-32 h-32 border-2 border-black"></div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="guess-box w-32 h-32 border-2 border-black"></div>
          <div className="guess-box w-32 h-32 border-2 border-black"></div>
          <div className="guess-box w-32 h-32 border-2 border-black"></div>
          <div className="guess-box w-32 h-32 border-2 border-black"></div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => play("C4")}>C</div>
        <div className="text-red-600 w-[60px] h-[250px] bg-black -mx-[30px] z-10 text-center" onClick={() => play("Db4")}>C#</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => play("D4")}>D</div>
        <div className="text-red-600 w-[60px] h-[250px] bg-black -mx-[30px] z-10 text-center" onClick={() => play("Eb4")}>D#</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => play("E4")}>E</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => play("F4")}>F</div>
        <div className="text-red-600 w-[60px] h-[250px] bg-black -mx-[30px] z-10 text-center" onClick={() => play("Gb4")}>F#</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => play("G4")}>G</div>
        <div className="text-red-600 w-[60px] h-[250px] bg-black -mx-[30px] z-10 text-center" onClick={() => play("Ab4")}>G#</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => play("A4")}>A</div>
        <div className="text-red-600 w-[60px] h-[250px] bg-black -mx-[30px] z-10 text-center" onClick={() => play("Bb4")}>A#</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => play("B4")}>B</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => play("C5")}>C</div>
      </div>
    </main>
  );
}

