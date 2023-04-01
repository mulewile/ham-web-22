import Volumes from "./volumes";
import Link from "next/link";
import { introduction } from "../lib/data";

export default function Home() {
  return (
    <div>
      <h1>The Lord of the Rings</h1>
      <nav>
        <Link href="/volumes">Available Volumes</Link>
      </nav>
    </div>
  );
}
