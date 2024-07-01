import React from 'react';
import Image from 'next/image';

interface JobCardProps {
  imageUrl: string;
  username: string;
  price: string;
  description: string;
}

export default function JobCard(props : JobCardProps) {
  

  return (
<article className="bg-[#EAE8E8] min-w-[20em] p-4 rounded-xl flex flex-col gap-5">
  <div className="flex items-center justify-between">
    <div className="flex gap-4 items-center">
      <Image src={props.imageUrl} alt={`${props.username}`} width={42} height={42} className="w-10 h-10 rounded-full" />
      <p className="font-semibold">{props.username}</p>
    </div>
    <p className="text-[#0070B9] font-semibold">{props.price}</p>
  </div>
  <p>
    {props.description}
  </p>
</article>

  );
}
