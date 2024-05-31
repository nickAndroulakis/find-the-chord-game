
type KeyboardProps = {
    handleClick: (note: string) => void;
    handleCheck: () => void;
};

export const Keyboard = ({ handleClick, handleCheck }: KeyboardProps) => {

    return (
        <div>
            <div className="flex flex-row justify-center">
                <div className="text-red-600 border-2 border-black w-[90px] h-[360px] bg-white text-center" onClick={() => handleClick("C4")}>C</div>
                <div className="text-red-600 w-[54px] h-[225px] bg-black -mx-[27px] z-10 text-center" onClick={() => handleClick("Db4")}>C#</div>
                <div className="text-red-600 border-2 border-black w-[90px] h-[360px] bg-white text-center" onClick={() => handleClick("D4")}>D</div>
                <div className="text-red-600 w-[54px] h-[225px] bg-black -mx-[27px] z-10 text-center" onClick={() => handleClick("Eb4")}>D#</div>
                <div className="text-red-600 border-2 border-black w-[90px] h-[360px] bg-white text-center" onClick={() => handleClick("E4")}>E</div>
                <div className="text-red-600 border-2 border-black w-[90px] h-[360px] bg-white text-center" onClick={() => handleClick("F4")}>F</div>
                <div className="text-red-600 w-[54px] h-[225px] bg-black -mx-[27px] z-10 text-center" onClick={() => handleClick("Gb4")}>F#</div>
                <div className="text-red-600 border-2 border-black w-[90px] h-[360px] bg-white text-center" onClick={() => handleClick("G4")}>G</div>
                <div className="text-red-600 w-[54px] h-[225px] bg-black -mx-[27px] z-10 text-center" onClick={() => handleClick("Ab4")}>G#</div>
                <div className="text-red-600 border-2 border-black w-[90px] h-[360px] bg-white text-center" onClick={() => handleClick("A4")}>A</div>
                <div className="text-red-600 w-[54px] h-[225px] bg-black -mx-[27px] z-10 text-center" onClick={() => handleClick("Bb4")}>A#</div>
                <div className="text-red-600 border-2 border-black w-[90px] h-[360px] bg-white text-center" onClick={() => handleClick("B4")}>B</div>
                <div className="text-red-600 border-2 border-black w-[90px] h-[360px] bg-white text-center" onClick={() => handleClick("C5")}>C</div>
            </div>
            <div className="flex items-center justify-center p-2">
                <button onClick={handleCheck} className="border-2 border-black rounded p-4">Check</button>
            </div>
        </div>
    )
}