
import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "About Us", to: "/about" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="text-navbarLink font-navbar fixed top-[40px] left-0 w-full bg-[#FEF9F2] text-primary shadow-md z-50 py-2">
      {({ open }) => (
        <>
         <div className=" w-2/3 mx-auto">
         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between">
            <div className="flex items-center">
              <img alt="Your Company" src='/images/sanalogo.png'  className="h-8 w-auto" />
            </div>

            <div className="sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-gray-200 hover:text-primary">
                {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </DisclosureButton>
            </div>

            <div className="hidden sm:flex sm:space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `cursor-pointer font-semibold rounded-md px-3 py-2 text-sm transition-all ${
                      isActive
                        ? "font-extrabold text-primary border-b-2 border-primary"
                        : "text-navbarLink hover:text-primary"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          <DisclosurePanel className="sm:hidden bg-[#FEF9F2] text-primary shadow-md">
            <div className="space-y-2 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `block text-center cursor-pointer font-semibold rounded-md px-3 py-2 text-sm transition-all ${
                      isActive
                        ? "font-extrabold text-primary border-l-4 border-primary bg-gray-100"
                        : "text-navbarLink hover:bg-gray-200 hover:text-primary"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </DisclosurePanel>
         </div>
        </>
      )}
    </Disclosure>
  );
}

