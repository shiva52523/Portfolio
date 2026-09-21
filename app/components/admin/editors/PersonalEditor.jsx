'use client';

import { useState, useEffect } from 'react';
import { personalData as defaultData } from '@/utils/data/personal-data';
import { cardStyle, sectionTitle, FieldGroup, Input, Textarea, btnPrimary, SuccessToast, InfoBanner } from './shared';

export default function PersonalEditor() {
  const [data, setData] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_personal');
      return saved ? JSON.parse(saved) : { ...defaultData };
    }
    return { ...defaultData };
  });
  const [saved, setSaved] = useState(false);

  const update = (key, value) => setData(prev => ({ ...prev, [key]: value }));

  const handleSave = () => {
    localStorage.setItem('admin_personal', JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setData({ ...defaultData });
    localStorage.removeItem('admin_personal');
  };

  return (
    <div>
      {saved && <SuccessToast message="Personal data saved successfully!" />}
      <InfoBanner />

      <div style={cardStyle}>
        <h3 style={sectionTitle}>🧑 Basic Information</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FieldGroup label="Full Name">
            <Input value={data.name || ''} onChange={e => update('name', e.target.value)} placeholder="Your Name" />
          </FieldGroup>
          <FieldGroup label="Designation">
            <Input value={data.designation || ''} onChange={e => update('designation', e.target.value)} placeholder="Your Role" />
          </FieldGroup>
          <FieldGroup label="Email">
            <Input type="email" value={data.email || ''} onChange={e => update('email', e.target.value)} placeholder="email@example.com" />
          </FieldGroup>
          <FieldGroup label="Phone">
            <Input value={data.phone || ''} onChange={e => update('phone', e.target.value)} placeholder="+91 XXXXXXXXXX" />
          </FieldGroup>
          <FieldGroup label="Address">
            <Input value={data.address || ''} onChange={e => update('address', e.target.value)} placeholder="City, State" />
          </FieldGroup>
          <FieldGroup label="Dev.to Username">
            <Input value={data.devUsername || ''} onChange={e => update('devUsername', e.target.value)} placeholder="dev.to username" />
          </FieldGroup>
        </div>

        <FieldGroup label="About Me / Description">
          <Textarea
            value={data.description || ''}
            onChange={e => update('description', e.target.value)}
            placeholder="Write about yourself..."
            rows={5}
          />
        </FieldGroup>
      </div>

      <div style={cardStyle}>
        <h3 style={sectionTitle}>🔗 Social Links</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FieldGroup label="GitHub URL">
            <Input value={data.github || ''} onChange={e => update('github', e.target.value)} placeholder="https://github.com/..." />
          </FieldGroup>
          <FieldGroup label="LinkedIn URL">
            <Input value={data.linkedIn || ''} onChange={e => update('linkedIn', e.target.value)} placeholder="https://linkedin.com/in/..." />
          </FieldGroup>
          <FieldGroup label="Twitter URL">
            <Input value={data.twitter || ''} onChange={e => update('twitter', e.target.value)} placeholder="https://twitter.com/..." />
          </FieldGroup>
          <FieldGroup label="Facebook URL">
            <Input value={data.facebook || ''} onChange={e => update('facebook', e.target.value)} placeholder="https://facebook.com/..." />
          </FieldGroup>
          <FieldGroup label="Stack Overflow URL">
            <Input value={data.stackOverflow || ''} onChange={e => update('stackOverflow', e.target.value)} placeholder="https://stackoverflow.com/..." />
          </FieldGroup>
          <FieldGroup label="LeetCode URL">
            <Input value={data.leetcode || ''} onChange={e => update('leetcode', e.target.value)} placeholder="https://leetcode.com/..." />
          </FieldGroup>
          <FieldGroup label="Resume Drive Link">
            <Input value={data.resume || ''} onChange={e => update('resume', e.target.value)} placeholder="https://drive.google.com/..." />
          </FieldGroup>
        </div>
      </div>

      {/* Preview */}
      <div style={{
        ...cardStyle,
        background: 'rgba(16,185,129,0.05)',
        border: '1px solid rgba(16,185,129,0.15)'
      }}>
        <h3 style={{ ...sectionTitle, color: '#10b981' }}>👁️ Preview</h3>
        <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.8' }}>
          <div><strong style={{ color: '#fff' }}>Name:</strong> {data.name}</div>
          <div><strong style={{ color: '#fff' }}>Role:</strong> {data.designation}</div>
          <div><strong style={{ color: '#fff' }}>Email:</strong> {data.email}</div>
          <div><strong style={{ color: '#fff' }}>Phone:</strong> {data.phone}</div>
          <div><strong style={{ color: '#fff' }}>Location:</strong> {data.address}</div>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <button onClick={handleReset} style={{
          padding: '10px 24px', background: 'rgba(239,68,68,0.1)',
          border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px',
          color: '#f87171', fontSize: '14px', cursor: 'pointer', fontWeight: '500'
        }}>
          🔄 Reset to Default
        </button>
        <button onClick={handleSave} style={btnPrimary}>
          💾 Save Changes
        </button>
      </div>
    </div>
  );
}
