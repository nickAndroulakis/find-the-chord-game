
type KeyboardProps = {
    handleClick: (note: string) => void;
  };

export const Keyboard = ({ handleClick}: KeyboardProps ) => {

return (
    <div className="flex flex-row justify-center">
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => handleClick("C4")}>C</div>
        <div className="text-red-600 w-[60px] h-[250px] bg-black -mx-[30px] z-10 text-center" onClick={() => handleClick("Db4")}>C#</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => handleClick("D4")}>D</div>
        <div className="text-red-600 w-[60px] h-[250px] bg-black -mx-[30px] z-10 text-center" onClick={() => handleClick("Eb4")}>D#</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => handleClick("E4")}>E</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => handleClick("F4")}>F</div>
        <div className="text-red-600 w-[60px] h-[250px] bg-black -mx-[30px] z-10 text-center" onClick={() => handleClick("Gb4")}>F#</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => handleClick("G4")}>G</div>
        <div className="text-red-600 w-[60px] h-[250px] bg-black -mx-[30px] z-10 text-center" onClick={() => handleClick("Ab4")}>G#</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => handleClick("A4")}>A</div>
        <div className="text-red-600 w-[60px] h-[250px] bg-black -mx-[30px] z-10 text-center" onClick={() => handleClick("Bb4")}>A#</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => handleClick("B4")}>B</div>
        <div className="text-red-600 border-2 border-black w-[100px] h-[400px] bg-white text-center" onClick={() => handleClick("C5")}>C</div>
      </div>
)
}