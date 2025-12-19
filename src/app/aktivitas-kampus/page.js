'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

const Galaxy = dynamic(() => import('@/components/Galaxy'), { ssr: false });

export default function AktivitasKampusPage() {
  const semesters = [
    { number: 1, label: 'Semester 1', path: '/aktivitas-kampus/semester-1' },
    { number: 2, label: 'Semester 2', path: '/aktivitas-kampus/semester-2' },
    { number: 3, label: 'Semester 3', path: '/aktivitas-kampus/semester-3' },
    { number: 4, label: 'Semester 4', path: '/aktivitas-kampus/semester-4' },
    { number: 5, label: 'Semester 5', path: '/aktivitas-kampus/semester-5' },
    { number: 6, label: 'Semester 6', path: '/aktivitas-kampus/semester-6' },
    { number: 7, label: 'Semester 7', path: '/aktivitas-kampus/semester-7' },
    { number: 8, label: 'Semester 8', path: '/aktivitas-kampus/semester-8' },
  ];

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
          maxWidth: '600px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
        }}>
          <div style={{ marginBottom: '30px' }}>
            <Link 
              href="/"
              style={{
                color: '#4a5568',
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              ← Kembali ke Beranda
            </Link>
          </div>

          <h1 style={{
            color: '#333',
            fontSize: '28px',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            Aktivitas Kampus 🎓
          </h1>
          
          <p style={{
            color: '#666',
            fontSize: '14px',
            marginBottom: '30px'
          }}>
            Dokumentasi kegiatan dan pencapaian selama perkuliahan
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '15px'
          }}>
            {semesters.map((semester) => (
              <Link 
                key={semester.number}
                href={semester.path}
                style={{
                  display: 'block',
                  padding: '20px',
                  backgroundColor: '#4a5568',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '500',
                  transition: 'all 0.2s',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#2d3748';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#4a5568';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {semester.label}
              </Link>
            ))}
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