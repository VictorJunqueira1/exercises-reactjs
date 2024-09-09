"use client"

import { listReducer } from "@/reducers/listReducer";
import { useReducer } from "react";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, [])

  // const addItem = () => {
  //   dispatch({
  //     type: "add",
  //     payload: {
  //       text: "Novo item."
  //     }
  //   })
  // }

  return (
    <>
      <div>
        {/* <button onClick={addItem}>Adicionar</button> */}
      </div>
    </>
  )
}

export default Page;