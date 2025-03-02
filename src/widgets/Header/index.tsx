"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  // Disclosure,
  // DisclosureButton,
  // DisclosurePanel,
  // Popover,
  // PopoverButton,
  PopoverGroup,
  // PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { callsToAction, products } from "@/src/entities/constants/header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useTheme from "@/src/entities/hooks/useTheme";

const Header = () => {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isDarkModeEnabled, onThemeChange } = useTheme();

  return (
    <header
      className={`${mobileMenuOpen ? "hidden" : ""} sticky top-0 z-[100] border-b-2 border-b-gray-200 bg-white bg-opacity-95 px-8 backdrop-blur-[3px] md:px-14 lg:px-24 dark:border-b-gray-800 dark:bg-gray-900`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between px-0 py-6"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Drako Schule</span>
            <span className="h-8 w-auto font-DelaGothicOne text-2xl text-gray-900">
              Drako Schule
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Product
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-DelaGothicOne text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover> */}

          <a
            href={pathname === "/" ? "#aboutUs" : "/#aboutUs"}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Про нас
          </a>
          <a
            href={pathname === "/" ? "#team" : "/#team"}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Команда
          </a>
          <a
            href={pathname === "/" ? "#faq" : "/#faq"}
            className="text-sm/6 font-semibold text-gray-900"
          >
            FAQ
          </a>
          <a
            href={pathname === "/" ? "#applyForm" : "/#applyForm"}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Записатись
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isDarkModeEnabled ? (
            <SunIcon
              className="size-6 cursor-pointer"
              onClick={onThemeChange}
            />
          ) : (
            <MoonIcon
              className="size-6 cursor-pointer"
              onClick={onThemeChange}
            />
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-8 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Drako Schule</span>
              <span className="h-8 w-auto font-DelaGothicOne text-2xl text-gray-900">
                Drako Schule
              </span>
            </Link>
            {isDarkModeEnabled ? (
              <SunIcon
                className="size-6 cursor-pointer"
                onClick={onThemeChange}
              />
            ) : (
              <MoonIcon
                className="size-6 cursor-pointer"
                onClick={onThemeChange}
              />
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:bg-gray-900 dark:hover:bg-gray-900"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure> */}
                <a
                  href={pathname === "/" ? "#aboutUs" : "/#aboutUs"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => pathname === "/" && setMobileMenuOpen(false)}
                >
                  Про нас
                </a>
                <a
                  href={pathname === "/" ? "#team" : "/#team"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => pathname === "/" && setMobileMenuOpen(false)}
                >
                  Команда
                </a>
                <a
                  href={pathname === "/" ? "#faq" : "/#faq"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => pathname === "/" && setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a
                  href={pathname === "/" ? "#applyForm" : "/#applyForm"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => pathname === "/" && setMobileMenuOpen(false)}
                >
                  Записатись
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
