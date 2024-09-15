"use client"

import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState } from "react";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, [])
  const [addField, setAddField] = useState("")

  const addItemButton = () => {
    if (addField.trim() === '') return false;
    dispatch({
      type: "add",
      payload: {
        text: addField.trim()
      }
    })
    setAddField('')
  }

  const doneCheckbox = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: { id }
    })
  }

  const editItem = (id: number) => {
    const item = list.find(it => it.id === id)
    if (!item) return false

    const newText = window.prompt("Editar tarefa: ", item.text)
    if (!newText || newText.trim() === '') return false

    dispatch({
      type: "editText",
      payload: { id, newText: newText }
    })
  }

  const removeItem = (id: number) => {
    dispatch({
      type: "remove",
      payload: { id }
    })
  }

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-semibold my-4">Lista de Tarefas</h1>
        <div className="flex max-w-xl mx-auto bg-gray-950 border rounded-md border-gray-400 p-4 my-4">
          <input
            type="text"
            className="border rounded-md flex-1 border-white p-3 bg-transparent text-white outline-none"
            placeholder="Digite um item"
            value={addField}
            onChange={e => setAddField(e.target.value)}
          />
          <button className="p-4" onClick={addItemButton}>Adicionar</button>
        </div>
        <ul className="mx-auto max-w-xl">
          {list.map(item => (
            <li
              key={item.id}
              className="flex items-center p-3 my-3 border-b border-gray-800"
            >
              <input
                type="checkbox"
                className="w-6 h-6 mr-2"
                defaultChecked={item.done}
                onClick={() => doneCheckbox}
              />
              <p className="flex-1 text-lg">{item.text}</p>
              <button onClick={() => editItem(item.id)} className="mx-2 text-sm bg-blue-500 py-1 px-2 rounded-md">Editar</button>
              <button onClick={() => removeItem(item.id)} className="mx-2 text-sm bg-red-500 py-1 px-2 rounded-md">Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Page;