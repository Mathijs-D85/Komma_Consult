import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const src = path.join(root, 'public', 'mathijs-duisdecker.jpg')

const meta = await sharp(src).metadata()
console.log(`Bron: ${meta.width}x${meta.height}, ${meta.format}`)

await sharp(src)
  .resize(400)
  .webp({ quality: 78 })
  .toFile(path.join(root, 'public', 'mathijs-duisdecker-400.webp'))

await sharp(src)
  .resize(800)
  .webp({ quality: 78 })
  .toFile(path.join(root, 'public', 'mathijs-duisdecker-800.webp'))

console.log('WebP-varianten geschreven.')
