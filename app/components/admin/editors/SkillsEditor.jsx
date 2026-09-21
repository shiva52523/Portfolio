'use client';

import { useState } from 'react';
import { skillsData as defaultData } from '@/utils/data/skills';
import { cardStyle, sectionTitle, btnPrimary, SuccessToast, InfoBanner, labelStyle } from './shared';

export default function SkillsEditor() {
  const [skills, setSkills] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_skills');
      return saved ? JSON.parse(saved) : [...defaultData];
    }
    return [...defaultData];
  });
  const [newSkill, setNewSkill] = useState('');
  const [saved, setSaved] = useState(false);

  const removeSkill = (idx) => {
    setSkills(prev => prev.filter((_, i) => i !== idx));
  };

  const addSkill = () => {
    const trimmed = newSkill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills(prev => [...prev, trimmed]);
      setNewSkill('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addSkill();
  };

  const handleSave = () => {
    localStorage.setItem('admin_skills', JSON.stringify(skills));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setSkills([...defaultData]);
    localStorage.removeItem('admin_skills');
  };

  return (
    <div>
      {saved && <SuccessToast message="Skills saved successfully!" />}
      <InfoBanner />

      {/* Add skill */}
      <div style={{ ...cardStyle }}>
        <h3 style={sectionTitle}>➕ Add New Skill</h3>
        <div style={{ display: 'flex', gap: '12px' }}>
          <input
            type="text"
            value={newSkill}
            onChange={e => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type skill name and press Enter or click Add..."
            style={{
              flex: 1, padding: '12px 16px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '10px', color: '#fff', fontSize: '14px', outline: 'none',
              boxSizing: 'border-box'
            }}
            onFocus={e => e.target.style.borderColor = '#10b981'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          <button onClick={addSkill} style={{
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #10b981, #6366f1)',
            border: 'none', borderRadius: '10px',
            color: '#fff', fontSize: '14px', fontWeight: '600', cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}>
            ➕ Add
          </button>
        </div>
        <p style={{ color: '#64748b', fontSize: '12px', marginTop: '10px', marginBottom: 0 }}>
          Tip: You can also press Enter to add a skill
        </p>
      </div>

      {/* Skills Grid */}
      <div style={{ ...cardStyle }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ ...sectionTitle, marginBottom: 0, borderBottom: 'none', paddingBottom: 0 }}>
            ⚡ Current Skills
          </h3>
          <span style={{
            padding: '4px 12px',
            background: 'rgba(16,185,129,0.1)',
            border: '1px solid rgba(16,185,129,0.2)',
            borderRadius: '20px', color: '#10b981', fontSize: '12px', fontWeight: '600'
          }}>
            {skills.length} skills
          </span>
        </div>

        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '10px'
        }}>
          {skills.map((skill, idx) => (
            <div key={idx} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '8px 14px',
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.25)',
              borderRadius: '24px',
              fontSize: '13px', color: '#c4b5fd',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}>
              <span>{skill}</span>
              <button
                onClick={() => removeSkill(idx)}
                style={{
                  background: 'none', border: 'none',
                  color: '#f87171', cursor: 'pointer',
                  padding: '0 0 0 2px',
                  fontSize: '14px',
                  lineHeight: 1, display: 'flex', alignItems: 'center'
                }}
                title="Remove skill"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {skills.length === 0 && (
          <div style={{ textAlign: 'center', color: '#64748b', padding: '40px', fontSize: '14px' }}>
            No skills added yet. Add some using the form above.
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <button onClick={handleReset} style={{
          padding: '10px 24px', background: 'rgba(239,68,68,0.1)',
          border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px',
          color: '#f87171', fontSize: '14px', cursor: 'pointer', fontWeight: '500'
        }}>
          🔄 Reset to Default
        </button>
        <button onClick={handleSave} style={btnPrimary}>
          💾 Save Skills
        </button>
      </div>
    </div>
  );
}
