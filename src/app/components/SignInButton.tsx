"use client"

import ArrowRightEndOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightEndOnRectangleIcon"
import { signIn } from "next-auth/react"

export default function SignInButton() {
  return (
    <button className="md:flex" onClick={() => signIn("google")}>
        <span className="hidden md:block me-1">Sign In</span>
        <ArrowRightEndOnRectangleIcon className="size-6" />
    </button>
  )
}
