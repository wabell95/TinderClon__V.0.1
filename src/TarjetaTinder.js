import React, {useState, useEffect} from "react"
import "./TarjetaTinder.css"
import TarjetaPersona from 'react-tinder-card'
// import database from './firebase'

function TarjetaTinder () {

    const [persona, setPersona] = useState([
        
        {
            nombre: "Ana Lopez",
            url: "https://i.pinimg.com/564x/8c/a7/bb/8ca7bbcb54934cd4fea7f466a40cf187.jpg",
        },
        {
            nombre: "Julieta Perez",
            url: "https://i.pinimg.com/564x/60/c6/8b/60c68b9e07a0bf8b624989e0eff69ff9.jpg",
        },
        {
            nombre: "Ignacio Porro",
            url: "https://magnificent-medovik-9a6abc.netlify.app/assets/img/team/CEO.jpg",
        },
        {
            nombre: "Agustin Bellini",
            url: "https://i.pinimg.com/564x/ec/b3/90/ecb3905ec83d17e136952791f8884870.jpg",
        }
    ])

    // const [persona,setPersona] = useState([]);

    // useEffect(() => {
        
    //     const desuscribirse = database.collection('personas').onSnapshot(snapshot => (
    //         setPersona(snapshot.docs.map( doc => doc.data()))
    //     ));

    //     return () => {
    //         desuscribirse();
    //     }

    // }, [])

    


  return (
    <div className="tarjetasTinder">
        <div className="tarjetasTinder__contenedor">
            {persona.map(persona => ( <>

                <TarjetaPersona 
                    className="swipe"
                    key={persona.name}
                    preventSwipe={['up', 'down']}
                >
                    <div className="tarjeta" style={{backgroundImage:`url(${persona.url})`}}>
                        <h2>{persona.nombre}</h2>
                    </div>
                </TarjetaPersona>

               
                </>

                
                
            ))}
        </div>

    </div>
  )
}

export default TarjetaTinder