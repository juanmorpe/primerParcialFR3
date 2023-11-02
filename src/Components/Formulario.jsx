
import { useState } from 'react';
import Card from './Card';



const Formulario = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.startsWith(" ") || inputValue.trim().length < 3 ) {
          alert("El campo no puede empezar con un espacio en blanco , el nombre debe contener mas de 3 caracteres" 
          )
          ;
        }else if(inputDosValue.trim().length<6){alert("el color debe contener mas de 6 caracteres")

        }
 
        else {
          alert(`Formulario enviado con éxito. tu materia favorita es: ${estadoSelect}, te llamas: ${inputValue} y tu colo favorito es ${inputDosValue}`
          );
        }
        
      };

    const options = [
        { value: '', label: 'Selecciona una opción' },
        { value: 'FrontEnd', label: 'FrontEnd' },
        { value: 'Backend', label: 'Backend' },
        { value: 'B&D', label: 'B&D' },
        { value: 'hola mi papacho', label: 'hola mi papacho ' }
        
      ];
      const [estadoSelect,setEstadoSelect]= useState("");
      const [inputValue,setInputValue]= useState("");
      const[inputDosValue,setInputDosValue]=useState("")
      const [submitted, setSubmitted] = useState(false);




  return (

    <>
    <form onSubmit={handleFormSubmit}
    className='form-container'>

        
        <label>Selecciona tu materia favorita:</label>
        <br></br>
        <br></br>
        <select
         value={estadoSelect}
         onChange={(e)=>setEstadoSelect(e.target.value)}
         className='select'
      
        >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
         ))}
        </select>
       <p className='opcion-sel'>la opcion seleccionada es :{estadoSelect}</p>


       <br></br>
       <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Escribe tu nombre'
        />
        <br></br>
        <br></br>
        <input
          type="text"
          value={inputDosValue}
          onChange={(e) => setInputDosValue(e.target.value)}
          placeholder='Color favorito'
        />
        <br></br>
        <br></br>
       <button className='button'  type='submit'>Enviar formulario</button>
    </form>
    <br />
    <br />
      <Card nombre={inputValue} colorFavorito={inputDosValue} materiaFavorita={estadoSelect}/>

    </>
  )
}

export default Formulario