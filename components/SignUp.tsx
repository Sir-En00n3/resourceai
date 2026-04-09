import {JSX} from "react";
// import { authClient } from "@/lib/auth-client";
import Form from "next/form";


export default function SignUp(): JSX.Element {
  return (
    <Form action={"action"} className="flex flex-col justify-around items-center w-1/2 h-1/2 bg-mybg color-white
                                      font-sans font-semibold">
      <h1>Sign Up</h1>
      <p>Please fill out the form below to sign up.</p>
      
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" required placeholder="Type Legal First Name"
             className="border-2 border-solid border-black p-2 w-full h-10 bg-[#A5C7f5] text-black" />
      
      
    </Form>
  )
}