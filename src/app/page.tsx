import Image from "next/image";
import Button2 from "./helpers/Button2";
import Link from "next/link";

export default function Home() {
  return (
    <main 
      className="flex flex-col gap-8 w-full min-h-[calc(100vh-7rem)] justify-center"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center">
          Get started with Unix TBA Multichain Manger
        </h1>
        <p className="w-1/2 mx-auto text-xl text-white-1 font-semibold text-center"> Manage all your multichain activities effortlessly in one place. Streamline your multichain management with a single, convenient solution.</p>
      </div>

      <div className="min-w-md flex items-center justify-center gap-8">
          <Button2>Add an Account</Button2>     
          <button className="bg-button px-8 py-2 rounded-xl font-semibold"> <Link href="/swap">Connect</Link></button>
      </div>
      <div className="h-40 invisible"></div>
    </main>
  );
}
