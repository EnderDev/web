import React from "react";
import { Header } from "../components/Header"
import { TransitionLayout } from "../components/TransitionLayout";

const Projects = () => {
    return (
        <>
            <Header />

            <TransitionLayout>
                <div className={"flex w-full items-center flex-col px-16 lg2:px-36"}>
                    <div className={"bg-black text-white w-full max-w-screen-2xl h-full"}>
                        <main className={"w-full py-28 xs:py-56 flex justify-center flex-col"}>
                            <h1 className={"text-6xl py-4 max-w-screen-lg leading-tight"}>
                                Projects
                            </h1>
                        </main>

                        <div className={"w-full gap-20 flex-wrap py-16 flex"}>
                            <a href={"https://www.dothq.co"} target={"_blank"} className={"flex"} style={{ width: "32rem", maxWidth: "108rem" }}>
                                <div className={"flex flex-col rounded-xl"}>
                                    <img className={"rounded-xl"} src={"https://placeimg.com/640/480/any"}></img>
                                </div>
                            </a>

                            <a href={"https://github.com/dothq/one"} target={"_blank"}className={"flex"} style={{ width: "32rem", maxWidth: "108rem" }}>
                                <div className={"flex flex-col rounded-xl"}>
                                    <img className={"rounded-xl"} src={"https://placeimg.com/640/480/any?1"}></img>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </TransitionLayout>
        </>
    )
}

export default Projects;