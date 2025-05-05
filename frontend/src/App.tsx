import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import ExamplePageView from "./views/ExamplePageView.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<ExamplePageView/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
