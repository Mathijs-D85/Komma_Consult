type FounderPhotoProps = {
  className?: string
  alt?: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
}

export default function FounderPhoto({
  className,
  alt = 'Mathijs Duisdecker',
  width,
  height,
  priority = false,
  sizes = '(min-width: 1024px) 40vw, 90vw',
}: FounderPhotoProps) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet="/mathijs-duisdecker-400.webp 400w, /mathijs-duisdecker-800.webp 800w"
        sizes={sizes}
      />
      <img
        src="/mathijs-duisdecker.jpg"
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  )
}
