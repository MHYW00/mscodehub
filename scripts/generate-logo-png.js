const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

async function generateLogoPngs() {
  try {
    // SVG dosyasını oku
    const svgPath = path.join(__dirname, '..', 'public', 'logo.svg');
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Farklı boyutlarda PNG'ler oluştur
    const sizes = [
      { name: 'logo-64.png', size: 64 },
      { name: 'logo-128.png', size: 128 },
      { name: 'logo-256.png', size: 256 },
      { name: 'logo-512.png', size: 512 },
      { name: 'logo-1024.png', size: 1024 },
      { name: 'logo.png', size: 400 } // Ana logo
    ];
    
    console.log('🎨 MSCodeHub Logo PNG dosyaları oluşturuluyor...\n');
    
    for (const { name, size } of sizes) {
      const outputPath = path.join(__dirname, '..', 'public', name);
      
      await sharp(svgBuffer)
        .resize(size, size)
        .png({
          quality: 100,
          compressionLevel: 0,
          adaptiveFiltering: false
        })
        .toFile(outputPath);
      
      console.log(`✅ ${name} (${size}x${size}) oluşturuldu`);
    }
    
    console.log('\n🚀 Tüm logo dosyaları başarıyla oluşturuldu!');
    console.log('\n📁 Dosya konumları:');
    console.log('   • public/logo.svg (Vector - her boyutta net)');
    console.log('   • public/logo.png (400x400 - genel kullanım)');
    console.log('   • public/logo-64.png (64x64 - favicon)');
    console.log('   • public/logo-128.png (128x128 - küçük boyut)');
    console.log('   • public/logo-256.png (256x256 - orta boyut)');
    console.log('   • public/logo-512.png (512x512 - büyük boyut)');
    console.log('   • public/logo-1024.png (1024x1024 - ultra HD)');
    
    console.log('\n💡 Kullanım örnekleri:');
    console.log('   • Sosyal medya: logo.png (400x400)');
    console.log('   • Business card: logo-512.png veya logo.svg');
    console.log('   • Website favicon: logo-64.png');
    console.log('   • Print kalitesi: logo.svg (vector)');
    
  } catch (error) {
    console.error('❌ Hata:', error.message);
  }
}

generateLogoPngs(); 