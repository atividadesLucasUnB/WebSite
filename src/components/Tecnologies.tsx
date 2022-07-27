import {  iconHandler } from "../utils/icons"

interface TecnologiesProps {
    name: string;
    tecnologyLogoUrl: string;
    emojiName: string;
}

export function Tecnologies(props: TecnologiesProps) {
  return (
    <div className="bg-gray-600  h-[3.8rem] w-[10.57rem] text-black flex ml-3  rounded-lg items-center justify-evenly p-5">
       { iconHandler({emojiName: props.emojiName, size: 32})}
       <p className="text-base font-semibold">{props.name}</p>
    </div>
  );
}