import { useState } from "react"
import ProptType from 'prop-types'
import TextInput from "./TextInput"

NewGameForm.propTypes = {
    addGame: ProptType.func
}

export default function NewGameForm({addGame}){
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')

    function handleSubmit(ev){
        ev.preventDefault()
        addGame({title, cover})
        setTitle('')
        setCover('')
      }

    return(
        <form onSubmit={handleSubmit}>
            <div>
               <TextInput label="Titulo:" value={title} setValue={setTitle} placeholder="Digite o titulo"/>
               <TextInput label="Capa:" value={cover} setValue={setCover} placeholder="Somente URL"/>
            </div>
            <button type="submit">Adicionar a biblioteca</button>
        </form>
    )
}