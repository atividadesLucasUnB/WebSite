import { ArrowLeft, GithubLogo, LinuxLogo, WindowsLogo } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { useGetProjectBySlugQuery } from "../graphql/generated";
import { isOperatingSystemKnow } from "../utils/platform"

export function Projects() {
    const { slug } = useParams<{  slug: string;   }>();
    const {data} = useGetProjectBySlugQuery({
        variables: {
            slug
        }
    })
    if (!data || !data.project) {
        return (
          <div className="flex-1">
            <p>Carregando...</p>
          </div>
        )
      }
    return (
        <div className="">
            <Header />
            <Link to="/#" className="flex  space-x-2 place-items-center ml-[4rem] m-[5rem]">
                <ArrowLeft size={32}/>
                <p className="text-base font-normal">VOLTAR AO MENU</p>
            </Link>
        

        <div className="flex flex-col lg:flex-row p-5">
            <div className="ml-[6.29rem] flex flex-col mb-10 ">
                <h1 className="font-semibold text-xl sm:text-5xl mb-3">{data?.project.name}</h1>
                <p className="font-normal text-base w-[10rem] md:w-[30rem] ">
                {data?.project.description}
                </p>
            </div>

            <div className="flex flex-col ml-[6.29rem] lg:ml-96 ">
                <p className="font-semibold text-xl sm:text-5xl">TECNOLOGIAS USADAS</p>
                <div className="mt-5 self-start flex">
                {data?.project.tecnologies.map(tecnology => {
                    return (
                        <img 
                        src={tecnology.tecnologyURL.url} 
                        alt={`${tecnology.name} Logo`} 
                        className="w-[8rem] h-[8rem] "/>
                        )
                    })}
                </div>
            </div>

        </div>
            { data?.project.hasDownload ? 
            <div className="ml-[6.29rem] space-x-2 mt-[5.38rem] flex flex-col place-items-center mr-10">
            <a 
            href={isOperatingSystemKnow(window) === 'Linux'  ?   data?.project.linuxUrl  : data?.project.windowsUrl} 
            className="bg-green-400 flex place-items-center w-[16rem] h-[4rem] rounded p-2 hover:bg-green-500 " >
                {isOperatingSystemKnow(window) === 'Linux'  ? <LinuxLogo size={32}/> : <WindowsLogo size={32}/> }
                <a 
                    className="font-bold text-sm whitespace-nowrap align-middle ml-[0.629rem]">
                        {isOperatingSystemKnow(window) === 'Linux'  ?   'DOWNLOAD PARA LINUX' : 'DOWNLOAD PARA WINDOWS'}
                </a>
            </a>
            <a href={data?.project.otherOs} className="font-bold text-sm mt-8">DOWNLOAD PARA OUTRAS PLATAFORMAS</a>
        </div>
            :
            <div className="ml-[6.29rem] space-x-2 mt-[5.38rem] flex flex-col place-items-center mr-10">
            <a 
            href={data?.project.otherOs} 
            className="bg-green-400 flex place-items-center w-[16rem] h-[4rem] rounded p-5 hover:bg-green-500 align-middle" >
                <GithubLogo size={32} />
                <a 
                    className="font-bold text-sm whitespace-nowrap  ml-[0.629rem]">
                        CÓDIGO NO GITHUB
                </a>
            </a>
        </div>
            }
            <hr className="self-end mt-20 mb-5 w-full border-gray-700"/>
        </div>
    )
}