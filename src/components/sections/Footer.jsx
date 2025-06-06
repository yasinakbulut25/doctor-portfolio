"use client";

import useRoutes from "@/hooks/useRoutes";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const routes = useRoutes();

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex md:flex-row flex-col items-center justify-between gap-4">
          <h3 className="text-black flex items-center gap-2 font-bold text-lg">
            <Image
              className="rounded-md object-cover"
              src="/uploads/logo.svg"
              alt="Doç. Dr. Arzu Yurci"
              width={120}
              height={120}
            />
          </h3>
          <div className="md:flex hidden gap-2 items-center h-full">
            {routes.map((route, index) => (
              <Button
                as={Link}
                key={index}
                className={`relative text-sm min-w-max  px-1 hover:text-purple-600 bg-transparent rounded-sm h-full text-slate-400 duration-300`}
                href={`#${route.sectionID}`}
              >
                {route.name}
              </Button>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 Tüm hakkları saklıdır.
          </span>
          <i className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            developed by{" "}
            <a
              href="https://www.linkedin.com/in/yasinakbulut/"
              target="_blank"
              className="font-semibold hover:text-purple-500"
            >
              Yasin Akbulut
            </a>
          </i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
