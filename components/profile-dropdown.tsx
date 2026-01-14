"use client"

import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src="/Profile.svg"
          alt="profile"
          width={40}
          height={40}
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="profile-dropdown-item">Profile</DropdownMenuItem>
        <DropdownMenuItem className="profile-dropdown-item">Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="profile-dropdown-item">Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}