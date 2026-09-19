"use client";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";

function Login({ setUser }: any) {
  const [data, setData] = useState({ email: "", password: "" });

  function register() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    function login() {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-80 bg-white">
      <div className="text-center font-bold text-xl  mb-6 text-brand-500">Login in to summarist</div>
      <button className="">Login as Guest</button>
      <form
        action=""
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-80 bg-white"
      >
        <label>
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
        </label>
      </form>
    </div>
  );
}

export default Login;
