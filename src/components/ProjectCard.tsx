import { format } from "date-fns";
import { Link } from "react-router-dom";
import ptBR from 'date-fns/locale/pt-BR';

import {  iconHandler } from "../utils/icons";
import { ProjectProps } from "../utils/props";

export function Project(props: ProjectProps) {
  const availableDateFormatted = format(props.createdAt, "EEEE' • 'd' de 'MMMM'", {
    locale: ptBR,
  })

  return (
    <Link to={`/project/${props.slug}`} className="group mr-5 mb-5 sm:mr-0 sm:ml-5 ">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div 
        className={`rounded border border-gray-500 p-4 mt-2 min-w-[16rem] md:min-w-[21.1rem] ${props.isDone ? "group-hover:border-green-500" : "group-hover:border-yellow-500"}`}>
        <header className="flex items-center justify-evenly">
        <span className={`flex items-center text-sm rounded py-[0.125rem]   font-bold  ${props.isDone ? "text-green-500 mr-10" : "text-yellow-500 mr-5"}`}>
            {iconHandler({emojiName: props.emojiName, size: 20})}
            <p className="ml-2">{props.isDone ? "Projeto Concluido" : "Projeto em Desenvolvimento"}</p>
          </span>
          <span className={`rounded py-[0.125rem] text-sm px-2 border font-bold  ${props.isDone ? "text-green-500 border-green-300 ml-10" : "text-yellow-500 border-yellow-300"}`}>
            {props.resumedName}
          </span>
        </header>

        <strong className='mt-5 flex place-content-center '>
          <p className="text-sm sm:text-base"> {props.name.length > 21 ? props.name.slice(0, 21).concat("", '...') : props.name}</p>
        </strong>
      </div>
    </Link>
  );
}