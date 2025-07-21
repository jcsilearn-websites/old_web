import React from 'react'

const CTA = ({text, className}: {text: string, className: string | undefined}) => {
  return (
    <button 
    className={`px-8 py-4 rounded-lg bg-[#F2277E] text-white font-semibold shadow-lg hover:bg-pink-600 transition flex items-center gap-2 mx-auto w-fit ${className}`}
    >{text}
    </button>
  )
}

export default CTA