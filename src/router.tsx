import { Route, Routes } from "react-router-dom"
import { Project } from "./pages/project";
import { Projects } from "./pages/projects";
import { Atividade } from "./pages/atividade";
import { Tecnology } from "./pages/tecnology";
import { Atividades } from "./pages/atividades";
import { PageLanding } from "./pages/pagelanding";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<PageLanding />}/>
            <Route path="/projects" element={<Projects />} />
            <Route path="/atividades" element={<Atividades />} />
            <Route path="/project/:slug" element={<Project />} />
            <Route path="/tecnology/:slug" element={<Tecnology />} />
            <Route path="/atividade/:slug" element={<Atividade />} />
        </Routes>
    );
}