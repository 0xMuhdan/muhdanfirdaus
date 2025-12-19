'use client';

import Link from 'next/link';
import Galaxy from '@/components/Galaxy';

export default function DaftarTugas() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Galaxy Background */}
      <div className="fixed inset-0 w-full h-full">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
          transparent={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-10">
        <div className="max-w-md w-full bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Daftar Tugas</h1>
          <p className="text-sm text-gray-600 mb-8">Pemrograman Web</p>

          <div className="flex flex-col gap-4">
            <Link 
              href="/muhdan/form/formulir_pendaftaran.html" 
              className="block px-6 py-4 bg-gray-700 hover:bg-gray-800 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              Tugas Formulir
            </Link>

            <Link 
              href="/muhdan/navbar/navbar.html" 
              className="block px-6 py-4 bg-gray-700 hover:bg-gray-800 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              Tugas Navbar
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">Muhdan Firdaus Salam</p>
          </div>
        </div>
      </div>
    </div>
  );
}