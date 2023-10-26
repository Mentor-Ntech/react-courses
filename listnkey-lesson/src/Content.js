import React from 'react'
import {useState} from 'react'


const Content = () => { 

   const [name, setName]= useState('')

    const handleNameChange =()=>{
        const names =['Abee',"Kanas", "supreme"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }

      
      const handleClick2 = (name) => {
        console.log(`${name} was clicked` )
      }

      const handleClick3 = (e) => {
        console.log(e)
      }

  return (
    <main>
        <p>
            Hello {name}
        </p>

        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={() => handleClick2("Muaz")}>Click it</button>
        <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  )
}

export default Content