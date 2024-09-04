"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
export default function Page() {
    const router=useRouter();
    const loginUser=()=>{
        router.push("/home/auth/login");
    }
  return (
    <div>Trang home!!
        <br />
        <button onClick={loginUser}>login</button>
        <br />
        <button>register</button>
    </div>
  )
}
