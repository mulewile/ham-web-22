import { volumes } from "../lib/data";
import Link from "next/link";
import Image from "next/image";
import { main_cover } from "../lib/data";
import { introduction } from "../lib/data";

export default function Home() {
  return (
    <div>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <Image src={main_cover} width={200} height={290} alt="cover" />
      <nav>
        <Link href="/volumes">Available Volumes</Link>
      </nav>
    </div>
  );
}
