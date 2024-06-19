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

export default function SectionCardsJob({ limits, pages }: Props) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string>("");
  const limit = limits ?? 6;
  const pageOrNot = pages ?? true;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`/api/jobs?page=${page}&limit=${limit}&latest=${!pageOrNot}`);
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
  }, [page, limit, pageOrNot]);

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
      {pageOrNot && (
        <div>
          <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
          <button onClick={() => setPage(prev => prev + 1)}>Next</button>
        </div>
      )}
    </div>
  );
}
