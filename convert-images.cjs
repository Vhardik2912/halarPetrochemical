const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const assetsDir = path.join(srcDir, 'assets');

const targetExts = ['.png', '.jpg', '.jpeg'];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

async function run() {
  console.log("Starting image conversion and codebase update...");
  
  if (!fs.existsSync(assetsDir)) {
    console.error(`Error: Assets directory not found at ${assetsDir}`);
    process.exit(1);
  }

  // Find all images within assets
  const allAssetFiles = getAllFiles(assetsDir);
  const imageFiles = allAssetFiles.filter(file => targetExts.includes(path.extname(file).toLowerCase()));

  if (imageFiles.length === 0) {
    console.log("No images found to convert.");
    return;
  }

  const replacements = [];

  for (const inputPath of imageFiles) {
    const ext = path.extname(inputPath);
    const basename = path.basename(inputPath, ext);
    const outputPath = inputPath.slice(0, -ext.length) + '.webp';
    const oldFileName = path.basename(inputPath);
    const newFileName = basename + '.webp';

    console.log(`Converting: ${oldFileName} to WebP...`);
    
    try {
      await sharp(inputPath)
        .webp({ 
          quality: 80, 
          effort: 6,    
          smartSubsample: true 
        })
        .toFile(outputPath);
      
      // Compute size savings
      const inputStats = fs.statSync(inputPath);
      const outputStats = fs.statSync(outputPath);
      const savedBytes = inputStats.size - outputStats.size;
      const savedPercentage = ((savedBytes / inputStats.size) * 100).toFixed(2);
      const outSizeMB = (outputStats.size / (1024 * 1024)).toFixed(2);

      console.log(`✅ Reduced by ${savedPercentage}% (Final size: ${outSizeMB} MB)`);
      
      // Mark for replacement
      replacements.push({ oldFileName, newFileName });

      // Delete original image
      fs.unlinkSync(inputPath);
      console.log(`🗑️ Deleted original: ${oldFileName}`);
    } catch(err) {
      console.error(`Failed to convert ${oldFileName}:`, err);
    }
  }

  // Update code files
  console.log("\nUpdating codebase references...");
  const codeFiles = getAllFiles(srcDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.ts', '.tsx', '.css', '.json', '.js', '.jsx'].includes(ext);
  });

  let totalUpdatedFiles = 0;

  for (const file of codeFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;
    
    for (const { oldFileName, newFileName } of replacements) {
      if (content.includes(oldFileName)) {
        content = content.split(oldFileName).join(newFileName);
        hasChanges = true;
      }
    }

    if (hasChanges) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`📝 Updated references in: ${path.relative(srcDir, file)}`);
      totalUpdatedFiles++;
    }
  }

  console.log(`\n🎉 Conversion complete! Updated references in ${totalUpdatedFiles} files.`);
}

run();
