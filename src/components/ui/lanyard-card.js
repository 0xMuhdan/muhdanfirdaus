'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LanyardCard({ imageSrc, alt = "Profile", name }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Lanyard String */}
      <motion.div 
        className="w-1 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 rounded-full shadow-lg"
        style={{ height: '80px' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      
      {/* ID Card Container */}
      <motion.div
        className="relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.3,
          type: "spring",
          stiffness: 100 
        }}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.3 }
        }}
      >
        {/* Lanyard Clip */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-8 h-6 bg-gray-700 rounded-t-lg border-2 border-gray-600 shadow-md">
            <div className="w-4 h-1 bg-gray-500 mx-auto mt-1 rounded-full" />
          </div>
        </div>

        {/* ID Card */}
        <div className="bg-white rounded-lg shadow-2xl p-4 border-2 border-gray-200 backdrop-blur-sm">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-2 rounded-t-md mb-3">
            <p className="text-xs font-semibold">DEVELOPER ID</p>
          </div>

          {/* Photo */}
          <div className="relative mx-auto mb-3 overflow-hidden rounded-md border-2 border-purple-200">
            <Image 
              src={imageSrc} 
              alt={alt}
              width={200}
              height={250}
              className="object-cover"
              quality={100}
              priority
            />
          </div>

          {/* Name Badge */}
          {name && (
            <div className="text-center bg-purple-50 py-2 px-3 rounded-md">
              <p className="text-sm font-bold text-gray-800">{name}</p>
              <p className="text-xs text-gray-600 mt-1">Full-Stack Developer</p>
            </div>
          )}
        </div>

        {/* Card Shadow Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 rounded-lg pointer-events-none" />
      </motion.div>
    </div>
  );
}