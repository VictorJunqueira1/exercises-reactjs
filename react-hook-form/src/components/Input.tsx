import { SignUpForm } from "@/types/SignUpForm";
import { useController, UseControllerProps } from "react-hook-form";

export const Input = (props: UseControllerProps<SignUpForm>) => {
    const { field, fieldState } = useController(props)

  return (
    <div className="my-3">
      <input
        {...field}
        placeholder={props.name}
        className={`border bg-white rounded-md ${
          fieldState.error ? "border-red-500" : "border-white"
        } p-3 text-black`}
      />
      {fieldState.error?.type === "required" && <p className="text-red-500">Campo obrigatório</p>}
      {fieldState.error?.type === "minLength" && (
        <p className="text-red-500">Minimo de 2 caracteres.</p>
      )}
      {fieldState.error?.type === "maxLength" && (
        <p className="text-red-500">Máximo de 10 caracteres.</p>
      )}
    </div>
  );
}