export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { src: "/image1.webp", alt: "Diseño de uñas 1" },
  { src: "/image2.webp", alt: "Diseño de uñas 2" },
  { src: "/image3.webp", alt: "Diseño de uñas 3" },
  { src: "/image4.webp", alt: "Diseño de uñas 4" },
  {
    src: "https://res.cloudinary.com/dfsttrid3/image/upload/v1756295660/image5_cdtijz.webp",
    alt: "Diseño de uñas 5",
  },
  {
    src: "https://res.cloudinary.com/dfsttrid3/image/upload/v1756295661/image6_szqwzi.webp",
    alt: "Diseño de uñas 6",
  },
  {
    src: "https://res.cloudinary.com/dfsttrid3/image/upload/v1756295662/image7_wi2kyf.webp",
    alt: "Diseño de uñas 7",
  },
  {
    src: "https://res.cloudinary.com/dfsttrid3/image/upload/v1756295675/image8_bmc23o.webp",
    alt: "Diseño de uñas 8",
  },
  {
    src: "https://res.cloudinary.com/dfsttrid3/image/upload/v1756295662/image9_dexkcb.webp",
    alt: "Diseño de uñas 9",
  },
  {
    src: "https://res.cloudinary.com/dfsttrid3/image/upload/v1757110533/20250904_191953_t2it6v.webp",
    alt: "Diseño de uñas 10",
  },
  {
    src: "https://res.cloudinary.com/dfsttrid3/image/upload/v1757110535/20250901_194059_yoffwy.webp",
    alt: "Diseño de uñas 11",
  },
  {
    src: "https://res.cloudinary.com/dfsttrid3/image/upload/v1757110538/20250829_163011_d8xec0.webp",
    alt: "Diseño de uñas 12",
  },
  {
    src: "https://res.cloudinary.com/dfsttrid3/image/upload/v1757110535/20250827_191919_t3oamr.webp",
    alt: "Diseño de uñas 13",
  },
  {
    src: "https://res.cloudinary.com/dfsttrid3/image/upload/v1761979755/photo_2025-11-01_02-39-21_wzmtp3.webp",
    alt: "Diseño de uñas 14",
  },
  {
    src: "https://res.cloudinary.com/dfsttrid3/image/upload/v1761979755/photo_2025-11-01_02-39-28_oo28z7.webp",
    alt: "Diseño de uñas 15",
  },
  {
    src: "https://res.cloudinary.com/dfsttrid3/image/upload/v1761979755/photo_2025-11-01_02-39-15_lbuhgq.webp",
    alt: "Diseño de uñas 16",
  },
];

// Obtener solo las primeras 5 imágenes para la galería principal
export const getPreviewImages = (count: number = 5): GalleryImage[] => {
  return galleryImages.slice(0, count);
};

// Obtener todas las imágenes
export const getAllImages = (): GalleryImage[] => {
  return galleryImages;
};
