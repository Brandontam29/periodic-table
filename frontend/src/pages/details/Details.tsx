import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ElementsContext } from "../../contexts/elementsContext";
import { Element as ElementType } from "../../types";
import { classNames } from "../../utils/classNames";
import { Properties } from "./Properties";

export const Details = ({}) => {
    const location = useLocation();
    const [element, setElement] = useState<ElementType | null>(null);
    const elements = useContext(ElementsContext);

    useEffect(() => {
        if (location.state) {
            // @ts-ignore
            setElement(location.state.element);
            return;
        }

        if (!element) {
            const el = elements.find(
                (element) =>
                    element.name.toLowerCase() ===
                    location.pathname.slice(1).toLowerCase()
            );

            setElement(el || null);
        }
    });

    return (
        <section className="flex flex-col items-center my-4">
            {element ? (
                <>
                    <h1 className="text-2xl font-bold mb-2">
                        Details for {element.name}
                    </h1>
                    <Properties element={element} />
                </>
            ) : (
                <h1 className="text-2xl font-bold my-2">Element Not Found</h1>
            )}
            <div className="w-[calc(100%-10px)] max-w-sm mx-auto mt-4 flex justify-start">
                <Link to="/">
                    <div
                        className={classNames([
                            "rounded-lg bg-green-400 text-white px-4 py-2 ",
                        ])}
                    >
                        Return to Main Page
                    </div>
                </Link>
            </div>
        </section>
    );
};
