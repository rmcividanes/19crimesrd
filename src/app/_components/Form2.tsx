"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
        currentForm,
        "p_Buk6Ty3a0IxRCuj"
      );
      setSuccessMessage("¡Su solicitud ha sido enviada!");
    } catch (error) {
      console.error("No se pudo enviar el correo electrónico:", error);
      setSuccessMessage(
        "Hubo un error al enviar el formulario. Inténtalo nuevamente."
      );
    }
  };

  return (
    <div>
      <form
        onSubmit={sendEmail}
        ref={form}
        className="bg-black mx-4 my-2 p-4"
        encType="multipart/form-data"
      >
        <div className="p-1">
          <Label htmlFor="from_name" className="text-white">
            Nombres <span className="text-red-700">(Obligatorio)</span>
          </Label>
          <Input type="text" required id="from_name" name="from_name" />
        </div>
        <div className="p-1">
          <Label htmlFor="from_lastname" className="text-white">
            Apellidos <span className="text-red-700">(Obligatorio)</span>
          </Label>
          <Input type="text" required id="from_lastname" name="from_lastname" />
        </div>

        <div className="p-1">
          <Label htmlFor="from_email" className="text-white">
            Email <span className="text-red-700">(Obligatorio)</span>
          </Label>
          <Input type="email" required id="from_email" name="from_email" />
        </div>
        <div className="p-1">
          <Label htmlFor="from_tel" className="text-white">
            Teléfono <span className="text-red-700">(Obligatorio)</span>
          </Label>
          <Input type="tel" required id="from_tel" name="from_tel" />
        </div>
        <div className="p-1">
          <Label htmlFor="from_id" className="text-white">
            Cédula <span className="text-red-700">(Obligatorio)</span>
          </Label>
          <Input type="text" required id="from_id" name="from_id" />
        </div>
        <div className="p-1">
          <Label htmlFor="my_file" className="text-white">
            Sube la factura aquí{" "}
            <span className="text-red-700">(Obligatorio)</span>
          </Label>
          <Input
            type="file"
            required
            id="my_file"
            name="my_file"
            className="text-black"
          />
        </div>
        <div className="px-1 py-2">
          <Button type="submit" className="bg-red-700 w-full">
            Enviar
          </Button>
        </div>
      </form>

      {successMessage && (
        <div className="mt-4 p-4 bg-green-500 text-white">{successMessage}</div>
      )}
    </div>
  );
};

export default Form;
