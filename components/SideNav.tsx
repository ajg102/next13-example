"use client";

import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import SideNavItem from "./SideNavItem";

export function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            App Router
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XMarkIcon className="block w-6 text-gray-400" />
        ) : (
          <Bars3BottomLeftIcon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={classNames("overflow-y-auto lg:static lg:block", {
          "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 py-5">
          <div>
            <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
              <p>Demos</p>
            </div>
            <div className="space-y-1">
              <SideNavItem
                close={close}
                item={{
                  name: "Fetching List of Items",
                  slug: "basic",
                }}
              />
              <SideNavItem
                close={close}
                item={{
                  name: "Submit Form Data",
                  slug: "form",
                }}
              />
              <SideNavItem
                close={close}
                item={{
                  name: "Rapid Hits",
                  slug: "rapid",
                }}
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
