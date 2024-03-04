"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Toaster, toast } from "sonner";
require("dotenv").config();

export default function SignUp() {
  //   const router = useRouter();
  const [isCandidate, setCandidate] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: `${isCandidate ? "candidate" : "interviewer"}`,
  });
  const [interviewStyle, setInterviewStyle] = useState(true);
  const [candidateStyle, setCandidateStyle] = useState(false);

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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!form.email || !form.password || !form.firstName || !form.lastName) {
        toast.warning("Please fill in all fields");
        return;
      }

      const res = await fetch(`http://localhost:400/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          firstName: form.firstName,
          lastName: form.lastName,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (data.token) {
        toast.success("Logged in successfully");
        const user = {
          token: data.token,
          id: data.id,
          email: form.email,
          firstName: form.firstName,
          lastName: form.lastName,
        };

        if (localStorage.getItem("user")) {
          localStorage.removeItem("user");
        }

        localStorage.setItem("user", JSON.stringify(user));

        setForm({ email: "", password: "" });

        router.push("/");
      } else {
        toast.error(data.msg);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-dvh w-dvw bg-[#12151c]">
      <h1 className=" text-center mb-4 text-[2rem] text-white">Sign Up</h1>
      <div className="w-[650px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.25)] pb-[50px] rounded-[10px] bg-slate-600">
        <div className="flex flex-row w-full h-14 mb-12 cursor-pointer">
          <div
            className={`flex justify-center items-center w-2/4 rounded-tl-[10px] ${
              candidateStyle
                ? `bg-neutral-500 border-b-2 border-transparent`
                : `bg-gray-500 border-b-2 border-b-white`
            }`}
            onClick={toggleCandidate(true)}
          >
            <span>Candidate</span>
          </div>
          <div
            className={`flex justify-center items-center w-2/4 rounded-tr-[10px]  ${
              interviewStyle
                ? `bg-neutral-500 border-b-2 border-transparent`
                : `bg-gray-500 border-b-2 border-b-white`
            }`}
            onClick={toggleCandidate(false)}
          >
            <span>Interviewer</span>
          </div>
        </div>
        <form className="flex flex-col mb-8 px-[50px]">
          <div className="flex flex-row justify-between">
            <label className="flex flex-col gap-[0.5em] mb-[2em]">
              <div className="text-[0.8em]">FIRST NAME</div>
              <input
                className="text-[1em] border px-[15px] py-2.5 rounded-[5px] border-solid border-[#ddd] text-black"
                type="text"
                name="firstName"
                required
                onChange={(e) => {
                  -setForm({ ...form, firstName: e.target.value });
                }}
                value={form.firstName}
              />
            </label>
            <label className="flex flex-col gap-[0.5em] mb-[2em]">
              <div className="text-[0.8em]">LAST NAME</div>
              <input
                className="text-[1em] border px-[15px] py-2.5 rounded-[5px] border-solid border-[#ddd] text-black"
                type="text"
                name="lastName"
                required
                onChange={(e) => {
                  -setForm({ ...form, lastName: e.target.value });
                }}
                value={form.lastName}
              />
            </label>
          </div>
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
            className="text-[19px] text-white cursor-pointer mt-2.5 p-2.5 rounded-[5px] border-[none] bg-slate-950"
            type="submit"
            value="Sign Up"
            onClick={handleSubmit}
          />
        </form>
        <div className="flex flex-row justify-between px-[50px]">
          <div>Already have an account?</div>
          <div className=" underline">
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
      <Toaster theme="light" position="bottom-left" />
    </div>
  );
}
