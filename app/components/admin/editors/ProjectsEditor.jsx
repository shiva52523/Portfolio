'use client';

import { useState } from 'react';
import { projectsData as defaultData } from '@/utils/data/projects-data';
import { cardStyle, sectionTitle, FieldGroup, Input, Textarea, btnPrimary, SuccessToast, InfoBanner } from './shared';

export default function ProjectsEditor() {
  const [items, setItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_projects');
      return saved ? JSON.parse(saved) : [...defaultData];
    }
    return [...defaultData];
  });
  const [saved, setSaved] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const updateItem = (idx, key, value) => {
    setItems(prev => prev.map((item, i) => i === idx ? { ...item, [key]: value } : item));
  };

  const updateTools = (idx, toolsStr) => {
    const tools = toolsStr.split(',').map(t => t.trim()).filter(Boolean);
    updateItem(idx, 'tools', tools);
  };

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: 'New Project',
      description: '',
      tools: [],
      role: '',
      code: '',
      demo: ''
    };
    setItems(prev => [newItem, ...prev]);
    setExpandedId(newItem.id);
  };

  const removeItem = (idx) => {
    setItems(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSave = () => {
    localStorage.setItem('admin_projects', JSON.stringify(items));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setItems([...defaultData]);
    localStorage.removeItem('admin_projects');
  };

  const filtered = items.filter(item =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.role?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {saved && <SuccessToast message="Projects saved successfully!" />}
      <InfoBanner />

      {/* Stats + Controls */}
      <div style={{
        display: 'flex', gap: '12px', marginBottom: '24px', alignItems: 'center', flexWrap: 'wrap'
      }}>
        <div style={{
          padding: '10px 20px',
          background: 'rgba(16,185,129,0.1)',
          border: '1px solid rgba(16,185,129,0.2)',
          borderRadius: '10px', color: '#10b981', fontSize: '14px', fontWeight: '600'
        }}>
          📁 Total Projects: {items.length}
        </div>
        <input
          type="text"
          placeholder="🔍 Search projects..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            flex: 1, padding: '10px 16px', minWidth: '200px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px', color: '#fff', fontSize: '14px', outline: 'none',
            boxSizing: 'border-box'
          }}
        />
        <button onClick={addItem} style={{
          padding: '10px 20px',
          background: 'linear-gradient(135deg, #10b981, #6366f1)',
          border: 'none', borderRadius: '10px',
          color: '#fff', fontSize: '14px', fontWeight: '600', cursor: 'pointer'
        }}>
          ➕ Add Project
        </button>
      </div>

      {/* Projects List */}
      {filtered.map((item, idx) => {
        const realIdx = items.findIndex(p => p.id === item.id);
        const isExpanded = expandedId === item.id;

        return (
          <div key={item.id || idx} style={{
            ...cardStyle,
            marginBottom: '12px',
            transition: 'all 0.2s'
          }}>
            {/* Header (always visible) */}
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
              onClick={() => setExpandedId(isExpanded ? null : item.id)}
            >
              <div style={{
                width: '36px', height: '36px',
                background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(99,102,241,0.2))',
                borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', flexShrink: 0
              }}>🚀</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', color: '#fff', fontSize: '14px' }}>
                  {item.name || 'Untitled Project'}
                </div>
                <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                  {item.role} • {item.tools?.length || 0} tools
                </div>
              </div>
              <span style={{ color: '#64748b', fontSize: '18px' }}>{isExpanded ? '▲' : '▼'}</span>
              <button
                onClick={(e) => { e.stopPropagation(); removeItem(realIdx); }}
                style={{
                  padding: '6px 10px',
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  borderRadius: '6px', color: '#f87171', fontSize: '12px', cursor: 'pointer'
                }}
              >🗑️</button>
            </div>

            {/* Expanded Form */}
            {isExpanded && (
              <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <FieldGroup label="Project Name">
                    <Input value={item.name || ''} onChange={e => updateItem(realIdx, 'name', e.target.value)} placeholder="Project Name" />
                  </FieldGroup>
                  <FieldGroup label="Your Role">
                    <Input value={item.role || ''} onChange={e => updateItem(realIdx, 'role', e.target.value)} placeholder="e.g. Backend Developer" />
                  </FieldGroup>
                  <FieldGroup label="GitHub Code URL">
                    <Input value={item.code || ''} onChange={e => updateItem(realIdx, 'code', e.target.value)} placeholder="https://github.com/..." />
                  </FieldGroup>
                  <FieldGroup label="Live Demo URL">
                    <Input value={item.demo || ''} onChange={e => updateItem(realIdx, 'demo', e.target.value)} placeholder="https://..." />
                  </FieldGroup>
                </div>
                <FieldGroup label="Tools (comma separated)">
                  <Input
                    value={item.tools?.join(', ') || ''}
                    onChange={e => updateTools(realIdx, e.target.value)}
                    placeholder="Python, FastAPI, Docker, ..."
                  />
                </FieldGroup>
                <FieldGroup label="Description">
                  <Textarea
                    value={item.description || ''}
                    onChange={e => updateItem(realIdx, 'description', e.target.value)}
                    placeholder="Describe your project..."
                    rows={4}
                  />
                </FieldGroup>
              </div>
            )}
          </div>
        );
      })}

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
        <button onClick={handleReset} style={{
          padding: '10px 24px', background: 'rgba(239,68,68,0.1)',
          border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px',
          color: '#f87171', fontSize: '14px', cursor: 'pointer', fontWeight: '500'
        }}>
          🔄 Reset to Default
        </button>
        <button onClick={handleSave} style={btnPrimary}>
          💾 Save All Projects
        </button>
      </div>
    </div>
  );
}
