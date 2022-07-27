import { gql, useQuery } from "@apollo/client";
import { ArrowLeft, LinuxLogo, WindowsLogo } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { isOperatingSystemKnow } from "../utils/platform"

const GET_DATA_BY_SLUG = gql`
query getLessoBySlug($slug: String) {
  activity(where: {slug: $slug}) {
    grade
    name
    linuxUrl
    description
    windowsUrl
    tecnologies {
      id
      name
      tecnologyURL {
        url
      }
    }
  }
}
`

interface GetDataBySlugResponse {
    activity: {
        grade: string;
        name: string;
        linuxUrl: string;
        description: string;
        windowsUrl: string; 
        tecnologies: {
            id: string;
            name: string;
            tecnologyURL: {
                url: string;
              }
          }[]
    }
}

export function Atividades() {
    const { slug } = useParams<{  slug: string;   }>();
    const {data} = useQuery<GetDataBySlugResponse>(GET_DATA_BY_SLUG, {
        variables: {
            slug
        }
    })
    if (!data) {
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
        
        <div className="flex  p-5">

            <div className="ml-[6.29rem] flex flex-col ">
                <p className="font-medium text-sm mb-7">{data?.activity.grade}</p>
                <h1 className="font-semibold text-5xl mb-3">{data?.activity.name}</h1>
                <p className="font-normal text-base w-[30rem]">
                {data?.activity.description}
                </p>
            </div>

            <div className="flex flex-col ml-96">
                <p className="font-semibold text-5xl">TECNOLOGIAS USADAS</p>
                <div className="mt-5">
                {data?.activity.tecnologies.map(tecnology => {
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

            <div className="ml-[6.29rem] space-x-2 mt-[5.38rem] flex flex-col place-items-center">
                <div className="bg-green-400 flex place-items-center w-[16rem] h-[4rem] rounded p-2 hover:bg-green-500 " >
                    {isOperatingSystemKnow(window) === 'Linux'  ? <LinuxLogo size={32}/> : <WindowsLogo size={32}/> }
                    <a 
                        href={ isOperatingSystemKnow(window) === 'Linux'  ?   data?.activity.windowsUrl  : data?.activity.linuxUrl} 
                        className="font-bold text-sm whitespace-nowrap align-middle ml-[0.629rem]">
                            {isOperatingSystemKnow(window) === 'Linux'  ?   'DOWNLOAD PARA LINUX' : 'DOWNLOAD PARA WINDOWS'}
                    </a>
                </div>
                <a href="#/" className="font-bold text-sm mt-8">DOWNLOAD PARA OUTRAS PLATAFORMAS</a>
            </div>
            <hr className="self-end mt-20 mb-5 w-full border-gray-700"/>
        </div>
    )
}