"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () => {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState<TodoItem[]>([])

  const addItemButton = () => {
    if (newItem.trim() === '') return;
    setList((prev) => ([...list, { id: list.length + 1, label: newItem, checked: false }]));
    setNewItem('');
  }

  const deleteItem = (id: number) => {
    setList(list.filter(item => item.id !== id))
  }

  const toggleItem = (id: number) => {
    let newList = [...list]

    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked
      }
    }

    setList(newList)
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>
      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-700">
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3 focus:outline"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <button onClick={addItemButton}>Adicionar Tarefa</button>
      </div>

      <p className="my-4 text-2xl">Itens na lista: {list.length}</p>

      <ul className="w-full max-w-lg list-disc pl-5 text-2xl">
        {list.map(item => (
          <li key={item.id}>
            <input type="checkbox" onClick={() => toggleItem(item.id)} checked={item.checked} className="h-6 w-6 mr-3" />
            {item.label} - <button onClick={() => deleteItem(item.id)} className="hover:underline"> [ Deletar ] </button></li>
        ))}
      </ul>

    </div>
  )
}

export default Page;