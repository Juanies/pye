"use client"
import { createJob } from "@/src/app/lib/actions";

export default function NewJobForm() {


  return (
    <form className="mt-12 flex flex-col gap-2" action={createJob}>
      <div className="flex gap-2">
        <input
          className="border rounded p-2"
          type="text"
          name="position"
          placeholder="Puesto"
        />
        <input
          className="border rounded p-2"
          type="text"
          name="salary"
          placeholder="Pago"
        />
      </div>
      <div>
        <textarea
        name="description"
          className="border h-[13rem] rounded p-2 w-full"
          placeholder="Descripción"
        />
      </div>
      <button type="submit" className="bg-[#0070B9] text-[#fff]">
        ENVIAR
      </button>
    </form>
  );
}
