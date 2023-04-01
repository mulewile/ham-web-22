import Link from "next/link";
import { volumes } from "../lib/data";
export default function Volumes() {
  return (
    <>
      <h1>The Lord of The Rings</h1>
      <h2>Available Volumes</h2>
      <div>
        <nav>
          <Link href="/Home">Home</Link>
        </nav>
      </div>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

{
  /* <ul>
<li>
  <Link href="/volumes/volumeOne">{volumes[0].title}</Link>
</li>
<li>
  <Link href="/volumes/volumeTwo">{volumes[1].title}</Link>
</li>
<li>
  <Link href="/volumes/volumeThree">{volumes[2].title}</Link>
</li>
</ul> */
}
