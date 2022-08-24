import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";

import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { useGetTecBySlugQuery } from "../graphql/generated";

export function Tecnology() {
    const { slug } = useParams<{ slug: string; }>();
    const { data, loading } = useGetTecBySlugQuery({
        variables: {
            slug
        }
    })
    if (loading || !data!.tecnology) {
        return <Loading />
    }
    return (
        <div className="min-h-screen">
            <Header />
            <Link to="/#" className="flex  space-x-2 place-items-center ml-[4rem] m-[5rem]">
                <ArrowLeft size={32} />
                <p className="text-base font-normal">VOLTAR AO MENU</p>
            </Link>


            <div className="flex flex-col lg:flex-row p-5 mb-20">
                <div className="ml-[6.29rem] flex flex-col mb-10 ">
                    <h1 className="font-semibold text-xl sm:text-5xl mb-3">{data?.tecnology.name}</h1>
                    <p className="font-normal text-base w-[10rem] md:w-[30rem] ">
                        {data?.tecnology.description}
                    </p>
                </div>

                <div className="flex flex-col ml-[6.29rem] lg:ml-96 ">
                    <img alt={data?.tecnology.resumedName} src={data?.tecnology.tecnologyURL.url} />
                </div>

            </div>
            <hr className="self-end mt-auto mb-10 w-full border-gray-700" />
        </div>
    )
}