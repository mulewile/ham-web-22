import Link from "next/link";
import { volumes } from "../../lib/data";
export default function VolumeOne() {
  return (
    <>
      <div>
        <h1>{volumes[0].title}</h1>
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
        <p>{volumes[0].description}</p>

        <h3>Books</h3>
        <ul>
          {volumes[0].books.map((book) => (
            <li key={book.ordinal}>
              {book.ordinal} {book.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
