"use client"

import { MenuItem } from "@headlessui/react"
import { signOut } from "next-auth/react"

export default function SignOutButton() {
  return (
    <MenuItem>
      <button
          onClick={() => signOut()}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
              Sign Out
      </button>
    </MenuItem>
  )
}
