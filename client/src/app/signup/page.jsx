"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { Toaster, toast } from "sonner";
// require("dotenv").config();

export default function SignUp() {
  //   const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isCandidate, setCandidate] = useState(false);
  //   const [theme, setTheme] = useState(true);
  const [interviewStyle, setInterviewStyle] = useState(true);
  const [candidateStyle, setCandidateStyle] = useState(false);
  //   const [theme, setTheme] = useState(true);

  const toggleCandidate = (isCandid) => () => {
    setCandidate(isCandid);
    isCandid ? setCandidateStyle(false) : setCandidateStyle(true);
    isCandid ? setInterviewStyle(true) : setInterviewStyle(false);
  };

  //   useEffect(() => {
  //     const handleStorageChange = () => {
  //       const storedTheme = localStorage.getItem("theme");
  //       setTheme(storedTheme === "true");
  //     };

  //     // Check if window is defined to ensure it's executed on the client side
  //     if (typeof window !== "undefined") {
  //       // Attach event listener for changes in localStorage
  //       window.addEventListener("storage", handleStorageChange);

  //       // Initial setup
  //       handleStorageChange();

  //       // Clean up the event listener when the component unmounts
  //       return () => {
  //         window.removeEventListener("storage", handleStorageChange);
  //       };
  //     }
  //   }, []); // Empty dependency array as it runs once on mount

  //   const handleSubmit = async (e) => {
  //     try {
  //       e.preventDefault();

  //       if (!form.email || !form.password) {
  //         toast.warning("Please fill in all fields");
  //         return;
  //       }

  //       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/login`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: form.email,
  //           password: form.password,
  //         }),
  //       });

  //       const data = await res.json();

  //       if (data.token) {
  //         toast.success("Logged in successfully");
  //         const user = {
  //           token: data.token,
  //           id: data.id,
  //           username: data.username,
  //           email: form.email,
  //           rating: data.ratings,
  //         };

  //         if (localStorage.getItem("user")) {
  //           localStorage.removeItem("user");
  //         }

  //         localStorage.setItem("user", JSON.stringify(user));

  //         setForm({ email: "", password: "" });

  //         router.push("/");
  //       } else {
  //         toast.error(data.msg);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  return (
    <div className="flex flex-col justify-center items-center h-dvh w-dvw">
      <h1 className=" text-center mb-4 text-[2rem]">Sign Up</h1>
      <div className="w-[500px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.25)] p-[50px] rounded-[10px] bg-slate-600">
        <div className="flex flex-row w-full h-10 mb-8 cursor-pointer">
          <div
            className={`text-center w-2/4 ${
              candidateStyle ? `bg-neutral-500` : `bg-gray-500`
            }`}
            onClick={toggleCandidate(true)}
          >
            Candidate
          </div>
          <div
            className={`flex justify-center item-center w-2/4  ${
              interviewStyle ? `bg-neutral-500` : `bg-gray-500`
            }`}
            onClick={toggleCandidate(false)}
          >
            Interviewer
          </div>
        </div>
        <form className="flex flex-col mb-8">
          <label className="flex flex-col gap-[0.5em] mb-[2em]">
            <div className="text-[0.8em]">EMAIL ADDRESS</div>
            <input
              className="text-[1em] border px-[15px] py-2.5 rounded-[5px] border-solid border-[#ddd] text-black"
              type="email"
              name="email"
              required
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              value={form.email}
            />
          </label>
          <label className="flex flex-col gap-[0.5em] mb-[2em]">
            <div className="text-[0.8em]">PASSWORD</div>
            <input
              className="text-[1em] border px-[15px] py-2.5 rounded-[5px] border-solid border-[#ddd] text-black"
              type="password"
              name="password"
              required
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
              value={form.password}
            />
          </label>
          <div className="">
            <Link href="/forgot_password">Forgot password?</Link>
          </div>
          <input
            className="text-[19px] text-black cursor-pointer mt-2.5 p-2.5 rounded-[5px] border-[none] bg-slate-950"
            type="submit"
            value="Log In"
          />
        </form>
        <div className="">
          <div>Already have an account?</div>
          <div>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
      {/* <Toaster theme={theme ? "dark" : "light"} position="bottom-left" /> */}
    </div>
  );
}
