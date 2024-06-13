import classNames from "classnames";

type CellProps = {
    note: string;
    position: number;
    solution: string[];
    isRevealed: boolean;
};

export const Cell = ({ note, position, solution, isRevealed }: CellProps) => {

    let status = null;
    console.log("Position: " + position);
    console.log("Solution: " + solution);
    if (isRevealed) {
        console.log("Note: " + note);
        console.log("Solution: " + solution[position]);
        if (solution[position] === note)
            status = "correct";
        else if (solution.includes(note))
            status = "present";
        else
        status = "absent";
    }

    const classes = classNames(
        // "guess-box w-24 h-24 border-2 border-black flex items-center justify-center",
        'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white',
        {
          'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
            !status,
          'border-black dark:border-slate-100': note && !status,
          'absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700':
            status === 'absent',
          'correct shadowed bg-green-500 text-white border-green-500':
            status === 'correct',
          'present shadowed bg-yellow-500 text-white border-yellow-500':
            status === 'present',
        //   'cell-fill-animation': isFilled,
        //   'cell-reveal': shouldReveal,
        }
        )
      ;

    return (
        <div className={classes} >
            <div className="text-2xl text-black font-bold">{note}</div>
        </div>
    )
}