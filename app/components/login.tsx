"use client";

import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import { Dispatch, SetStateAction, useState } from "react";
import { IoClose, IoPerson } from "react-icons/io5";
import { useRouter } from "next/navigation";

function Login({
  setUser = () => {},
  setShowForm,
}: {
  setUser: Dispatch<any>;
  setShowForm: Dispatch<SetStateAction<boolean>>;
}) {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
 const router = useRouter();
  // signInAnonymously(auth)
  //   .then(() => {
  //     // Signed in..
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ...
  //   });

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
      router.push("/for-you");
  }
 

  function loginAsGuest() {
    signInAnonymously(auth)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser?.(user);
        setShowForm(false);
        router.push("/for-you");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 w-full h-screen">
      <div className="fixed left-1/2 top-1/2 flex h-80 w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col items-center bg-white p-6 text-black shadow-lg">
        <IoClose
          size={24}
          className="absolute cursor-pointer right-2"
          color="black"
          onClick={() => setShowForm((prev) => !prev)}
        />
        <div
          className="mb-6 text-center text-xl font-bold text-brand-500"
          style={{ paddingTop: "30px" }}
        >
          Login in to summarist
        </div>
        <button
          className="relative flex bg-brand-500 text-white text-base justify-center items-center w-full h-10 rounded-sm"
          type="button"
          style={{ backgroundColor: "#032b41" }}
          onClick={loginAsGuest}
        >
          <span
            aria-hidden="true"
            className="absolute top-1/2 -translate-y-1/2 left-2"
          >
            <IoPerson size={24} />
          </span>
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
          <button type="submit" className="btn" onClick={login}>
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
    </div>
  );
}

export default Login;
