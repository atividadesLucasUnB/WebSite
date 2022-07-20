import { gql, useQuery } from "@apollo/client"
import {Header} from "../components/Header";
import { Lesson } from "../components/LessonCard";

const GET_LESSONS = gql`
    query MyQuery {
        activities {
            id
            slug
            name
            grade
            createdAt
        }
    }
`
interface GetLessonsResponse {
    activities: {
        id: string;
        slug: string;
        name: string;
        grade: string;
        createdAt: Date;
    }[]
  }

  
export function PageLanding() {
    const { data } =  useQuery<GetLessonsResponse>(GET_LESSONS)
    if (!data) {
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
            <h1 className="font-bold text-4xl">ATIVIDADES</h1>

            <div className="flex flex-wrap content-start -ml-5">
            {data?.activities.map(lesson => {
                return (
                        <Lesson
                            key={lesson.id}
                            slug={lesson.slug}
                            name={lesson.name}
                            grade={lesson.grade}
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