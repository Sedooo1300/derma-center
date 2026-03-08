'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = '/derma.html'
  }, [])
  
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      margin: 0
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏥</div>
        <h1>مركز الجلدية والليزر</h1>
        <p>جاري التحميل...</p>
      </div>
    </div>
  )
}
