"use client"

import Google_Icon from "@/assets/images/google-icon 1.png";
import Apple_Icon from "@/assets/images/apple_icon.png";
import Image from "next/image";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    const setUpProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProvider();
  }, []);

  const signInHandler = () => {
    signIn("google", {
      callbackUrl: "/dashboard"
    })
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="bg-black flex justify-center items-center max-w-screen h-24 lg:w-1/3 lg:min-h-screen">
          <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl">
            Board.
          </h1>
        </div>
        <div className="max-w-md flex flex-col gap-4 mx-6 mt-16 justify-center md:mx-auto">
          <div>
            <h2 className="text-black text-2xl font-medium">Sign In</h2>
            <p>Sign in to your account</p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={signInHandler}
                  className="bg-white px-4 py-1 rounded-xl text-center flex items-center justify-center gap-2"
                >
                  <Image src={Google_Icon} alt="google_icon" />
                  <span className="text-gray-400 font-light">
                    Sign in with Google
                  </span>
                </button>
              ))}
            <div className="bg-white px-4 py-1 rounded-xl text-center flex items-center justify-center gap-2">
              <Image src={Apple_Icon} alt="apple_icon" />
              <span className="text-gray-400 font-light">
                Sign in with Apple
              </span>
            </div>
          </div>
          <div className="bg-white max-w-md rounded-xl p-8 space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="h-10 bg-gray-200 rounded-lg px-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="h-10 bg-gray-200 rounded-lg px-2"
              />
            </div>
            <div href="/" className="text-blue-600 mt-4">
              Forgot password?
            </div>
            <div>
              <button className="bg-black w-full font-medium text-white text-center rounded-lg py-2">
                Sign In
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-1">
            <h5 className="text-gray-500">Don&apos;t have an account?</h5>
            <span className="text-blue-600">Register here</span>
          </div>
        </div>
      </div>
    </>
  );
}
