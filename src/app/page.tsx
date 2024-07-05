import Image from "next/image";
import Button2 from "./helpers/Button2";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24 gap-8"
      style={{
        backgroundColor: "#11212d",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='48' height='64' viewBox='0 0 48 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48 28v-4L36 12 24 24 12 12 0 24v4l4 4-4 4v4l12 12 12-12 12 12 12-12v-4l-4-4 4-4zM8 32l-6-6 10-10 10 10-6 6 6 6-10 10L2 38l6-6zm12 0l4-4 4 4-4 4-4-4zm12 0l-6-6 10-10 10 10-6 6 6 6-10 10-10-10 6-6zM0 16L10 6 4 0h4l4 4 4-4h4l-6 6 10 10L34 6l-6-6h4l4 4 4-4h4l-6 6 10 10v4L36 8 24 20 12 8 0 20v-4zm0 32l10 10-6 6h4l4-4 4 4h4l-6-6 10-10 10 10-6 6h4l4-4 4 4h4l-6-6 10-10v-4L36 56 24 44 12 56 0 44v4z' fill='%239ba8ab' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      }}
    >
      <div>
        <h1 className="text-5xl font-bold text-center">
          Get started with Unix TBA Multichain Manger
        </h1>
        <p className="text-xl text-white-1 font-semibold text-center mt-9">
          {" "}
          Manage all your multichain activities effortlessly in one place.
          Streamline your multichain management with a single, convenient
          solution.
        </p>
      </div>

      <div className="flex items-center justify-center gap-8">
        <Button2>Add an Account</Button2>
        <button className="bg-[#0039a6] px-8 py-2 rounded-md">
          {" "}
          <Link href="/swap">Connect</Link>
        </button>
      </div>
    </main>
  );
}
