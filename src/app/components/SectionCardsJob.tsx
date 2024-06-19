"use client"
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';

interface Job {
id: number;
imagen: string;
usuario: string;
pago: string;
descripcion: string;
}

interface Props {
  limits?: number;
  pages?: boolean;
}

export default function SectionCardsJob({ limits, pages } : Props)  {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
   const limit = limits ?? 6;
   const pageornot = pages ?? true;
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`/api/jobs?page=${page}&limit=${limit}`);
        if (!res.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await res.json();
        setJobs(data.rows);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, [page]);



  return (
    <div className='mt-10'>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jobs.map(job => (
        <JobCard
                key={job.id}
                imageUrl={job.imagen}
                username={job.usuario}
                price={job.pago}
                description={job.descripcion}
              />
        ))}
      </div>
      {pageornot && (
        <div>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
        <button onClick={() => setPage(prev => prev + 1)}>Next</button>
      </div>
      )}
    </div>
  );
};


