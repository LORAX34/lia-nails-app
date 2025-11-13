export interface GalleryImage {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    created_at?: string;
    public_id?: string;
}

// Imágenes locales (primeras 4)
const localImages: GalleryImage[] = [
    { src: "/image1.webp", alt: "Diseño de uñas 1" },
    { src: "/image2.webp", alt: "Diseño de uñas 2" },
    { src: "/image3.webp", alt: "Diseño de uñas 3" },
    { src: "/image4.webp", alt: "Diseño de uñas 4" },
];

// Función para obtener imágenes de Cloudinary
// Función para obtener imágenes de Cloudinary
export async function getCloudinaryImages(): Promise<GalleryImage[]> {
    try {
        console.log("🔄 Obteniendo imágenes de Cloudinary...");

        // CORREGIR: Quita la barra final en producción
        const baseUrl = import.meta.env.PROD
            ? "https://lia-nails-app.vercel.app"
            : "http://localhost:4321";

        console.log("🔗 URL de API:", `${baseUrl}/api/galeria.json`);

        const response = await fetch(`${baseUrl}/api/galeria.json`);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("📦 Respuesta de API:", data);

        if (!data.success) {
            throw new Error(data.error || "Error al cargar imágenes");
        }

        console.log(
            `✅ ${data.images.length} imágenes cargadas desde Cloudinary`,
        );

        return data.images.map((img: any) => ({
            src: img.url,
            alt: img.alt || `Diseño de uñas ${img.public_id}`,
            width: img.width,
            height: img.height,
            created_at: img.created_at,
            public_id: img.public_id,
            thumbnail: img.thumbnail,
        }));
    } catch (error) {
        console.error("❌ Error cargando imágenes de Cloudinary:", error);
        return [];
    }
}

// Función para obtener todas las imágenes (locales + Cloudinary)
// Función para obtener todas las imágenes (locales + Cloudinary)
export async function getAllImages(): Promise<GalleryImage[]> {
    try {
        console.log("🔄 getAllImages iniciado...");

        const cloudinaryImages = await getCloudinaryImages();
        console.log("✅ Cloudinary images:", cloudinaryImages.length);

        const allImages = [...localImages, ...cloudinaryImages];
        console.log("✅ Total images:", allImages.length);

        if (!Array.isArray(allImages)) {
            console.error("❌ allImages no es un array!", typeof allImages);
            return localImages;
        }

        return allImages;
    } catch (error) {
        console.error("❌ Error en getAllImages:", error);
        return [...localImages];
    }
}

// Función para obtener imágenes de preview (solo las primeras N locales)
export function getPreviewImages(limit?: number): GalleryImage[] {
    if (limit && limit > 0) {
        return localImages.slice(0, limit);
    }
    return localImages;
}
