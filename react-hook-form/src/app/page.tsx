"use client";

import { Input } from "@/components/Input";
import { SignUpForm } from "@/types/SignUpForm";
import { SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
  const { control, handleSubmit } = useForm<SignUpForm>();

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  }

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          control={control}
          name="name"
          rules={{ required: "Campo obrigatório", minLength: 2, maxLength: 10 }}
        />

        <Input
         control={control}
          name="lastName"
          rules={{ required: "Campo obrigatório", minLength: 2, maxLength: 10 }}
        />

        <input type="submit" value={"Enviar"} />
      </form>
    </div>
  );
};

export default Page;