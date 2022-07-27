import { format } from "date-fns";
import { Link } from "react-router-dom";
import ptBR from 'date-fns/locale/pt-BR';

import {  iconHandler } from "../utils/icons";

interface LessonProps {
    key: string;
    slug: string;
    name: string;
    tecName: string;
    emojiName: string;
    createdAt: Date;
}

export function Lesson(props: LessonProps) {
  const availableDateFormatted = format(props.createdAt, "EEEE' • 'd' de 'MMMM'", {
    locale: ptBR,
  })

  return (
    <Link to={`/atividades/${props.slug}`} className="group ml-5">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div 
        className='rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500'>
        <header className="flex items-center justify-evenly">
        <span className='flex items-center text-sm rounded py-[0.125rem] px-2 text-green-500  font-bold mr-5'>
            {iconHandler({emojiName: props.emojiName, size: 20})}
            <p className="ml-2">Atividade Concluida</p>
          </span>
          <span className=' rounded py-[0.125rem] text-sm px-2 text-green-500 border font-bold border-green-300'>
            {props.tecName}
          </span>
        </header>

        <strong className='mt-5 flex place-content-center '>
          <p className=""> {props.name.length > 21 ? props.name.slice(0, 21).concat("", '...') : props.name}</p>
        </strong>
      </div>
    </Link>
  );
}