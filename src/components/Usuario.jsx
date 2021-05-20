import React from "react"
import "./Usuario.css"

const Usuario = (props) => {
  const {
    username = "█████",
    email = "██████",
    avatar = "https://media.giphy.com/media/NYTRCp9r4t8ty/giphy.gif",
    gender = "male",
    id = 0,
  } = props
  return (
    <div key={`#${id}`} className="Usuario">
      <img className=" w-44" src={avatar} alt={username}></img>
      <div className="py-4 px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h4 className=" text-2xl font-semibold text-white">{username}</h4>
          <p className="text-2xl ">{gender === "male" ? "🕺🏻" : "💃🏻"}</p>
        </div>
        <div className="flex flex-col overflow-auto ">
          <p className="font-thin self-center sm:self-start text-white text-s my-3">
            💌 {email}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Usuario
