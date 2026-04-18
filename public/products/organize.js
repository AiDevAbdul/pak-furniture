const fs = require('fs');
const path = require('path');

// Get all image files
const files = fs.readdirSync('.');
const images = files.filter(f => f.match(/\.(jpg|jpeg)$/i));

// Categorize based on original structure
const categories = {
  'GardensProducts': [],
  'normal': [],
  'Featured': [],
  'Premium': []
};

images.forEach(img => {
  const lower = img.toLowerCase();
  
  // product01 goes to GardensProducts
  if (lower.includes('product01')) {
    categories['GardensProducts'].push(img);
  }
  // Featured products (every 10th)
  else if (lower.includes('product03')) {
    const match = img.match(/\((\d+)\)/);
    if (match) {
      const num = parseInt(match[1]);
      if (num % 10 === 1 || num % 10 === 5 || num % 10 === 9) {
        categories['Featured'].push(img);
      } else if (num > 150) {
        categories['Premium'].push(img);
      } else {
        categories['normal'].push(img);
      }
    }
  }
});

// Move files
Object.entries(categories).forEach(([dir, files]) => {
  files.forEach(file => {
    const src = path.join('.', file);
    const dst = path.join(dir, file);
    fs.renameSync(src, dst);
  });
  console.log(`Moved ${files.length} files to ${dir}`);
});
