import Link from "next/link";
import { volumes } from "../../lib/data";
export default function VolumeThree() {
  return (
    <>
      <div>
        <h2>{volumes[2].title}</h2>
      </div>
      <nav>
        <ul>
          <nav>
            <Link href="/Home">Home</Link>
          </nav>

          <li>
            <Link href="/volumes">Available Volumes</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
