import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import axios from "axios";
import { Element } from "./types";
import { Home } from "./pages/home/Home";
import { Details } from "./pages/details/Details";

import { ElementsContext } from "./contexts/elementsContext";

const App = () => {
    const [elements, setElements] = useState<Element[]>([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/elements")
            .then((response) => setElements(response.data))
            .catch((error) => console.error(error));
    });

    const routes = useRoutes([
        { path: "/:element_name", element: <Details /> },
        { path: "/", element: <Home /> },
        { path: "*", element: <div>Not found</div> },
    ]);

    return (
        <ElementsContext.Provider value={elements}>
            {routes}
        </ElementsContext.Provider>
    );
};

export default App;
