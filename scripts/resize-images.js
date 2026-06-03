const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const BASE = path.join(__dirname, '..', 'public', 'images')

const targets = [
  { file: 'about-kizuna.jpg', maxWidth: 1600, quality: 82 },
  { file: 'logo-light.jpg', maxWidth: 1200, quality: 85 },
  { file: 'therapists/eya.jpg', maxWidth: 1200, quality: 82 },
  { file: 'therapists/ghania.jpg', maxWidth: 1200, quality: 82 },
  { file: 'therapists/merve.jpg', maxWidth: 1200, quality: 82 },
  { file: 'therapists/yara.jpg', maxWidth: 1200, quality: 82 },
  { file: 'therapists/mariam.jpg', maxWidth: 1200, quality: 82 },
  { file: 'therapists/sabrine.jpg', maxWidth: 1200, quality: 82 },
  { file: 'milestones/1.jpg', maxWidth: 1000, quality: 82 },
  { file: 'milestones/2.jpg', maxWidth: 1000, quality: 82 },
  { file: 'milestones/3.jpg', maxWidth: 1000, quality: 82 },
  { file: 'milestones/4.jpg', maxWidth: 1000, quality: 82 },
  { file: 'milestones/5.jpg', maxWidth: 1000, quality: 82 },
]

;(async () => {
  let totalBefore = 0
  let totalAfter = 0
  for (const { file, maxWidth, quality } of targets) {
    const fp = path.join(BASE, file)
    const before = fs.statSync(fp).size
    const meta = await sharp(fp).metadata()
    const buf = await sharp(fp)
      .rotate()
      .resize({ width: Math.min(meta.width, maxWidth), withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer()
    // Write to .tmp then rename — avoids file-locking issues on Windows
    const tmp = `${fp}.tmp`
    fs.writeFileSync(tmp, buf)
    try {
      fs.unlinkSync(fp)
    } catch (e) {
      // ignore if already gone
    }
    fs.renameSync(tmp, fp)
    const after = buf.length
    totalBefore += before
    totalAfter += after
    const dim = await sharp(fp).metadata()
    console.log(
      `${file.padEnd(28)} ${(before / 1024).toFixed(0).padStart(5)}KB → ${(after / 1024).toFixed(0).padStart(4)}KB  ${dim.width}×${dim.height}`,
    )
  }
  console.log(
    `\ntotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB  (saved ${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)`,
  )
})().catch((e) => { console.error(e); process.exit(1) })
