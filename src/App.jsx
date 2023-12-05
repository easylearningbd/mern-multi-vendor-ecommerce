import { useState } from "react";
import Router from "./router/Router";

function App() {
    const [allRoutes, setAllRoutes] = useState([])
    return <Router allRoutes={allRoutes} />  
}

export default App;
