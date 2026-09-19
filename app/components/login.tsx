"use client";

import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";

function Login({ setUser = () => {} }: { setUser?: (user: any) => void }) {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  function register() {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser?.(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser?.(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="fixed left-1/2 top-1/2 flex h-80 w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col items-center bg-white p-6 text-black shadow-lg">
      <div className="mb-6 text-center text-xl font-bold text-brand-500">
        Login in to summarist
      </div>
      <button className="relative flex bg-brand-500 text-white text-base justify-center items-center w-full h-10 rounded-sm" type="button">
        <span aria-hidden="true" className="w-6 h-6"><IoPerson /></span>
        Login as Guest
      </button>
      <form
        className="flex w-full flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-brand-500"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-brand-500"
        />
        <button
          type="submit"
          className="btn"
          onClick={login}
        >
          Login
        </button>
        <button
          type="button"
          className="rounded-md border border-brand-500 px-4 py-2 text-brand-500 transition hover:bg-brand-500 hover:text-white"
          onClick={register}
        >
          Create account
        </button>
      </form>
    </div>
  );
}

export default Login;
