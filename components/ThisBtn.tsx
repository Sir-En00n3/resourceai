import { JSX } from "react";
import Link from "next/link";

export default function ThisBtn(): JSX.Element {
  return (
    <>
      <Link rel="link" href={"/ui"}>
        <button type="button" className="mybtn w-16 h-12">
          This Btn
        </button>
      </Link>
    </>
  );
}
