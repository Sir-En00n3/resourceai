import { JSX } from "react";
import HomeBtn from "@/components/HomeBtn";

export default function Page(): JSX.Element {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center text-center w-full h-full bg-mybg">
        <header className="relative flex flex-row justify-center items-center text-center w-full height-15% border-4 border-solid border-myacc">
          <div className="relative flex flex-col justify-center items-start text-center w-1/4 h-full p-1">
            <HomeBtn />
            <button className="mybtn">Submit</button>
          </div>
          <div className="relative flex flex-col justify-center items-center text-center w-1/2 h-full p-1">
            <h1 className="font-geist text-6xl font-semibold" >ResourceAI</h1>
            <p>The last resource you will ever need!</p>
          </div>

          <div className="relative flex flex-col justify-center items-center text-center w-1/4 h-full p-1"></div>
        </header>
      </div>
    </>
  );
}
