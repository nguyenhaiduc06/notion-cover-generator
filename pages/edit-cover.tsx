import { Input } from "@/components/ui/Input";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogContent,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui";
import React, { useState } from "react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui";
import NavBar from "@/components/NavBar";

const hostname = "https://notion-cover-generator-eta.vercel.app";

const PRESETS = [
  {
    name: "warmFlame",
    gradient: "from-[#fad0c4] to-[#ff9a9e]",
  },
  {
    name: "winterNeva",
    gradient: "from-[#c2e9fb] to-[#a1c4fd]",
  },
];

export default function EditCover() {
  const [title, setTitle] = useState("Hello");
  const [preset, setPreset] = useState(PRESETS[0]);
  const generatedUrl = `${hostname}/api/cover?title=${title}&presetName=${preset.name}`;

  console.log("🚀 ~ generatedUrl", generatedUrl);
  return (
    <div>
      <NavBar />
      <div className="container mx-auto grid grid-cols-4 gap-4 p-8">
        <div className="col-span-3">
          <p>Preview</p>
          <div
            className={`flex items-center justify-center bg-gradient-to-br ${preset.gradient} w-full h-96 border rounded-md`}
          >
            <p className="text-2xl">{title}</p>
          </div>
        </div>
        <div className="">
          <p>Configure</p>
          <div className="flex flex-col items-start h-96 border rounded-md p-4 gap-4">
            <div>
              <p className="font-medium">Background</p>
              <div className="flex gap-2">
                {PRESETS.map((p) => (
                  <div
                    role="button"
                    onClick={() => setPreset(p)}
                    className={`w-12 h-12 rounded-md bg-gradient-to-br ${p.gradient}`}
                    key={p.name}
                  ></div>
                ))}
              </div>
            </div>
            <div className="w-full">
              <p className="font-medium">Title</p>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full">
              <p className="font-medium">Font</p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Font style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1"></div>
            <Dialog>
              <DialogTrigger>
                <Button className="self-end">Export</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Copy this link to your Notion cover</DialogTitle>
                  <DialogDescription>{generatedUrl}</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
