// UserInfo.tsx
import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/UtilFunctions.ts";

interface AuthFormProps extends VariantProps<typeof authFormVariants> {}

const authFormVariants = cva(
  "p-4 rounded-xl bg-primary-50 shadow-md flex flex-col gap-3 w-64", // Fondo cuadrado en la parte inferior
  {
    variants: {
      variant: {
        register: "",
        login: "",
      },
    },
    defaultVariants: {
      variant: "register",
    },
  }
);

const UserInfo: React.FC<AuthFormProps> = ({ variant = "register" }) => {
  return (
    <div className={cn(authFormVariants({ variant }))}>
      {/* Título */}
      <h2 className="text-headline2 font-poppins text-center text-primary-500 mb-4">
        {variant === "register" ? "Registrarse" : "Iniciar sesión"}
      </h2>

      {/* Campos del formulario */}
      {variant === "register" && (
        <label className="flex flex-col text-title2 font-poppins">
          Usuario
          <input
            type="text"
            placeholder="Texto"
            className="p-2 border border-secondary-300 rounded-lg outline-none focus:border-secondary-500 text-label3"
          />
        </label>
      )}
      <label className="flex flex-col text-title2 font-poppins">
        Mail
        <input
          type="email"
          placeholder="Texto"
          className="p-2 border border-secondary-300 rounded-lg outline-none focus:border-secondary-500 text-label3"
        />
      </label>
      <label className="flex flex-col text-title2 font-poppins">
        Contraseña
        <input
          type="password"
          placeholder="Texto"
          className="p-2 border border-secondary-300 rounded-lg outline-none focus:border-secondary-500 text-label3"
        />
      </label>
    </div>
  );
};

export default UserInfo;