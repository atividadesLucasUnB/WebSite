import { gql, useQuery } from "@apollo/client"
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
    )
}