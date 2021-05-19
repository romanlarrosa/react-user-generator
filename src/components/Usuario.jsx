import React from "react"
import "./Usuario.css"

const Usuario = (props) => {
  const {
    username = "hola",
    email = "unemail",
    avatar = "./logo192.png",
    gender = "male",
  } = props
  return (
    <div className="Usuario w-96">
      <img className=" w-44" src={avatar} alt={username}></img>
      <div className="py-4 px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h4 className=" text-2xl font-semibold text-gray-800">{username}</h4>
          <p className="text-2xl ">{gender === "male" ? "🕺🏻" : "💃🏻"}</p>
        </div>
        <div className="flex flex-col overflow-scroll ">
          <p className="font-thin self-center sm:self-start text-black text-s my-3">
            `💌 {email}`
          </p>
        </div>
      </div>
    </div>
  )
}

export default Usuario
