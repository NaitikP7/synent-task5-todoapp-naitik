import React from 'react'
import { CircleCheckBig } from 'lucide-react';
import { Minus } from 'lucide-react';

const NoteCard = ({ title, details, current }) => {
  const colorVariants = [
    'bg-gradient-to-br from-[#f39c12] to-[#e8a76b]',
    'bg-gradient-to-br from-[#1a7659] to-[#2d9b7e]',
    'bg-gradient-to-br from-[#fef5e7] to-[#f5e0ce]',
    'bg-gradient-to-br from-[#e78830] to-[#d67a2a]',
  ];
  const textColorVariants = [
    'text-white',
    'text-white',
    'text-gray-800',
    'text-white',
  ];
  const dateColorVariants = [
    'text-orange-100',
    'text-green-100',
    'text-gray-600',
    'text-orange-100',
  ];

  const variantIndex = Math.abs(title.charCodeAt(0)) % colorVariants.length;
  const bgClass = colorVariants[variantIndex];
  const textClass = textColorVariants[variantIndex];
  const dateClass = dateColorVariants[variantIndex];

  return (
    <div className={`h-56 w-56 rounded-3xl flex flex-col relative py-8 px-6  ${bgClass} shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
        <button className='absolute top-2.5 left-4 justify-center flex items-center hover:bg-white rounded-full cursor-pointer h-5 w-5'>
            <CircleCheckBig size={20} strokeWidth={3} color='#adadad' />
        </button>
        <button className='absolute h-4 w-8 bg-red-500 top-2.5 right-4 rounded-full justify-center flex items-center cursor-pointer
            hover:bg-red-600
        '>
            <Minus size={28} color="#ffffff" strokeWidth={1.75} />
        </button>
      <div className='flex justify-between items-baseline mb-2'>
        <h3 className={`text-lg font-bold ${textClass}`}>{title}</h3>
        <p className={`text-xs ${dateClass}`}>{current}</p>
      </div>

      <p className={`text-sm line-clamp-5 ${textClass}`}>{details}</p>
    </div>
  )
}

export default NoteCard
