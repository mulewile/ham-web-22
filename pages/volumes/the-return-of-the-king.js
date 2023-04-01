import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";
export default function VolumeThree() {
  const volData = volumes.find(({ slug }) => slug === "the-return-of-the-king");
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
      <Link href="/volumes/the-two-towers">BACK</Link>
    </>
  );
}
