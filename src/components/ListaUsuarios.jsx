import React, { useState, useEffect } from "react"
import Usuario from "./Usuario"

import getUsuarios from "../services/getUsuarios"

const ListaUsuarios = ({ numUsuarios }) => {
  const [Usuarios, setUsuarios] = useState([])

  numUsuarios = parseInt(numUsuarios)
  // = parseInt(numUsuarios)

  useEffect(() => {
    getUsuarios(numUsuarios).then((usuarios) => setUsuarios(usuarios))
  }, [numUsuarios])

  return Usuarios.map(({ username, gender, email, avatar, id }) => (
    <Usuario
      key={id}
      username={username}
      gender={gender}
      email={email}
      avatar={avatar}
    ></Usuario>
  ))
}

export default ListaUsuarios
