import { motion } from 'framer-motion'
import React from 'react'
import { useRouter } from 'next/navigation'

interface IReg{
        text: string,
        path: string
}
export default function RegisterBtn({text, path}:IReg) {
        const router = useRouter();

        const handleLoginClick = () => {
                router.push(path);
              };
  return (
        <motion.button
                whileHover={{
                        border: '1px solid rgba(132, 140, 54, 0.76)',
                        boxShadow: '0 0 10px #848C36',
                }}
                onClick={handleLoginClick}
                className="text-xl font-amiri px-5 py-2 text-green-darker bg-green-light rounded-3xl"
        >
                {text}
        </motion.button>
  )
}
