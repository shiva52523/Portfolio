// import { NextResponse } from "next/server";

// export async function GET(request) {
//   return NextResponse.json({
//     success: true,
//     message: 'hle!',
//     data: {
//       message: 'Message and email sent successfully!',
//     }
//   }, { status: 200 });
// };


import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

// 1. GET Method (Agar portfolio ko dynamic fetch karna ho)
export async function GET(request) {
  return NextResponse.json({
    success: true,
    message: 'API is working fine!',
  }, { status: 200 });
}

// 2. POST Method: Yeh aapka data permanently save karega
export async function POST(request) {
  try {
    const { type, data } = await request.json();

    let filename = '';
    let exportName = '';

    // Aapke utils/data/ folder ke variable aur file ke names ke hisab se logic
    switch (type) {
      case 'personal':
        filename = 'personal-data.js';
        exportName = 'personalData';
        break;
      case 'experience':
        filename = 'experiences.js';
        exportName = 'experiencesData';
        break;
      case 'education':
        filename = 'educations.js';
        exportName = 'educations';
        break;
      case 'projects':
        filename = 'projects-data.js';
        exportName = 'projectsData';
        break;
      case 'skills':
        filename = 'skills.js';
        exportName = 'skillsData';
        break;
      default:
        throw new Error('Invalid section type provided');
    }

    // File ka absolute server path nikalna
    const filePath = path.join(process.cwd(), 'utils', 'data', filename);
    
    // File ke andar formatted javascript syntax string banana
    const fileContent = `export const ${exportName} = ${JSON.stringify(data, null, 2)};\n`;
    
    // File system me write/overwrite karna
    fs.writeFileSync(filePath, fileContent, 'utf-8');

    return NextResponse.json({ 
      success: true, 
      message: `${type.toUpperCase()} section updated successfully in local files!` 
    });

  } catch (error) {
    console.error('Error saving portfolio data:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
