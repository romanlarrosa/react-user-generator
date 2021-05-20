import React from "react"
import "./Usuarioskeleton.css"

const Usuarioskeleton = (props) => {
  const { username = "█████", email = "██████", id = 0 } = props
  return (
    <a href={`#${id}`} className="Usuarioskeleton">
      <div className=" h-56 bg-gray-500"></div>
      <div className="py-4 px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h4 className=" text-2xl font-semibold text-gray-400">{username}</h4>
          <p className="text-2xl text-gray-400">█</p>
        </div>
        <div className="flex flex-col overflow-auto ">
          <p className="font-thin self-center sm:self-start text-gray-400 text-s my-3">
            ██ {email}
          </p>
        </div>
      </div>
    </a>
  )
}

export default Usuarioskeleton
