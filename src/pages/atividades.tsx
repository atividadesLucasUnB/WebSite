import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { isOperatingSystemKnow } from "../utils/platform"

export function Atividades() {
    return(
        <div className="">
            <Header />
            <Link to="/#" className="flex  space-x-1">
                <ArrowLeft />
                <p>VOLTAR AO MENU</p>
            </Link>
        
            <div>
                <p>MATERIA</p>
                <h1>Atividade 01</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sollicitudin in dui sodales. Habitasse commodo, dignissim lobortis urna nulla at mauris volutpat aliquet. Ut ornare ultrices urna tincidunt velit sit. Sit pharetra malesuada dictum eu vitae, amet egestas.
                </p>
            </div>

            <div>
                <a>{ `DOWNLOAD PARA ${isOperatingSystemKnow(window) === 'Linux' ?  'LINUX' : 'WINDOWS'}`}</a>
                <a>DOWNLOAD PARA OUTRAS PLATAFORMAS</a>
            </div>
        </div>
    )
}