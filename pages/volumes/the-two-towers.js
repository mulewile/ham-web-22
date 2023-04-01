import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";
export default function VolumeTwo() {
  const volData = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <div>
        <h1>{volData.title}</h1>
        <nav>
          <Link href="/Home">Home</Link>
          <Link href="/volumes">Available Volumes</Link>
        </nav>
        <p>{volData.description}</p>

        <h3>Books</h3>
        <ul>
          {volData.books.map((book) => (
            <li key={book.ordinal}>
              {book.ordinal} {book.title}
            </li>
          ))}
        </ul>
        <Image src={volData.cover} width={140} height={230} alt="cover" />
      </div>
      <nav>
        <Link href="/volumes/the-fellowship-of-the-ring">BACK</Link>
        <p>Browse</p>
        <Link href="/volumes/the-return-of-the-king">NEXT</Link>
      </nav>
    </>
  );
}
