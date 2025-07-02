const sharp = require('sharp');
const path = require('path');

async function generateICO() {
  try {
    // PNG'den ICO oluştur
    await sharp(path.join(__dirname, '../public/logo.png'))
      .resize(32, 32)
      .png() // ICO yerine PNG kullan, tarayıcılar destekler
      .toFile(path.join(__dirname, '../public/favicon.ico'));
    
    console.log('✅ favicon.ico oluşturuldu');
  } catch (error) {
    console.error('❌ ICO oluşturma hatası:', error);
  }
}

generateICO(); 