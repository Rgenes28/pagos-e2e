import fs from 'fs';
const pdfParse = require('pdf-parse');

export async function leerTextoPDF(filePath: string): Promise<string> {
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);
  return data.text;
}
