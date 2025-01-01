"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { routes } from "@/routes";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { BarsIcon, XMarkIcon, StethoscopeIcon } from "@/icons";
import { BASE_URL } from "@/app/layout";

function Navbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isHomePage) {
      const sections = document.querySelectorAll("section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    } else {
      setActiveSection("");
    }
  }, [isHomePage]);

  return (
    <nav
      className={`fixed top-0 left-0 flex md:justify-center justify-start items-center w-full z-50 px-4 h-[68px] duration-300 text-black ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="md:flex hidden gap-4 items-center mx-auto h-full">
        {routes.map((route, index) => (
          <Button
            as={Link}
            key={index}
            className={`navLink relative text-sm font-medium py-6 px-2 hover:text-purple-600 bg-transparent rounded-sm h-full ${
              activeSection === route.sectionID && isHomePage
                ? "text-purple-600 active"
                : "text-black"
            } duration-300`}
            href={`${BASE_URL}#${route.sectionID}`}
            startContent={route.icon}
          >
            {route.name}
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center w-full md:hidden">
        <Button
          className="min-w-max px-3"
          color="secondary"
          onClick={onOpen}
          startContent={
            isOpen ? <XMarkIcon width={24} /> : <BarsIcon width={24} />
          }
        />
        <h3 className="text-black flex items-center gap-2 font-bold text-lg">
          <StethoscopeIcon width={20} color="#9c40ff" /> Doç. Dr. Arzu Yurci
        </h3>
      </div>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="left"
        size="xs"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 px-8 pt-8">
                <h3 className="text-black font-bold text-lg">Menü</h3>
              </DrawerHeader>
              <DrawerBody>
                <div className="flex flex-col gap-3">
                  {routes.map((route, index) => (
                    <Button
                      as={Link}
                      key={index}
                      onPress={onClose}
                      className={`relative text-sm font-medium p-2 hover:text-purple-600 bg-transparent justify-start ${
                        activeSection === route.sectionID && isHomePage
                          ? "text-purple-600 active"
                          : "text-black"
                      } duration-300`}
                      href={`${BASE_URL}#${route.sectionID}`}
                      startContent={route.icon}
                    >
                      {route.name}
                    </Button>
                  ))}
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </nav>
  );
}

export default Navbar;
