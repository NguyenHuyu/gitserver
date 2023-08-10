"use client";
import Image from "next/image";
import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuItem,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
export default function Home() {
  const menuItems = ["HOME", "ABOUT", "SERVICES", "BLOG", "CONTACT US"];

  return (
    <div className="h-screen w-screen mx-auto">
      <div className="bg-gradient-to-r from-[#000905] from-10% via-[#000904] via-30% to-[#093028] to-80% h-screen relative">
        <div className="w-screen z-30">
          <Navbar
            isBlurred
            shouldHideOnScroll
            className="text-white bg-gradient-to-r from-[#000905] from-10% via-[#000904] via-30%  to-[#093028] to-80% fixed"
          >
            <NavbarContent className="sm:hidden" justify="start">
              <NavbarMenuToggle />
            </NavbarContent>
            <NavbarContent className="sm:hidden " justify="end">
              <NavbarBrand>
                <p className="font-bold text-white">BIZALLINE MBV</p>
              </NavbarBrand>
            </NavbarContent>

            <NavbarContent
              className="hidden sm:flex lg:gap-16 bg-none"
              justify="end"
            >
              <NavbarBrand>
                <p className="font-black text-white bg-none ">BIZALLINEs</p>
              </NavbarBrand>
              <NavbarItem>
                <Link className=" text-white" href="#">
                  HOME +
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="#" aria-current="page" className="text-white ">
                  ABOUT
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#" className="text-white">
                  SERVICES +
                </Link>
              </NavbarItem>

              <NavbarItem>
                <Link color="foreground" href="#" className="text-white">
                  BLOG +
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#" className="text-white">
                  CONTACT US +
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    className="w-full"
                    color={
                      index === 2
                        ? "warning"
                        : index === menuItems.length - 1
                        ? "danger"
                        : "foreground"
                    }
                    href="#"
                    size="lg"
                  >
                    {item}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </div>
        <div className="text-white z-50 absolute top-[25%] lg:top-[35%] left-[10%] space-y-10 ">
          <div className="text-white text-[2rem] md:text-[2rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] max-w-xs md:max-w-4xl mx-auto">
            GLOBAL CREATIVE MINDS AGENCY
          </div>
          <p className="max-w-xs md:max-w-4xl mx-auto text-[0.6rem] md:text-[0.5rem] lg:text-[1rem] xl:text-[1.5rem] text-justify">
            Our digital agency specializes in helping businesses of all sizes
            navigate the ever-evolving digital landscape. From website design
            and development to digital marketing.
          </p>
        </div>
      </div>
      <div className="bg-[#081D34] min-h-screen"></div>
    </div>
  );
}
