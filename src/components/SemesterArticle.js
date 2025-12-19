'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function SemesterArticle({ semesterNumber, data }) {
  const renderContent = (item, index) => {
    switch (item.type) {
      case 'paragraph':
        return (
          <p
            key={index}
            style={{
              color: '#4a5568',
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '20px',
              textAlign: 'justify'
            }}
          >
            {item.text}
          </p>
        );

      case 'heading':
        return (
          <h2
            key={index}
            style={{
              color: '#2d3748',
              fontSize: '22px',
              fontWeight: '600',
              marginTop: '35px',
              marginBottom: '15px',
              paddingBottom: '10px',
              borderBottom: '2px solid #e2e8f0'
            }}
          >
            {item.text}
          </h2>
        );

      case 'list':
        return (
          <ul
            key={index}
            style={{
              color: '#4a5568',
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '20px',
              paddingLeft: '25px'
            }}
          >
            {item.items.map((listItem, idx) => (
              <li key={idx} style={{ marginBottom: '10px' }}>
                {listItem}
              </li>
            ))}
          </ul>
        );

      case 'image':
        return (
          <div
            key={index}
            style={{
              marginTop: '30px',
              marginBottom: '30px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <img
              src={item.src}
              alt={item.alt || 'Dokumentasi'}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
            {item.caption && (
              <p
                style={{
                  padding: '12px 15px',
                  backgroundColor: '#f7fafc',
                  color: '#718096',
                  fontSize: '14px',
                  fontStyle: 'italic',
                  margin: 0,
                  textAlign: 'center'
                }}
              >
                {item.caption}
              </p>
            )}
          </div>
        );

      case 'note':
        return (
          <div
            key={index}
            style={{
              marginTop: '30px',
              marginBottom: '30px',
              padding: '20px',
              backgroundColor: '#edf2f7',
              borderRadius: '8px',
              borderLeft: '4px solid #4299e1'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}
            >
              <span style={{ fontSize: '20px' }}>💡</span>
              <p
                style={{
                  color: '#2d3748',
                  fontSize: '15px',
                  lineHeight: '1.7',
                  margin: 0,
                  flex: 1
                }}
              >
                {item.text}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%)',
        padding: '40px 20px'
      }}
    >
      <article
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.98)',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div style={{ marginBottom: '30px' }}>
          <Link
            href="/aktivitas-kampus"
            style={{
              color: '#4a5568',
              fontSize: '14px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => (e.target.style.color = '#2d3748')}
            onMouseLeave={(e) => (e.target.style.color = '#4a5568')}
          >
            ← Kembali ke Daftar Semester
          </Link>
        </div>

        <header style={{ marginBottom: '40px' }}>
          <h1
            style={{
              color: '#1a202c',
              fontSize: '36px',
              marginBottom: '10px',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              color: '#718096',
              fontSize: '16px',
              marginBottom: '0'
            }}
          >
            {data.academicYear}
          </p>
        </header>

        <div style={{ marginBottom: '40px' }}>
          {data.content.map((item, index) => renderContent(item, index))}
        </div>

        <footer
          style={{
            marginTop: '50px',
            paddingTop: '25px',
            borderTop: '2px solid #e2e8f0',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              color: '#a0aec0',
              fontSize: '13px',
              margin: 0
            }}
          >
            Muhdan Firdaus Salam
          </p>
        </footer>
      </article>
    </div>
  );
}