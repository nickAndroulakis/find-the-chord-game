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
                <div className="border-2 border-black w-[90px] h-[360px] bg-white" onClick={() => handleClick("C4")}></div>
                <div className="w-[54px] h-[225px] bg-black -mx-[27px] z-10" onClick={() => handleClick("Db4")}></div>
                <div className="border-2 border-black w-[90px] h-[360px] bg-white" onClick={() => handleClick("D4")}></div>
                <div className="w-[54px] h-[225px] bg-black -mx-[27px] z-10" onClick={() => handleClick("Eb4")}></div>
                <div className="border-2 border-black w-[90px] h-[360px] bg-white" onClick={() => handleClick("E4")}></div>
                <div className="border-2 border-black w-[90px] h-[360px] bg-white" onClick={() => handleClick("F4")}></div>
                <div className="w-[54px] h-[225px] bg-black -mx-[27px] z-10" onClick={() => handleClick("Gb4")}></div>
                <div className="border-2 border-black w-[90px] h-[360px] bg-white" onClick={() => handleClick("G4")}></div>
                <div className="w-[54px] h-[225px] bg-black -mx-[27px] z-10" onClick={() => handleClick("Ab4")}></div>
                <div className="border-2 border-black w-[90px] h-[360px] bg-white" onClick={() => handleClick("A4")}></div>
                <div className="w-[54px] h-[225px] bg-black -mx-[27px] z-10" onClick={() => handleClick("Bb4")}></div>
                <div className="border-2 border-black w-[90px] h-[360px] bg-white" onClick={() => handleClick("B4")}></div>
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