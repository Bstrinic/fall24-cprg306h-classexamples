import Link from "next/link";
import MyFirstComponent from "./_components/my-first-component";

export default function Home() {


  let linkStyles = "underline text-cyan-600 hover:text-cyan-300";
  return (
    <main>
      <h1>CPRG 306 Class Examples</h1>
      <p>Hello World!</p>
      <MyFirstComponent />
      <h2>Example Links</h2>
      <ul>
        <li>
          <Link
            className={linkStyles} href="./week-2/">
            Week 2 Content
          </Link>
        </li>
        <li>
          <Link
            className={linkStyles} href="./week-3/objects">
            Week 3 - Objects
          </Link>
        </li>
        <li>
          <Link
            className={linkStyles} href="./week-3/props">
            Week 3 - Props
          </Link>
        </li>
        <li>
          <Link
            className={linkStyles} href="./week-4/functions">
            Week 4 - Functions
          </Link>
        </li>
        <li>
          <Link
            className={linkStyles} href="./week-4/counter">
            Week 4 - Counter
          </Link>
        </li>
        <li>
          <Link
            className={linkStyles} href="./week-5/">
            Week 5 - Managed Forms
          </Link>
        </li>
      </ul>
    </main>
  );
}
