import { Route, Routes } from "react-router-dom"
import { PageLanding } from "./pages/pagelanding";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<PageLanding />}/>
        </Routes>
    );
}