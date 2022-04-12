import { Element as ElementType } from "../../types";

interface Props {
    element: ElementType;
}

export const Properties = ({ element }: Props) => {
    console.log(element);
    return (
        <div className="w-[calc(100%-10px)] max-w-sm border border-solid border-black">
            {Object.keys(element).map((p) => (
                <div className="flex flex-row justify-between even:bg-white odd:bg-slate-100 p-1">
                    <div className="font-bold">{p}: </div>
                    <div>{element[p]}</div>
                </div>
            ))}
        </div>
    );
};

// typescript not smart enough :(
