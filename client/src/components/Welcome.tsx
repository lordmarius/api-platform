'use client'

import Image from "next/image";

import adminPicture from "../../public/api-platform/admin.svg"
import rocketPicture from "../../public/api-platform/rocket.svg"
import logo from "../../public/api-platform/logo_api-platform.svg"
import mercurePicture from "../../public/api-platform/mercure.svg"
import logoTilleuls from "../../public/api-platform/logo_tilleuls.svg"
import apiPicture from "../../public/api-platform/api.svg"
import "@fontsource/poppins"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import Card from "@/components/Card"

const Welcome = () => (
    <div className="w-full overflow-x-hidden">
      <section className="w-full bg-spider-cover relative">
        <a
          href="https://les-tilleuls.coop/en"
          target="_blank"
          rel="noreferrer noopener"
          className="z-10 bg-black px-8 py-2 text-xs text-white ribbon | md:px-12"
        >
          <div className="flex flex-row justify-center items-center translate-x-[5%]">
            Made with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="mx-2 w-5 h-5 fill-red-500"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            by
            <div className="pl-2 flex items-center">
              <Image
                alt="Les-Tilleuls.coop"
                src={logoTilleuls}
                width={100}
                height={20}
              />
            </div>
          </div>
        </a>
        <div className="container flex flex-row pt-24 pb-8 | md:px-20">
          <div className="hidden relative h-full w-2/5 origin-right scale-150 | md:block | lg:scale-100">
            <div className="absolute">
              <Image src={rocketPicture} alt="" />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center text-center | md:text-left md:items-start">
            <h1>
              <span className="block text-4xl text-cyan-200 font-bold mb-2">
                Welcome to
              </span>
              <Image alt="API Platform" src={logo} />
            </h1>
            <p className="text-cyan-200 my-5 text-lg">
              This container will host your{" "}
              <a
                className="text-white font-bold hover:bg-cyan-500"
                href="https://nextjs.org/"
              >
                <b>Next.js</b>
              </a>{" "}
              application. Learn how to create your first API and generate a PWA:
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api-platform.com/docs/"
              className="bg-white text-cyan-700 px-8 py-3 relative overflow-hidden transition-all font-extrabold text-lg group hover:pl-4 hover:pr-12"
            >
              Get started
              <div className="absolute left-full top-0 w-7 h-full bg-cyan-200 transition-all flex p-1 justify-center items-center group-hover:-translate-x-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container | md:px-20">
          <div className="text-center | lg:text-left lg:w-3/5 lg:ml-auto">
            <h2 className="text-black text-md font-bold mb-5">
              Available services:
            </h2>
            <div className="flex justify-center flex-wrap | lg:justify-start lg:grid lg:gap-5 lg:grid-cols-2">
              <Card image={apiPicture} title="API" url="/docs" />
              <Card image={adminPicture} title="Admin" url="/admin" />
              <Card
                image={mercurePicture}
                title="Mercure debugger"
                url="/.well-known/mercure/ui/"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
  export default Welcome;