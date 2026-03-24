import Link from 'next/link';
import { JSX } from 'react';

export default function HomeBtn(): JSX.Element {
  return (
    <Link href={'/'} rel={'Home'}>
      <button type={"button"} className="mybtn">Home</button>
    </Link>
  )
}
