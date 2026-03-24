import { JSX } from "react";
import ThisBtn from "../components/ThisBtn";


export default function Home(): JSX.Element {
  
  return (
    <main className="flex w-full h-full min-h-screen flex-col items-center justify-center bg-mybg p-24">
      <h1 className="font-open-sans font-semibold text-7xl m-10">ResourceAI Interface</h1>
      <p className="text-2xl m-10 p-10 font-open-sans">Click the ThisBtn to enter the ResourceAI Interface!</p>
      <ThisBtn />
    </main>
  );
}
