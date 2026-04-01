import {JSX} from "react";
import Image from "next/image";
import resourcelogo from "@/public/resourcelogo.png";
import Link from "next/link";


export default function NavBar(): JSX.Element {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-center font-mono items-center text-center w-full border-4 border-solid border-myacc h-24 bg-mybg">
        
        <div className="relative flex justify-center p-5 items-center h-full w-1/4 border-4 border-solid border-transparent">
          <div className="relative">
            <Image src={ resourcelogo } className="relative -left-48 p-0.5 rounded-2xl border-4 border-double border-spacing-8 border-myacc" width="90" height="90" alt="Recource A.I. logo."/>
          </div>
        </div>
        <div className="relative flex justify-center items-center w-1/2 h-full">
          <Link href={'/ui'}>Sign Up</Link>
        </div>
        
        <div className="relative flex justify-center items-center h-full w-1/4 border-4 border-solid border-transparent">
        
        </div>
        
      </div>
    </>
  )
}