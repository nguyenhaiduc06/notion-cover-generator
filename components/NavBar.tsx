import React from "react";
import { Button } from "./ui";

export default function NavBar() {
  return (
    <div className="sticky top-0 bg-white flex items-center border-b border-b-gray-200">
      <div className="container mx-auto py-4 flex items-center gap-2 ">
        <a href="/">
          <div className="bg-red-500 w-12 h-12 rounded flex items-center justify-center">
            <h1 className="text-lg font-semibold text-white">NH</h1>
          </div>
        </a>
        <div
          role="button"
          className="border border-gray-200 py-1 px-3 w-64 rounded flex items-center mx-2"
        >
          <i className="ri-search-line mr-2 text-gray-400" />
          <p className="text-sm text-gray-400">Search...</p>
        </div>
        <nav className="flex gap-2 flex-1">
          <a href="/templates">
            <Button type="ghost">Templates</Button>
          </a>
          <a href="/widgets">
            <Button type="ghost">Widgets</Button>
          </a>
          <a href="/widgets">
            <Button type="ghost">Creators</Button>
          </a>
          <a href="/widgets">
            <Button type="ghost">Blog</Button>
          </a>
        </nav>

        <a href="/login">
          <Button type="ghost">Log in</Button>
        </a>
        <a href="/login">
          <Button type="filled">Sign up</Button>
        </a>
      </div>
    </div>
  );
}
