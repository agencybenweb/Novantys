"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Shield, Sun, Moon } from "lucide-react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const pathUrl = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full transition-all duration-300 ${stickyMenu
        ? "bg-beigeluxe/90 py-4 shadow-solid-5 backdrop-blur-xl border-b border-primary/20 dark:bg-black/90"
        : "py-7 bg-transparent"
        }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <Link href="/">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/assets/images/logo-dor-removebg-preview.png"
                alt="Novantys Solutions Logo"
                width={180}
                height={60}
                className="h-auto w-auto max-h-14"
                priority
              />
            </motion.div>
          </Link>

          {/* Hamburger Toggle BTN */}
          <button
            aria-label="hamburger Toggler"
            className="block rounded-lg border-2 border-primary bg-primary/10 p-2 transition-all hover:bg-primary/20 xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-6 w-6 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black dark:bg-white delay-0 duration-200 ease-in-out ${!navigationOpen ? "w-full! delay-300" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black dark:bg-white delay-150 duration-200 ease-in-out ${!navigationOpen ? "delay-400 w-full!" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black dark:bg-white delay-200 duration-200 ease-in-out ${!navigationOpen ? "w-full! delay-500" : "w-0"
                    }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black dark:bg-white delay-300 duration-200 ease-in-out ${!navigationOpen ? "h-0! delay-0" : "h-full"
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black dark:bg-white duration-200 ease-in-out ${!navigationOpen ? "h-0! delay-200" : "h-0.5"
                    }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Nav Menu Start */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
            "navbar visible! mt-4 h-auto max-h-[400px] rounded-md bg-white border border-primary/20 p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:border-none xl:shadow-none xl:bg-transparent"
            }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 text-beigetext hover:text-primary dark:text-white"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="text-beigetext hover:text-primary dark:text-white">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "text-beigetext hover:text-primary dark:text-white"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-4 xl:mt-0">
            {/* Premium Theme Toggler */}
            <motion.button
              aria-label="theme toggler"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-amber-100/50 ring-1 ring-black/5 transition-all hover:from-primary/20 hover:to-amber-100 dark:from-primary/20 dark:to-amber-900/20 dark:ring-white/10"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              >
                <span className="relative z-10">Obtenir un Devis</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

