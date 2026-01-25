"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Sun, Moon } from "lucide-react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const pathUrl = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle Scroll Logic for Sticky and Visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Sticky State
      if (currentScrollY >= 80) {
        setStickyMenu(true);
      } else {
        setStickyMenu(false);
      }

      // Visibility State (Hide on scroll down, Show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Toggle dropdown
  const handleSubmenuToggle = (id: number) => {
    setOpenSubmenuId(openSubmenuId === id ? null : id);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <header
        className={`fixed z-99999 transition-all duration-500 ease-in-out ${stickyMenu
            ? "left-1/2 -translate-x-1/2 top-6 w-[95%] md:w-[90%] xl:w-[1200px] rounded-full border border-white/20 bg-beigeluxe/80 shadow-lg backdrop-blur-xl dark:bg-black/80 dark:border-white/10"
            : "left-0 top-0 w-full bg-transparent py-4 text-beigetext shadow-none"
          } ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"} ${!stickyMenu && "py-4 md:py-6"
          }`}
      >
        <div className={`relative mx-auto items-center justify-between px-4 md:px-8 xl:flex 2xl:px-8 ${stickyMenu ? "py-2" : ""}`}>
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
                  width={220}
                  height={70}
                  className="h-auto w-auto max-h-16"
                  priority
                />
              </motion.div>
            </Link>

            {/* Hamburger Toggle BTN */}
            <button
              aria-label="hamburger Toggler"
              className="block rounded-full border border-primary/20 bg-beigeluxe/50 p-2 text-primary transition-all hover:bg-primary/10 xl:hidden"
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              {navigationOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
              )}
            </button>
          </div>

          {/* Nav Menu Start */}
          <div
            className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
              "navbar !visible mt-4 h-auto max-h-[85vh] overflow-y-auto rounded-3xl bg-white/95 backdrop-blur-md border border-primary/10 p-7.5 shadow-2xl xl:h-auto xl:p-0 xl:border-none xl:shadow-none xl:bg-transparent"
              }`}
          >
            <nav>
              <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-8">
                {menuData.map((menuItem, key) => (
                  <li key={key} className={menuItem.submenu && "group relative"}>
                    {menuItem.submenu ? (
                      <>
                        <button
                          onClick={() => handleSubmenuToggle(menuItem.id)}
                          className={`flex cursor-pointer items-center justify-between gap-2 hover:text-primary ${navigationOpen ? "text-black font-medium" : "text-beigetext font-medium xl:text-beigetext dark:text-white"}`}
                        >
                          {menuItem.title}
                          <span>
                            <svg
                              className={`h-3 w-3 cursor-pointer fill-current group-hover:fill-primary transition-transform ${openSubmenuId === menuItem.id ? "rotate-180" : ""}`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                          </span>
                        </button>

                        <ul
                          className={`dropdown ${openSubmenuId === menuItem.id ? "flex" : "hidden xl:flex"}`}
                        >
                          {menuItem.submenu.map((item, key) => (
                            <li key={key} className={`hover:text-primary ${navigationOpen ? "text-black/80" : "text-beigetext dark:text-white"}`}>
                              <Link href={item.path || "#"} onClick={() => setNavigationOpen(false)}>
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={`${menuItem.path}`}
                        onClick={() => setNavigationOpen(false)}
                        className={
                          pathUrl === menuItem.path
                            ? "text-primary hover:text-primary font-medium"
                            : `hover:text-primary font-medium ${navigationOpen ? "text-black" : "text-beigetext dark:text-white"}`
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
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                >
                  <span className="relative z-10">Obtenir un Devis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </header>
      {/* Spacer removed as the hero padding is now managed dynamically, or add back if needed but smaller */}
    </>
  );
};
export default Header;
