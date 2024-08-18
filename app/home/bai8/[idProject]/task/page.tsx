import React from 'react'

export default function page(props:any) {
    const {params}=props
    const project=[
        {
            content:"từ thiện",
            idProject:11,
            idUser:1,

        }
    ]
    let projectFilter= project.filter((item)=>{
        return item.idUser=params.idUser
    })
  return (
    <div>Danh sách nhiệm vụ của dự án có id: {params.idProject}
    {
        projectFilter.map((item)=>{
            return <li key={item.idProject}>{item.content}</li>
        })
    }
    </div>
  )
}
