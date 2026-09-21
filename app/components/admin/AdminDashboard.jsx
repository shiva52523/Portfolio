'use client';

import { useState } from 'react';
import PersonalEditor from './editors/PersonalEditor';
import ExperienceEditor from './editors/ExperienceEditor';
import EducationEditor from './editors/EducationEditor';
import ProjectsEditor from './editors/ProjectsEditor';
import SkillsEditor from './editors/SkillsEditor';

const tabs = [
  { id: 'personal', label: '👤 Personal Info', icon: '👤' },
  { id: 'experience', label: '💼 Experience', icon: '💼' },
  { id: 'education', label: '🎓 Education', icon: '🎓' },
  { id: 'projects', label: '🚀 Projects', icon: '🚀' },
  { id: 'skills', label: '⚡ Skills', icon: '⚡' },
];

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('personal');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a1a',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      color: '#fff',
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      {/* Sidebar */}
      <div style={{
        width: sidebarOpen ? '260px' : '70px',
        background: 'rgba(255,255,255,0.03)',
        borderRight: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        {/* Logo */}
        <div style={{
          padding: '24px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '40px', height: '40px', flexShrink: 0,
            background: 'linear-gradient(135deg, #10b981, #6366f1)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px'
          }}>🛡️</div>
          {sidebarOpen && (
            <div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#10b981' }}>ADMIN PANEL</div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>shiva52523</div>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              marginLeft: 'auto', background: 'none', border: 'none',
              color: '#64748b', cursor: 'pointer', fontSize: '16px',
              padding: '4px', flexShrink: 0
            }}
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '16px 8px', overflowY: 'auto' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px 12px',
                background: activeTab === tab.id
                  ? 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(99,102,241,0.15))'
                  : 'transparent',
                border: activeTab === tab.id
                  ? '1px solid rgba(16,185,129,0.3)'
                  : '1px solid transparent',
                borderRadius: '10px',
                color: activeTab === tab.id ? '#10b981' : '#94a3b8',
                cursor: 'pointer',
                marginBottom: '4px',
                textAlign: 'left',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                overflow: 'hidden'
              }}
            >
              <span style={{ fontSize: '18px', flexShrink: 0 }}>{tab.icon}</span>
              {sidebarOpen && (
                <span style={{ fontSize: '13px', fontWeight: activeTab === tab.id ? '600' : '400' }}>
                  {tab.label.replace(/^[^ ]+ /, '')}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div style={{ padding: '16px 8px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <button
            onClick={onLogout}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
              padding: '12px 12px',
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '10px',
              color: '#f87171', cursor: 'pointer',
              whiteSpace: 'nowrap', overflow: 'hidden',
              transition: 'all 0.2s',
              textAlign: 'left'
            }}
          >
            <span style={{ fontSize: '18px', flexShrink: 0 }}>🚪</span>
            {sidebarOpen && <span style={{ fontSize: '13px', fontWeight: '500' }}>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflow: 'auto', padding: '0' }}>
        {/* Top bar */}
        <div style={{
          padding: '20px 32px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255,255,255,0.02)',
          position: 'sticky', top: 0, zIndex: 10
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#fff' }}>
              {tabs.find(t => t.id === activeTab)?.label}
            </h2>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>
              Edit and manage your portfolio data
            </p>
          </div>
          <div style={{
            padding: '6px 14px',
            background: 'rgba(16,185,129,0.1)',
            border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: '20px',
            fontSize: '12px', color: '#10b981', fontWeight: '500'
          }}>
            ● Live Mode
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '32px' }}>
          {activeTab === 'personal' && <PersonalEditor />}
          {activeTab === 'experience' && <ExperienceEditor />}
          {activeTab === 'education' && <EducationEditor />}
          {activeTab === 'projects' && <ProjectsEditor />}
          {activeTab === 'skills' && <SkillsEditor />}
        </div>
      </div>
    </div>
  );
}
