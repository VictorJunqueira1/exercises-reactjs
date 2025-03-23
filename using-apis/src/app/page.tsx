"use client";

import { User } from "@/types/User";
import { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleAddPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: "Post Teste",
        body: "Corpo do post",
        userId: 99
      })
    })
    const json = await res.json()
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mt-2">Lista de usuários</h1>

      {loading && (
        <>
          <div className="flex items-center">
            <div
              className="inline-block mr-2 h-4 w-4 animate-spin rounded-full border-4 border-solid 
              border-current border-e-transparent align-[-0.125em] text-surface 
              motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            />
            <p>Carregando...</p>
          </div>
        </>
      )}
      {!loading && users.length > 0 && (
        <ul>
          {users.map((users) => (
            <li key={users.id} className="my-1">
              {users.name} - Cidade do Usuário: ({users.address.city})
            </li>
          ))}
        </ul>
      )}
      {!loading && users.length === 0 && <p>Usuários não encontrados</p>}
      <hr className="my-2" />
      <button onClick={handleAddPost} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300">Adicionar novo post</button>
    </div>
  );
};

export default Page;