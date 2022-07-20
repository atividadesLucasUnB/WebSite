import { Route, Routes } from "react-router-dom"
import { Atividades } from "./pages/atividades";
import { PageLanding } from "./pages/pagelanding";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<PageLanding />}/>
            <Route path="/atividades" element={<Atividades />} />
            <Route path="/atividades/:slug" element={<Atividades />} />
        </Routes>
    );
}