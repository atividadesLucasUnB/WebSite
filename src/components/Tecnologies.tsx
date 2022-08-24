import { Link } from "react-router-dom";

import {  iconHandler } from "../utils/icons"
import { TecnologiesProps } from "../utils/props";

export function Tecnologies(props: TecnologiesProps) {
  return (
    <Link to={`/tecnology/${props.slug}`} >
        <div className="bg-gray-600  h-[3.8rem] w-[10.57rem] text-black flex ml-3  rounded-lg items-center justify-evenly p-5 mb-5 ">
        { iconHandler({emojiName: props.emojiName, size: 32})}
        <p className="text-base font-semibold ">{props.name}</p>
        </div>
    </Link>
  );
}