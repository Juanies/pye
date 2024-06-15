"use client"
// Ejemplo en un componente de React dentro de tu aplicación Next.js
import React, { useState } from 'react';

const MyComponent = () => {
  const [username, setUsername] = useState('juanies');
  const [userId, setUserId] = useState<string | null>(null); 
  const [error, setError] = useState<string | null>(null); 

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/userid?username=${encodeURIComponent(username)}`);
      if (response.ok) {
        const data = await response.json();
        setUserId(data.id);
        setError(null);
      } else {
        const errorText = await response.text();
        setError(errorText );
        setUserId(null);
      }
    } catch (error) {
      console.error('Error al obtener la ID del usuario:', error);
      setError('Error al comunicarse con el servidor');
      setUserId(null);
    }
  };

  return (
    <div>
      <button onClick={handleSearch}>Buscar</button>
      {userId && <p>ID del usuario: {userId}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default MyComponent;
