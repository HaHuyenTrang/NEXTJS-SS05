"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
export default function page() {
    const router=useRouter();
    const userId1=()=>{
        router.push("/home/bai9/employees/id1")
    }
    const userId2=()=>{
        router.push("/home/bai9/employees/id2")
    }
    const userId3=()=>{
        router.push("/home/bai9/employees/id3")
    }
  return (
    <div>
        <ul>
            <li>
                id:1
                <br />
                name: David
                <br />
                age: 20
                <br />
                <button onClick={userId1}>employee detail</button>
                <br /><hr />
            </li>
            <li>
                id:2
                <br />
                name: Linda
                <br />
                age: 22
                <br />
                <button onClick={userId2}>employee detail</button>
                <br />
                <hr />
            </li>
            <li>
                id:3
                <br />
                name: Kavin
                <br />
                age: 18
                <br />
                <button onClick={userId3}>employee detail</button>
                <br /><hr />
            </li>
        </ul>
    </div>
  )
}
