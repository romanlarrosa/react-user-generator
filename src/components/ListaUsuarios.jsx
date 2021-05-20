import React, { useState, useEffect } from "react"
import Usuario from "./Usuario"
import Usuarioskeleton from "./Usuarioskeleton"

import getUsuarios from "../services/getUsuarios"

const ListaUsuarios = (params) => {
  const [Usuarios, setUsuarios] = useState([])

  const { numUsuarios } = params.params
  //numUsuarios = parseInt(numUsuarios)

  useEffect(() => {
    setUsuarios([])
    setTimeout(() => {
      getUsuarios(numUsuarios).then((usuarios) => setUsuarios(usuarios))
    }, 500)
  }, [numUsuarios])

  let prueba = []
  for (let index = 0; index < 15; index++) {
    prueba = [...prueba, <Usuarioskeleton />]
  }

  return Usuarios.length === 0
    ? prueba.map((item) => item)
    : Usuarios.map(({ username, gender, email, avatar, id }) => (
        <Usuario
          key={id}
          id={id}
          username={username}
          gender={gender}
          email={email}
          avatar={avatar}
        ></Usuario>
      ))
}

export default ListaUsuarios
