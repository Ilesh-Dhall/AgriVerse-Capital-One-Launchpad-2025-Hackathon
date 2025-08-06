import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Leaf } from "lucide-react";
import { Caprasimo } from "next/font/google";

const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div>
      <section className="bg-background h-screen flex flex-col items-center">
        <nav className="flex justify-between max-w-6xl w-full p-8">
          <div className="flex gap-2 items-center justify-center">
            <Leaf color="green" strokeWidth={3} size={30} />
            <h1 className="font-logo text-2xl font-black">Agriverse</h1>
          </div>
          <ul className="flex gap-8 items-center text-gray-800">
            <li className="hover:underline underline-offset-2 transition-all hover:font-bold hover:text-green-900">
              <a href="/about">About Us</a>
            </li>
            <li className="hover:underline underline-offset-2 transition-all hover:font-bold hover:text-green-900">
              <a href="/products">Products</a>
            </li>
            <li className="hover:underline underline-offset-2 transition-all hover:font-bold hover:text-green-900">
              <a href="/demo">Demo</a>
            </li>
            <li className="hover:underline underline-offset-2 transition-all hover:font-bold hover:text-green-900">
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div>
            <Button
              className="rounded-4xl px-5 border-green-800"
              variant="outline"
              size={"lg"}
            >
              Join Now
              <ArrowUpRight strokeWidth={3} />
            </Button>
          </div>
        </nav>
        <main className="flex grow w-full justify-center items-center">
          <div className="w-1/2 h-full relative ">
            <div className="absolute shadow-md overflow-hidden rounded-lg -rotate-12 top-40 left-40">
              <Image
                src={"/template.png"}
                alt="tem"
                width={300}
                height={300}
              ></Image>
              More like this will be added later
            </div>
          </div>
          <div className="w-1/2">
            <h1
              className={`${caprasimo.className} font-light text-7xl text-green-900 w-0`}
            >
              Your Intelligent Farming Companion
            </h1>
            <h2 className="text-xl mt-4 mb-8 w-100">
              Get instant, expert advice for your crops in your own language
            </h2>
            <a
              href="/dashboard"
              className="flex gap-2 items-center justify-center hover:bg-green-800 hover:text-white transition-all duration-300 w-fit p-4 rounded-full text-xl font-logo border-green-800 border-2"
            >
              Ask AgriVerse
              <ArrowRight strokeWidth={3} className="" />
            </a>
          </div>
        </main>
      </section>
      <section className="bg-white">Rest of the page</section>
    </div>
  );
}
