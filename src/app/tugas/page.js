'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

const Galaxy = dynamic(() => import('@/components/Galaxy'), { ssr: false });

export default function TugasPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Galaxy 
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
        transparent={false}
      />
      
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px'
      }}>
        <div style={{
          maxWidth: '500px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
        }}>
          <h1 style={{
            color: '#333',
            fontSize: '24px',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            Daftar Tugas
          </h1>
          
          <p style={{
            color: '#666',
            fontSize: '14px',
            marginBottom: '30px'
          }}>
            Pemrograman Web
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            <Link 
              href="/muhdan/form/formulir_pendaftaran.html"
              style={{
                display: 'block',
                padding: '15px 20px',
                backgroundColor: '#4a5568',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2d3748'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#4a5568'}
            >
              Tugas Formulir
            </Link>

            <Link 
              href="/muhdan/navbar/navbar.html"
              style={{
                display: 'block',
                padding: '15px 20px',
                backgroundColor: '#4a5568',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2d3748'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#4a5568'}
            >
              Tugas Navbar
            </Link>
          </div>

          <div style={{
            marginTop: '30px',
            paddingTop: '20px',
            borderTop: '1px solid #e0e0e0',
            textAlign: 'center',
            color: '#999',
            fontSize: '12px'
          }}>
            Muhdan Firdaus Salam
          </div>
        </div>
      </div>
    </div>
  );
}