import Link from "next/link";
import Image from "next/image";
import dogimg from "../images/dog.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-mono p-24">
      <div className="w-full h-12 max-w-5xl max-h-5xl">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="z-10 w-full max-w-5xl text-sm lg:flex">
        <ul className="list-decimal">
          <li>
            Download Mochi Diffusion from{" "}
            <Link
              href={"https://github.com/godly-devotion/MochiDiffusion/releases"}
            >
              Release page on Github.
            </Link>
          </li>
          <>Set it up by clicking the dmg file.</>
          <li>
            Prepare models. You can find them at{" "}
            <Link href={"https://huggingface.co/coreml"}>huggingface</Link> or
            somewhere.
          </li>
          <li>
            You can find models directry in
            "Users/username/Documents/MochiDiffusion/". Move the model to
            "models" directry.
          </li>
          <li>Enjoy generating pictures.</li>
        </ul>
      </div>
      <div>
        <Image src={dogimg} alt="Picture of generated dog" />
      </div>
    </main>
  );
}
