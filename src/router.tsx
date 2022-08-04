import { Route, Routes } from "react-router-dom"
import { Atividades } from "./pages/atividades";
import { PageLanding } from "./pages/pagelanding";
import { Projects } from "./pages/projects";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<PageLanding />}/>
            <Route path="/projects" element={<Projects />} />
            <Route path="/atividades" element={<Atividades />} />
            <Route path="/projects/:slug" element={<Projects />} />
            <Route path="/atividades/:slug" element={<Atividades />} />
        </Routes>
    );
}