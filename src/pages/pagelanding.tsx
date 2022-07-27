import {Header} from "../components/Header";
import { Lesson } from "../components/LessonCard";
import { Tecnologies } from "../components/Tecnologies";
import { useGetLessonsQuery, useGetTecnologiesQuery } from "../graphql/generated";

export function PageLanding() {
    const { data } =  useGetLessonsQuery();
    const { data: tecData } =  useGetTecnologiesQuery()

    if (!data || !tecData) {
        return (
          <div className="flex-1">
            <p>Carregando...</p>
          </div>
        )
      }
    return(
        <div className="flex flex-col gap-8">
            <Header  />

            <div className="flex ml-[5.1rem] ">
                <img 
                    className="rounded-full w-[10rem] h-[10rem]"
                    src="https://github.com/twChronous.png" 
                    alt="Foto de Perfil" 
                    />
                <div className="ml-8 mt-5">
                    <h1 className="font-bold text-4xl">Lucas Mateus Teixeira de Souza</h1>
                    <p  className="font-medium text-xl mt-7">Estudante de engenharia de software - 1º semestre</p>
                </div>
            </div>

            <div className="flex ml-[5.1rem] flex-col gap-8">
            <h1 className="font-bold text-4xl">TECNOLOGIAS</h1>

            <div className="flex flex-wrap content-start -ml-5">
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
        <div className="flex ml-[5.1rem] flex-col gap-8 mt-[4.375rem]">
            <h1 className="font-bold text-4xl">ATIVIDADES</h1>

            <div className="flex flex-wrap content-start -ml-5">
            {
                !data?.activities ?
                data?.activities.map(lesson => {
                    return (
                            <Lesson
                                key={lesson.id}
                                slug={lesson.slug}
                                name={lesson.name}
                                tecName={lesson.tecnologies[0].name}
                                emojiName={lesson.tecnologies[0].emojiName}
                                createdAt={new Date(lesson.createdAt)}
                            />
                        )
                    })
                    : <p className="ml-5">Não há nenhuma atividade para ser mostrada no momento :/</p>
            }
                </div>

        </div>
        <hr className="self-end mt-20 mb-5  w-full border-gray-700"/>
      </div>
    )
}