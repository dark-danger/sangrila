#!/usr/bin/env node

/**
 * Image Optimization Script for Sangrila Website
 * 
 * This script optimizes all images in the public/team directory
 * to ensure fast loading on Vercel deployment.
 * 
 * Usage: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = [
    path.join(__dirname, '../public/team'),
    path.join(__dirname, '../public/images'),
    path.join(__dirname, '../public/sponsors'),
    path.join(__dirname, '../public/stars')
];
const maxWidth = 1920;
const maxHeight = 1080;
const quality = 80;

console.log('🎨 Starting image optimization...\n');

let optimizedCount = 0;
let totalSizeBefore = 0;
let totalSizeAfter = 0;

async function optimizeImage(inputDir, file) {
    const inputPath = path.join(inputDir, file);
    const tempPath = path.join(inputDir, file + '.tmp');

    try {
        const statsBefore = fs.statSync(inputPath);
        const sizeBefore = statsBefore.size;
        totalSizeBefore += sizeBefore;

        // Optimize the image
        await sharp(inputPath)
            .resize(maxWidth, maxHeight, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .jpeg({
                quality: quality,
                mozjpeg: true
            })
            .toFile(tempPath);

        // Replace original with optimized
        fs.renameSync(tempPath, inputPath);

        const statsAfter = fs.statSync(inputPath);
        const sizeAfter = statsAfter.size;
        totalSizeAfter += sizeAfter;

        const reduction = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);

        console.log(`✅ ${file}`);
        console.log(`   Before: ${(sizeBefore / 1024).toFixed(1)}KB → After: ${(sizeAfter / 1024).toFixed(1)}KB (${reduction}% reduction)\n`);

        optimizedCount++;
    } catch (error) {
        console.error(`❌ Error optimizing ${file}:`, error.message);
    }
}

async function optimizeAllImages() {
    for (const dir of directories) {
        if (!fs.existsSync(dir)) {
            console.warn(`⚠️  Warning: ${dir} not found, skipping...`);
            continue;
        }

        const files = fs.readdirSync(dir);
        const imageFiles = files.filter(file =>
            file.match(/\.(jpg|jpeg|png)$/i) && !file.includes('.tmp')
        );

        if (imageFiles.length === 0) {
            console.log(`ℹ️  No images found in ${path.basename(dir)}.`);
            continue;
        }

        console.log(`📍 Optimizing images in: ${path.basename(dir)} (${imageFiles.length} files)`);

        for (const file of imageFiles) {
            await optimizeImage(dir, file);
        }
    }

    if (optimizedCount === 0) {
        console.log('⚠️  No images were optimized.');
        return;
    }

    const totalReduction = ((totalSizeBefore - totalSizeAfter) / totalSizeBefore * 100).toFixed(1);

    console.log('━'.repeat(50));
    console.log('📊 Optimization Summary:');
    console.log(`   Images optimized: ${optimizedCount}`);
    console.log(`   Total size before: ${(totalSizeBefore / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Total size after: ${(totalSizeAfter / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Total reduction: ${totalReduction}%`);
    console.log('━'.repeat(50));
    console.log('\n✨ Optimization complete! Your images are now ready for Vercel deployment.\n');
}

// Check if sharp is installed
try {
    require.resolve('sharp');
    optimizeAllImages().catch(console.error);
} catch (e) {
    console.error('❌ Error: sharp package not found!');
    console.log('\n📦 Please install sharp first:');
    console.log('   npm install --save-dev sharp\n');
    console.log('Then run this script again:');
    console.log('   node scripts/optimize-images.js\n');
    process.exit(1);
}
