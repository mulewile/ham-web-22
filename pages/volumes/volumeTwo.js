import Link from "next/link";
import { volumes } from "../../lib/data";
export default function VolumeTwo() {
  return (
    <>
      <div>
        <h2>{volumes[1].title}</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/Home">Home</Link>
          </li>
          <li>
            <Link href="/volumes">Available Volumes</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
