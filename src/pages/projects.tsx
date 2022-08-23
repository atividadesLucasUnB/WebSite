import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Project } from "../components/ProjectCard";
import { useGetProjectsQuery } from "../graphql/generated";

export function Projects() {
    const { data } = useGetProjectsQuery();

    if (!data || !data.projects) {
        return (
          <div className="flex-1">
            <p>Carregando...</p>
          </div>
        )
      }
    return (
        <div className="">
            <Header />
            <Link to="/#" className="flex space-x-2 place-items-center ml-[4rem] mt-[4rem]">
                <ArrowLeft size={32}/>
                <p className="text-base font-normal">VOLTAR AO MENU</p>
            </Link>
        

        <div className="flex flex-col mt-[3rem] gap-8 lg:flex-row p-5">
            <div className="flex ml-[40vw] mb-10 ">
                <h1 className="font-semibold text-xl sm:text-5xl mb-3">ATIVIDADES</h1>
            </div>
        </div>
        <div className="">
            <div className="flex flex-wrap content-center -ml-5 mt-10 md:content-center md:ml-[9vw]">
            { data &&
                data?.projects.length > 0 ?
                data?.projects.map(project => {
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
                    : <p className="ml-8 mr-10 sm:ml-5">Não há nenhuma atividade para ser mostrada no momento :/</p>
            }
                </div>
        </div>
            <hr className="self-end mt-20 mb-5 w-full border-gray-700"/>
        </div>
    )
}