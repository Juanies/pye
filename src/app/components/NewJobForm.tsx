"use client"
import { useEffect, useState } from "react";
import { auth } from '@/auth/auth';

export default function NewJobForm() {
  const [money, setMoney] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [jobDescription, setJobDescription] = useState<string>('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      money,
      jobTitle,
      jobDescription
    };

    try {
      const response = await fetch('/api/newjob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Job created successfully!');

      setMoney('');
      setJobTitle('');
      setJobDescription('');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create job');
    }
  };

  return (
    <form className="mt-12 flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <input
          className="border rounded p-2"
          type="text"
          placeholder="Puesto"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          className="border rounded p-2"
          type="text"
          placeholder="Pago"
          onChange={(e) => setMoney(e.target.value)}
        />
      </div>
      <div>
        <textarea
          className="border h-[13rem] rounded p-2 w-full"
          placeholder="Descripción"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-[#0070B9] text-[#fff]">
        ENVIAR
      </button>
    </form>
  );
}
