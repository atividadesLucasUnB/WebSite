import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from "react-router-dom";

interface LessonProps {
    key: string;
    slug: string;
    name: string;
    grade: string;
    createdAt: Date;
}

export function Lesson(props: LessonProps) {
  const availableDateFormatted = format(props.createdAt, "EEEE' • 'd' de 'MMMM'", {
    locale: ptBR,
  })

  return (
    <Link to={`/atividades/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div 
        className= {'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500'}>
        <header className="flex items-center justify-between">
          <span className={'text-xs rounded py-[0.125rem] px-2 text-white border font-bold border-green-300'}>
            {props.grade}
          </span>
        </header>

        <strong className={'mt-5 block'}>
          {props.name}
        </strong>
      </div>
    </Link>
  );
}