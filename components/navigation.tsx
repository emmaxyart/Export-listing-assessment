"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import SVG from "react-inlinesvg";

export function Navigation() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", icon: "/Home.svg", label: "Dashboard" },
    { href: "/listings", icon: "/Toolbox.svg", label: "Listings" },
    { href: "/users", icon: "/Users.svg", label: "Users" },
    { href: "/request", icon: "/Request.svg", label: "Request" },
    { href: "/applications", icon: "/Application.svg", label: "Applications" },
    { href: "/tasks", icon: "/Task.svg", label: "Tasks" },
  ];

  return (
    <nav className="hidden lg:flex w-full bg-white px-6 sm:px-12 py-3 sm:py-4 items-center justify-between">
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
              isActive
                ? "bg-[#176D5826] text-[#176D58]"
                : "text-foreground hover:bg-[#176D5826] hover:text-[#176D58]"
            }`}
          >
            <SVG
              src={item.icon}
              className={`w-6 h-6 ${
                isActive || item.href === "/"
                  ? "active-icon"
                  : "inactive-icon"
              }`}
            />
            <span className="text-[14px] sm:text-sm">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}