import React from 'react'
import ChatPrevisualizacion from './ChatPrevisualizacion'

function ListadoChats() {
  return (
    <div className='listadoChats'>
        <ChatPrevisualizacion
            nombre = "Ana"
            mensaje = "Hola!"
            timestamp = "Hace 40 segundos"
            imgPerfil="https://i.pinimg.com/564x/8c/a7/bb/8ca7bbcb54934cd4fea7f466a40cf187.jpg" />

        <ChatPrevisualizacion
            nombre = "Julieta"
            mensaje = "Hola! ¿Cómo estás?"
            timestamp = "Hace 5 minutos"
            imgPerfil="https://i.pinimg.com/564x/60/c6/8b/60c68b9e07a0bf8b624989e0eff69ff9.jpg" />

    </div>
  )
}
export default ListadoChats