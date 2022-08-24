import { LinuxLogo, WindowsLogo } from "phosphor-react";
import { isOperatingSystemKnow } from "../utils/platform";
import { ButtonsDownloadProps } from "../utils/props";

export function ButtonsDownload(props: ButtonsDownloadProps) {
    return (
        <>
        <div className="ml-[6.29rem] space-x-2 mt-[5.38rem] flex flex-col place-items-center mr-10">
        <a href={(
            isOperatingSystemKnow(window) === 'Linux'  ?  
            props?.linuxUrl  : 
            props?.windowsUrl
            ) || ""
        } 
        className="bg-green-400 flex place-items-center w-[16rem] h-[4rem] rounded p-2 hover:bg-green-500 ">
        {
            isOperatingSystemKnow(window) === 'Linux' ? 
            <LinuxLogo size={32}/> : 
            <WindowsLogo size={32}/> 
        }
            <a 
                className="font-bold text-sm whitespace-nowrap align-middle ml-[0.629rem]">
                {
                isOperatingSystemKnow(window) === 'Linux'  ?
                'DOWNLOAD PARA LINUX' :
                'DOWNLOAD PARA WINDOWS'
                }
            </a>
        </a>
        <a href={props?.otherOs} className="font-bold text-sm mt-8">DOWNLOAD PARA OUTRAS PLATAFORMAS</a>
    </div>
    </>
    )
}