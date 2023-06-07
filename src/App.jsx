// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
import Counter from "./Components/Counter"
import Message from "./Components/Message"
import "./mensaje.css"

 function App() {
  return (
    <>
     {/* <h1>Hola</h1>
     <Message text="Desde un boton"/>
     <Message text="Desde otro boton"/>
     < Counter /> */}
          
     <header> 
        <h1> EJERCICIO </h1>
        <Message clasList="mensaje" text="Programación. "/>
      </header>
      <main>
        <h1> EJERCICIO 2</h1>
        <Message clasList="mensaje" text="python"/>
        <img className="img"   src="data:image/png;base64,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" alt="imagen" />
      </main>
      <footer>
        <h1>PROGRAMADORNEA</h1>
        <Message clasList="mensaje" text="todos los live en twitch"/>
        <img className="img2"   src="https://tse3.mm.bing.net/th?id=OIP.ptWskeU-KQKEZsTgJiOx8wHaE7&pid=Api&P=0&h=180"alt="sena"/>
      </footer>


    </>
  )
}

export default App
