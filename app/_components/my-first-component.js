import Link from "next/link";

export default function MyFirstComponent() {
  // MyFirstComponent

  // Using JS inside of component
    let a = 3;
    let b = 4;
  return (
    <div>
      <h3>My First Component!</h3>
      <Link href="https://www.sait.ca">SAIT Website</Link>
      <p> {a} added to {b} = {a + b}</p>
    </div>
  );
}
