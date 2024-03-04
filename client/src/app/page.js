import styles from "./page.module.css";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${styles.wrap}`}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center gap-16">
          <h1 className="text-6xl font-bold text-white">InterviewMastery</h1>
          <div className="flex flex-row w-dvw justify-evenly text-white">
            <div className="flex flex-col text-center gap-8">
              <span className=" text-3xl ">For Candidates</span>
              <p className="text-xl w-2/3 self-center">
                Showcase your skills and get hired by top companies
              </p>
            </div>
            <div className="flex flex-col text-center gap-8">
              <span className="text-3xl">For Interviewers</span>
              <p className="text-xl w-2/3 self-center">
                Get the best out of your candidates with our platform powered by
                AI
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              href="/signup"
              className="bg-slate-500 text-white py-2 px-4 rounded-md"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="border border-white text-white py-2 px-4 rounded-md"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/* <Image src="/hero.svg" width={400} height={400} alt="hero" /> */}
        </div>
      </div>
    </main>
  );
}
