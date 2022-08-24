import { Link, useParams } from "react-router-dom";
import { ArrowLeft, GithubLogo } from "phosphor-react";

import { Header } from "../components/Header";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { ButtonsDownload } from "../components/ButtonsDownload";
import { Loading } from "../components/Loading";

export function Atividade() {
    const { slug } = useParams<{  slug: string;   }>();
    const {data, loading} = useGetLessonBySlugQuery({
        variables: {
            slug
        }
    })
    if (!loading || !data!.activity) {
        return <Loading />
      }
    return (
        <div className="min-h-screen">
            <Header />
            <Link to="/#" className="flex  space-x-2 place-items-center ml-[4rem] m-[5rem]">
                <ArrowLeft size={32}/>
                <p className="text-base font-normal">VOLTAR AO MENU</p>
            </Link>
        

        <div className="flex flex-col lg:flex-row p-5">
            <div className="ml-[6.29rem] flex flex-col mb-10 ">
                <p className="font-medium text-sm mb-7">{data?.activity.grade}</p>
                <h1 className="font-semibold text-xl sm:text-5xl mb-3">{data?.activity.name}</h1>
                <p className="font-normal text-base w-[10rem] md:w-[30rem] ">
                {data?.activity.description}
                </p>
            </div>

            <div className="flex flex-col ml-[6.29rem] lg:ml-96 ">
                <p className="font-semibold text-xl sm:text-5xl">TECNOLOGIAS USADAS</p>
                <div className="mt-5 self-start flex gap-2 flex-wrap">
                {data?.activity.tecnologies.map(tecnology => {
                    return (
                        <img 
                        src={tecnology.tecnologyURL.url} 
                        alt={`${tecnology.name} Logo`} 
                        className="w-[5rem] h-[5rem] mr-5"/>
                        )
                    })}
                </div>
            </div>

        </div>
            <div className="mb-10">
            {
                (
                    data?.activity.linuxUrl && 
                    data?.activity.windowsUrl
                ) && data?.activity.hasDownload ? 
                <ButtonsDownload props={data.activity} />
            :
            <div 
            className="ml-[6.29rem] space-x-2 mt-[5.38rem] flex flex-col place-items-center mr-10">
                <a 
                href={data?.activity.otherOs} 
                className="bg-green-400 flex place-items-center w-[16rem] h-[4rem] rounded p-5 hover:bg-green-500 align-middle" >
                    <GithubLogo size={32} />
                    <a className="font-bold text-sm whitespace-nowrap  ml-[0.629rem]">
                        CÓDIGO NO GITHUB
                    </a>
                </a>
            </div>
            }
            </div>
            <hr className="self-end mt-auto mb-10 w-full border-gray-700"/>
        </div>
    )
}