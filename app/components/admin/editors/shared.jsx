'use client';

// Shared styles and components for admin editors

export const cardStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '16px',
  padding: '28px',
  marginBottom: '24px',
};

export const labelStyle = {
  display: 'block',
  color: '#94a3b8',
  fontSize: '12px',
  fontWeight: '600',
  marginBottom: '8px',
  letterSpacing: '0.8px',
  textTransform: 'uppercase',
};

export const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  color: '#fff',
  fontSize: '14px',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: "'Inter', sans-serif",
  transition: 'border-color 0.2s',
};

export const textareaStyle = {
  ...inputStyle,
  minHeight: '100px',
  resize: 'vertical',
};

export const btnPrimary = {
  padding: '10px 24px',
  background: 'linear-gradient(135deg, #10b981, #6366f1)',
  border: 'none',
  borderRadius: '10px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s',
  boxShadow: '0 4px 12px rgba(16,185,129,0.25)',
};

export const btnDanger = {
  padding: '8px 16px',
  background: 'rgba(239,68,68,0.1)',
  border: '1px solid rgba(239,68,68,0.3)',
  borderRadius: '8px',
  color: '#f87171',
  fontSize: '13px',
  cursor: 'pointer',
  transition: 'all 0.2s',
};

export const btnSecondary = {
  padding: '8px 16px',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: '#94a3b8',
  fontSize: '13px',
  cursor: 'pointer',
  transition: 'all 0.2s',
};

export const sectionTitle = {
  fontSize: '16px',
  fontWeight: '700',
  color: '#fff',
  marginBottom: '20px',
  paddingBottom: '12px',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
};

export function SuccessToast({ message }) {
  return (
    <div style={{
      position: 'fixed', top: '24px', right: '24px',
      background: 'linear-gradient(135deg, rgba(16,185,129,0.9), rgba(5,150,105,0.9))',
      color: '#fff', padding: '14px 20px',
      borderRadius: '12px', fontSize: '14px', fontWeight: '500',
      boxShadow: '0 8px 24px rgba(16,185,129,0.3)',
      zIndex: 99999, display: 'flex', alignItems: 'center', gap: '8px',
      animation: 'slideIn 0.3s ease'
    }}>
      ✅ {message}
    </div>
  );
}

export function FieldGroup({ label, children }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

export function Input({ value, onChange, placeholder, type = 'text', style = {} }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ ...inputStyle, ...style }}
      onFocus={(e) => e.target.style.borderColor = '#10b981'}
      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
    />
  );
}

export function Textarea({ value, onChange, placeholder, rows = 4 }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={textareaStyle}
      onFocus={(e) => e.target.style.borderColor = '#10b981'}
      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
    />
  );
}

export function InfoBanner() {
  return (
    <div style={{
      background: 'rgba(99,102,241,0.08)',
      border: '1px solid rgba(99,102,241,0.2)',
      borderRadius: '12px',
      padding: '16px 20px',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '13px',
      color: '#a5b4fc'
    }}>
      <span style={{ fontSize: '20px' }}>💡</span>
      <div>
        <strong>Note:</strong> Changes are saved to your browser&apos;s local storage. To make permanent changes, 
        the updated values will be shown — you can copy them to the source data files manually or deploy via code.
      </div>
    </div>
  );
}
