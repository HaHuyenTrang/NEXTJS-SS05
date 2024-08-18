"use client"
import React from 'react'

export default function UserDetail(props:any) {
    console.log("giá trị: ",props);
    
    const {params}=props
  return (
    <div>Trang thông tin chi tiết User: có id là = {params.idUser}

    </div>
  )
}
