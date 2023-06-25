import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono lg:flex">
        <li>
          <Link href="/mochi-diffusion">
            How to install Mochi Diffusion on Apple Silicon Mac
          </Link>
        </li>
      </div>
    </main>
  );
}
