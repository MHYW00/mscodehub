const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const inputFile = path.join(__dirname, '../public/logo.png');
  const publicDir = path.join(__dirname, '../public');

  try {
    // 192x192 favicon
    await sharp(inputFile)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'favicon-192x192.png'));
    console.log('✅ favicon-192x192.png oluşturuldu');

    // 512x512 favicon  
    await sharp(inputFile)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'favicon-512x512.png'));
    console.log('✅ favicon-512x512.png oluşturuldu');

    // Apple touch icon
    await sharp(inputFile)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✅ apple-touch-icon.png oluşturuldu');

    // 16x16 favicon
    await sharp(inputFile)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    console.log('✅ favicon-16x16.png oluşturuldu');

    // 32x32 favicon
    await sharp(inputFile)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    console.log('✅ favicon-32x32.png oluşturuldu');

    console.log('🎉 Tüm favicon dosyaları başarıyla oluşturuldu!');
  } catch (error) {
    console.error('❌ Favicon oluşturma hatası:', error);
  }
}

generateFavicons(); 