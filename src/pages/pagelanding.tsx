import { gql, useQuery } from "@apollo/client"
import {Header} from "../components/Header";
import { Lesson } from "../components/LessonCard";
import { Tecnologies } from "../components/Tecnologies";

const GET_LESSONS = gql`
 query MyQuery {
  activities {
    id
    slug
    name
    createdAt
    tecnologies {
            name
            emojiName
    }
  }
}
`
const GET_TECNOLOGIES = gql`
    query {
    tecnologies {
      id
      name
      tecnologyLogoUrl
      emojiName
    }
    }
`
interface GetLessonsResponse {
    activities: {
        id: string;
        slug: string;
        name: string;
        createdAt: Date;
        tecnologies: {
            name: string;
            emojiName: string;
    }[]
    }[]
  }
interface GetTecnologies {
    tecnologies: {
        id: string;
        name: string;
        tecnologyLogoUrl: string;
        emojiName: string;
      }[]
}
  
export function PageLanding() {
    const { data } =  useQuery<GetLessonsResponse>(GET_LESSONS)
    const { data: tecData } =  useQuery<GetTecnologies>(GET_TECNOLOGIES)

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
                            tecnologyLogoUrl= {tecnology.tecnologyLogoUrl}
                            emojiName= {tecnology.emojiName}
                        />
                    )
                })}
                </div>

        </div>
        <div className="flex ml-[5.1rem] flex-col gap-8">
            <h1 className="font-bold text-4xl">ATIVIDADES</h1>

            <div className="flex flex-wrap content-start -ml-5">
            {data?.activities.map(lesson => {
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
                })}
                </div>

        </div>
        <hr className="self-end mt-[17rem]  w-full border-gray-700"/>
      </div>
    )
}