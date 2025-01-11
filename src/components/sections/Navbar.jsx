"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { BarsIcon, ChevronRight, XMarkIcon } from "@/icons";
import { BASE_URL } from "@/app/layout";
import Image from "next/image";
import useRoutes from "@/hooks/useRoutes";
import { getServices } from "@/api/endpoints";

function Navbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [servicesRoutes, setServicesRoutes] = useState([]);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const routes = useRoutes();

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
    const fetchData = async () => {
      try {
        const data = await getServices();
        let activeData = data.filter(
          (item) => Number(item.publish) === 1 && !item.deleted_at
        );
        setServicesRoutes(activeData);
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };

    fetchData();
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
      <div className="lg:flex hidden gap-4 items-center mx-auto justify-between w-full max-w-7xl h-full">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-md object-cover"
            src="/uploads/logo.svg"
            alt="Doç. Dr. Arzu Yurci"
            width={50}
            height={50}
          />
          <h3 className="text-black font-bold text-lg">Doç. Dr. Arzu Yurci</h3>
        </div>
        <div className="flex items-center gap-2">
          {routes.map((route, index) => (
            <div key={index} className="group navLink relative">
              <Button
                as={Link}
                className={`navLink relative text-sm font-medium py-6 px-2 group-hover:text-purple-600 data-[hover=true]:opacity-100 bg-transparent rounded-sm h-full overflow-visible ${
                  activeSection === route.sectionID && isHomePage
                    ? "text-purple-600 active"
                    : "text-black"
                } duration-300`}
                href={`${BASE_URL}#${route.sectionID}`}
                startContent={route.icon}
                endContent={route.hasDropdown && <ChevronRight className='w-4 transform rotate-90 text-purple-500' />}
              >
                {route.name}
              </Button>
              {route.hasDropdown && servicesRoutes.length > 0 && (
                <div className="absolute top-[72px] left-0 w-max max-w-[200px] hidden shadow-md group-hover:flex flex-col bg-white">
                  {servicesRoutes.map((item, index) => (
                    <Link
                      key={index}
                      href={`hizmet/${item.url}`}
                      className="whitespace-normal text-sm text-black hover:text-purple-500 p-3 border-b border-slate-200"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-full lg:hidden">
        <Button
          className="min-w-max px-3"
          color="secondary"
          onClick={onOpen}
          startContent={
            isOpen ? <XMarkIcon width={24} /> : <BarsIcon width={24} />
          }
        />
        <div className="flex items-center gap-2">
          <h3 className="text-black font-bold text-lg">Doç. Dr. Arzu Yurci</h3>
          <Image
            className="rounded-md object-cover"
            src="/uploads/logo.svg"
            alt="Doç. Dr. Arzu Yurci"
            width={50}
            height={50}
          />
        </div>
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
                  {routes.map((route, index) => {
                    if (route.hasDropdown) {
                      return (
                        <div key={index} className="relative">
                          <Button
                            onPress={() =>
                              setIsServicesDropdownOpen(!isServicesDropdownOpen)
                            }
                            className={`relative w-full text-sm font-medium p-2 hover:text-purple-600 bg-transparent justify-start ${
                              activeSection === route.sectionID && isHomePage
                                ? "text-purple-600 active"
                                : "text-black"
                            } duration-300`}
                            href={`${BASE_URL}#${route.sectionID}`}
                            startContent={route.icon}
                            endContent={
                              <ChevronRight
                                className={`transform ml-auto ${
                                  isServicesDropdownOpen
                                    ? "-rotate-90"
                                    : "rotate-90"
                                } w-4 text-purple-500 duration-300`}
                              />
                            }
                          >
                            {route.name}
                          </Button>
                          {isServicesDropdownOpen &&
                            servicesRoutes.length > 0 && (
                              <div className="w-full flex group-hover:flex flex-col bg-white pl-3">
                                {servicesRoutes.map((item, index) => (
                                  <Link
                                    onClick={onClose}
                                    key={index}
                                    href={`hizmet/${item.url}`}
                                    className="whitespace-normal text-sm text-black hover:text-purple-500 py-3 border-b border-b-slate-200"
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      );
                    }
                    return (
                      <Button
                        key={index}
                        as={Link}
                        onPress={onClose}
                        className={`relative w-full text-sm font-medium p-2 hover:text-purple-600 bg-transparent justify-start ${
                          activeSection === route.sectionID && isHomePage
                            ? "text-purple-600 active"
                            : "text-black"
                        } duration-300`}
                        href={`${BASE_URL}#${route.sectionID}`}
                        startContent={route.icon}
                      >
                        {route.name}
                      </Button>
                    );
                  })}
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
