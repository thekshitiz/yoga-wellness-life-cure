const fs = require('fs');
const path = require('path');
const https = require('https');

const imageUrls = {
  'logo.png': 'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png',
  'yoga-hero-bg.jpg': 'https://source.unsplash.com/1600x900/?yoga,meditation',
  'about-wellness.jpg': 'https://source.unsplash.com/1200x800/?wellness,spa',
  'ayurveda.jpg': 'https://source.unsplash.com/800x600/?ayurveda,herbs',
  'lifestyle.jpg': 'https://source.unsplash.com/800x600/?lifestyle,health',
  'rehabilitation.jpg': 'https://source.unsplash.com/800x600/?rehabilitation,therapy',
  'yoga-retreat.jpg': 'https://source.unsplash.com/800x600/?yoga,retreat',
  'package-1.jpg': 'https://source.unsplash.com/800x600/?yoga,training',
  'package-2.jpg': 'https://source.unsplash.com/800x600/?meditation,therapy',
  'package-3.jpg': 'https://source.unsplash.com/800x600/?massage,ayurveda',
  'team-1.jpg': 'https://source.unsplash.com/400x400/?doctor,professional',
  'team-2.jpg': 'https://source.unsplash.com/400x400/?therapist,professional',
  'team-3.jpg': 'https://source.unsplash.com/400x400/?yoga,instructor',
  'team-4.jpg': 'https://source.unsplash.com/400x400/?wellness,coordinator'
};

const imagesDir = path.join(__dirname, '../public/images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download images
Object.entries(imageUrls).forEach(([filename, url]) => {
  const filePath = path.join(imagesDir, filename);
  
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      console.log(`Downloaded: ${filename}`);
      fileStream.close();
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
}); 