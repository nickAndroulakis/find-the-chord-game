import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"


type KeyboardProps = {
    handleClick: (note: string) => void;
    handleCheck: () => void;
    handleDelete: () => void;
};

export const Keyboard = ({ handleClick, handleCheck, handleDelete }: KeyboardProps) => {

    return (
        <div>
            <div className="flex flex-row justify-center">
                <div className="border-2 border-black w-[50px] h-[200px] bg-white" onClick={() => handleClick("C")}></div>
                <div className="w-[30px] h-[125px] bg-black -mx-[15px] z-10" onClick={() => handleClick("C#")}></div>
                <div className="border-2 border-black w-[50px] h-[200px] bg-white" onClick={() => handleClick("D")}></div>
                <div className="w-[30px] h-[125px] bg-black -mx-[15px] z-10" onClick={() => handleClick("D#")}></div>
                <div className="border-2 border-black w-[50px] h-[200px] bg-white" onClick={() => handleClick("E")}></div>
                <div className="border-2 border-black w-[50px] h-[200px] bg-white" onClick={() => handleClick("F")}></div>
                <div className="w-[30px] h-[125px] bg-black -mx-[15px] z-10" onClick={() => handleClick("F#")}></div>
                <div className="border-2 border-black w-[50px] h-[200px] bg-white" onClick={() => handleClick("G")}></div>
                <div className="w-[30px] h-[125px] bg-black -mx-[15px] z-10" onClick={() => handleClick("G#")}></div>
                <div className="border-2 border-black w-[50px] h-[200px] bg-white" onClick={() => handleClick("A")}></div>
                <div className="w-[30px] h-[125px] bg-black -mx-[15px] z-10" onClick={() => handleClick("A#")}></div>
                <div className="border-2 border-black w-[50px] h-[200px] bg-white" onClick={() => handleClick("B")}></div>
            </div>
            <div className="flex items-center justify-center p-2 gap-2">
                <Button
                    variant="outline"
                    onClick={() => handleCheck()}
                    className="h-16 text-black font-bold border-black"
                >Validate</Button>
                <Button
                    variant="outline"
                    onClick={() => handleDelete()}
                    className="h-16 text-black font-bold border-black"
                >Backspace</Button>
                {/* <button onClick={handleCheck} className="border-2 border-black rounded p-4 text-black font-bold">Validate</button>
                <button onClick={handleDelete} className="border-2 border-black rounded p-4 text-black font-bold">Backspace</button> */}
            </div>
        </div>
    )
}