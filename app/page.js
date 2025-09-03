import Link from "next/link";
export const metadata = {
  title: 'The Wild Oasis',
};

export default function Page() {
  return (
    <div>

      <h1>The Wild Oasis. Welcome to Paradise.</h1>
      <Link href='/cabins'>Expolre Luxury cabins</Link>
    </div>
  );
}
