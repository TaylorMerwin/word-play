'use client'

import { Loader2 } from "lucide-react"
import React, { useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import  Tiptap  from "@/components/ui/Tiptap";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Button variant="ghost" onClick={() => setCount(count + 1)}>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />Clicked {count} times</Button>
      <p>You have clicked the button {count} times</p>
      <Tiptap />
    </main>
  );
}