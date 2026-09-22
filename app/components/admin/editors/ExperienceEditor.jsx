// 'use client';

// import { useState } from 'react';
// import { experiences as defaultData } from '@/utils/data/experience';
// import { cardStyle, sectionTitle, FieldGroup, Input, btnPrimary, btnDanger, SuccessToast, InfoBanner } from './shared';

// export default function ExperienceEditor() {
//   const [items, setItems] = useState(() => {
//     if (typeof window !== 'undefined') {
//       const saved = localStorage.getItem('admin_experience');
//       return saved ? JSON.parse(saved) : [...defaultData];
//     }
//     return [...defaultData];
//   });
//   const [saved, setSaved] = useState(false);

//   const updateItem = (idx, key, value) => {
//     setItems(prev => prev.map((item, i) => i === idx ? { ...item, [key]: value } : item));
//   };

//   const addItem = () => {
//     setItems(prev => [...prev, {
//       id: Date.now(),
//       title: '',
//       company: '',
//       duration: ''
//     }]);
//   };

//   const removeItem = (idx) => {
//     setItems(prev => prev.filter((_, i) => i !== idx));
//   };

//   const handleSave = () => {
//     localStorage.setItem('admin_experience', JSON.stringify(items));
//     setSaved(true);
//     setTimeout(() => setSaved(false), 3000);
//   };

//   const handleReset = () => {
//     setItems([...defaultData]);
//     localStorage.removeItem('admin_experience');
//   };

//   return (
//     <div>
//       {saved && <SuccessToast message="Experience data saved successfully!" />}
//       <InfoBanner />

//       {items.map((item, idx) => (
//         <div key={item.id || idx} style={{
//           ...cardStyle,
//           position: 'relative'
//         }}>
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
//             <h3 style={{ ...sectionTitle, marginBottom: 0, borderBottom: 'none', paddingBottom: 0 }}>
//               💼 Experience #{idx + 1}
//             </h3>
//             <button onClick={() => removeItem(idx)} style={{
//               padding: '6px 12px',
//               background: 'rgba(239,68,68,0.1)',
//               border: '1px solid rgba(239,68,68,0.3)',
//               borderRadius: '8px',
//               color: '#f87171', fontSize: '12px', cursor: 'pointer'
//             }}>
//               🗑️ Remove
//             </button>
//           </div>

//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
//             <FieldGroup label="Job Title">
//               <Input
//                 value={item.title}
//                 onChange={e => updateItem(idx, 'title', e.target.value)}
//                 placeholder="e.g. Python Developer"
//               />
//             </FieldGroup>
//             <FieldGroup label="Company Name">
//               <Input
//                 value={item.company}
//                 onChange={e => updateItem(idx, 'company', e.target.value)}
//                 placeholder="e.g. Google Inc."
//               />
//             </FieldGroup>
//             <FieldGroup label="Duration">
//               <Input
//                 value={item.duration}
//                 onChange={e => updateItem(idx, 'duration', e.target.value)}
//                 placeholder="e.g. (Jan 2024 - Present)"
//               />
//             </FieldGroup>
//           </div>
//         </div>
//       ))}

//       {/* Add button */}
//       <button onClick={addItem} style={{
//         width: '100%',
//         padding: '16px',
//         background: 'rgba(16,185,129,0.05)',
//         border: '2px dashed rgba(16,185,129,0.3)',
//         borderRadius: '12px',
//         color: '#10b981', fontSize: '14px', cursor: 'pointer',
//         fontWeight: '500', marginBottom: '24px',
//         transition: 'all 0.2s'
//       }}>
//         ➕ Add New Experience
//       </button>

//       <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
//         <button onClick={handleReset} style={{
//           padding: '10px 24px', background: 'rgba(239,68,68,0.1)',
//           border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px',
//           color: '#f87171', fontSize: '14px', cursor: 'pointer', fontWeight: '500'
//         }}>
//           🔄 Reset to Default
//         </button>
//         <button onClick={handleSave} style={btnPrimary}>
//           💾 Save Changes
//         </button>
//       </div>
//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import { experiences as defaultData } from '@/utils/data/experience';
import { cardStyle, sectionTitle, FieldGroup, Input, btnPrimary, btnDanger, SuccessToast, InfoBanner } from './shared';

export default function ExperienceEditor() {
  const [items, setItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_experience');
      return saved ? JSON.parse(saved) : [...defaultData];
    }
    return [...defaultData];
  });
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false); // Saving loader state track karne ke liye

  const updateItem = (idx, key, value) => {
    setItems(prev => prev.map((item, i) => i === idx ? { ...item, [key]: value } : item));
  };

  const addItem = () => {
    setItems(prev => [...prev, {
      id: Date.now(),
      title: '',
      company: '',
      duration: ''
    }]);
  };

  const removeItem = (idx) => {
    setItems(prev => prev.filter((_, i) => i !== idx));
  };

  // Naya Server File Writer API integrated handleSave function
  const handleSave = async () => {
    setLoading(true);
    try {
      // 1. Browser temporary cache local state backup
      localStorage.setItem('admin_experience', JSON.stringify(items));

      // 2. Local File system me permanent overwrite call
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'experience',
          data: items
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        alert('❌ Error saving to files: ' + result.error);
      }
    } catch (err) {
      console.error(err);
      alert('❌ Server connectivity check fail. API hit nahi ho paayi.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    if (confirm("Kya aap such me Experience data ko default par reset karna chahte hain?")) {
      setItems([...defaultData]);
      localStorage.removeItem('admin_experience');
    }
  };

  return (
    <div>
      {saved && <SuccessToast message="Experience data saved permanently to local files!" />}
      <InfoBanner />

      {items.map((item, idx) => (
        <div key={item.id || idx} style={{
          ...cardStyle,
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ ...sectionTitle, marginBottom: 0, borderBottom: 'none', paddingBottom: 0 }}>
              💼 Experience #{idx + 1}
            </h3>
            <button onClick={() => removeItem(idx)} style={{
              padding: '6px 12px',
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: '8px',
              color: '#f87171', fontSize: '12px', cursor: 'pointer'
            }}>
              🗑️ Remove
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            <FieldGroup label="Job Title">
              <Input
                value={item.title}
                onChange={e => updateItem(idx, 'title', e.target.value)}
                placeholder="e.g. Python Developer"
              />
            </FieldGroup>
            <FieldGroup label="Company Name">
              <Input
                value={item.company}
                onChange={e => updateItem(idx, 'company', e.target.value)}
                placeholder="e.g. Google Inc."
              />
            </FieldGroup>
            <FieldGroup label="Duration">
              <Input
                value={item.duration}
                onChange={e => updateItem(idx, 'duration', e.target.value)}
                placeholder="e.g. (Jan 2024 - Present)"
              />
            </FieldGroup>
          </div>
        </div>
      ))}

      {/* Add button */}
      <button onClick={addItem} style={{
        width: '100%',
        padding: '16px',
        background: 'rgba(16,185,129,0.05)',
        border: '2px dashed rgba(16,185,129,0.3)',
        borderRadius: '12px',
        color: '#10b981', fontSize: '14px', cursor: 'pointer',
        fontWeight: '500', marginBottom: '24px',
        transition: 'all 0.2s'
      }}>
        ➕ Add New Experience
      </button>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <button onClick={handleReset} style={{
          padding: '10px 24px', background: 'rgba(239,68,68,0.1)',
          border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px',
          color: '#f87171', fontSize: '14px', cursor: 'pointer', fontWeight: '500'
        }}>
          🔄 Reset to Default
        </button>
        <button 
          onClick={handleSave}
          disabled={loading}
          style={{...btnPrimary, opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer'}}
        >
          {loading ? '⏳ Saving...' : '💾 Save Changes'}
        </button>
      </div>
    </div>
  );
}
