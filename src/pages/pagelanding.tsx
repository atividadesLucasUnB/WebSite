import { Header } from "../components/Header";
import { Lesson } from "../components/LessonCard";
import { Project } from "../components/ProjectCard";
import { Tecnologies } from "../components/Tecnologies";
import { Link } from "react-router-dom";
import { 
    useGetTecnologiesQuery,
    useGetFirstFourLessonsQuery, 
    useGetFirstFourProjectsQuery
} from "../graphql/generated";

export function PageLanding() {
    const { data } =  useGetFirstFourLessonsQuery();
    const { data: tecData } =  useGetTecnologiesQuery();
    const { data: ProjData } =  useGetFirstFourProjectsQuery();
    
    return(
        <div className="flex flex-col gap-8">
            <Header  />

            <div className="flex flex-col md:flex-row ml-[5.1rem] ">
                <img 
                    className="rounded-full self-center w-20 h-20 mr-20 md:mr-0 md:self-auto md:w-[10rem] md:h-[10rem]"
                    src="https://github.com/twChronous.png" 
                    alt="Foto de Perfil" 
                    />
                <div className=" mt-5 self-center mr-3  sm:self-start sm:ml-8">
                    <h1 className="font-bold  text-2xl sm:self-start sm:text-4xl">Lucas Mateus Teixeira de Souza</h1>
                    <p  className="font-medium text-lg sm:text-xl mt-7">Estudante de engenharia de software </p>
                </div>
            </div>

            <div className="flex ml-[5.1rem] flex-col gap-8">
            <h1 className="font-bold  text-2xl mr-20  self-center sm:mr-0 sm:self-start sm:text-4xl">TECNOLOGIAS</h1>

            <div className="flex flex-wrap  sm:content-start sm:-ml-5">
            {tecData?.tecnologies.map(tecnology => {
                return (
                        <Tecnologies
                            key={tecnology.id}
                            name={tecnology.name}
                            emojiName= {tecnology.emojiName}
                        />
                    )
                })}
                </div>

        </div>
        <div className="flex ml-[5.1rem] flex-col gap-8 mt-[3.125rem]">
            <div className="flex text-center">
                <h1 className="font-bold  text-2xl mr-20 self-center sm:mr-0 sm:self-start sm:text-4xl">PROJETOS</h1>
                <Link to="/projects" className="flex ml-3 self-center">
                    <p className="text-base font-normal">Mostrar todos projetos</p>
                </Link>
            </div>

            <div className="flex flex-wrap content-start -ml-10 scroll-pl-6  md:content-center md:-ml-5">
            { ProjData &&
                ProjData?.projects.length > 0 ?
                ProjData?.projects.map(project => {
                    return (
                            <Project
                                key={project.id}
                                slug={project.slug}
                                name={project.name}
                                isDone= {project.isDone}
                                resumedName={project.tecnologies[0].resumedName}
                                emojiName={project.tecnologies[0].emojiName}
                                createdAt={new Date(project.createdAt)}
                            />
                        )
                    })
                    : <p className="ml-8 mr-10 sm:ml-5">Não há nenhum projeto para ser mostrada no momento :/</p>
            }
                </div>

        </div>

        <div className="flex ml-[5.1rem] flex-col gap-8 mt-[2rem]">
            <div className="flex text-center">
                <h1 className="font-bold  text-2xl mr-20 self-center sm:mr-0 sm:self-start sm:text-4xl">ATIVIDADES</h1>
                <Link to="/atividades" className="flex ml-3 self-center">
                    <p className="text-base font-normal">Mostrar todas atividades</p>
                </Link>
            </div>
            <div className="flex flex-wrap content-start -ml-10  md:content-center md:-ml-5">
            { data &&
                data?.activities.length > 0 ?
                data?.activities.map(lesson => {
                    return (
                            <Lesson
                                key={lesson.id}
                                slug={lesson.slug}
                                name={lesson.name}
                                resumedName={lesson.tecnologies[0].resumedName}
                                emojiName={lesson.tecnologies[0].emojiName}
                                createdAt={new Date(lesson.createdAt)}
                            />
                        )
                    })
                    : <p className="ml-8 mr-10 sm:ml-5">Não há nenhuma atividade para ser mostrada no momento :/</p>
            }
                </div>

        </div>
        <hr className="self-end mt-20 mb-5  w-full border-gray-700"/>
      </div>
    )
}