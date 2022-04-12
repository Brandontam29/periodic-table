import { useContext } from "react";
import { Element as ElementType } from "../../types";
import { classNames } from "../../utils/classNames";
import { Element } from "./Element";
import { ElementsContext } from "../../contexts/elementsContext";

export function Table() {
    const elements: ElementType[] = useContext(ElementsContext);
    return (
        <div>
            <div className="w-full text-center">
                Select an element to view its details
            </div>
            <div
                className={classNames([
                    "border border-solid border-black p-2",
                    "grid grid-cols-[repeat(18,minmax(1fr,85px))] grid-rows-[repeat(5,1fr)] gap-1",
                    "max-w-[1600px] first-line:my-2 mx-auto",
                ])}
            >
                {elements.slice(0, 54).map((el) => (
                    <Element key={el.atomicNumber} element={el} />
                ))}
            </div>
        </div>
    );
}
