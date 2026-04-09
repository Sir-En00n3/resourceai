import {JSX} from "react";
import ThisBtn from "../components/ThisBtn";
import logobanner from "@/public/logobanner.png";
import Image from "next/image";


export default function Home(): JSX.Element {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center text-center w-full h-full">
        <div className="w-full h-32 bg-white relative flex border"></div>
        <div className="relative w-full flex justify-center items-center border-4 border-solid border-sky-500 h-100 bg-mybg">
          <Image src={logobanner} alt={'ResourceAI Logo Banner.'} width={2000} height={1000} className="relative w-full h-full"/>
        </div>

        <h1 className="font-open-sans font-semibold text-7xl m-10">ResourceAI Interface</h1>
        <p className="w-1/2 text-2xl">This is the first and inital page of the interface. Here the user is a guest and can access information that informs the userGuest the hows,
                                      whats, and whys of the ResourceAI platform.
        </p>
        <p className="w-1/2 text-2xl">The userGuest can then decide if they want to create an account or if they already have one, then they can sign in.</p>
        <div className="relative flex flex-col justify-center items-center text-center w-full">
          <p className="text-2xl m-10 p-10 font-open-sans">Click the ThisBtn to enter the ResourceAI Interface!</p>
        </div>
        
        <ThisBtn />
      </div>
    </>
  )
}