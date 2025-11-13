// src/pages/api/galeria.json.js
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
    api_key: import.meta.env.CLOUDINARY_API_KEY,
    api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export async function GET({ request }) {
    try {
        console.log("🔄 Buscando imágenes en Cloudinary...");

        const result = await cloudinary.search
            .expression("resource_type:image AND folder:lia-nails-galery")
            .sort_by("created_at", "desc")
            .max_results(50)
            .execute();

        console.log(`✅ Encontradas ${result.resources?.length || 0} imágenes`);

        const images = result.resources.map((img) => ({
            id: img.asset_id,
            public_id: img.public_id,
            width: img.width,
            height: img.height,
            format: img.format,
            created_at: img.created_at,
            url: `https://res.cloudinary.com/${import.meta.env.CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1200/${img.public_id}.${img.format}`,
            thumbnail: `https://res.cloudinary.com/${import.meta.env.CLOUDINARY_CLOUD_NAME}/image/upload/c_thumb,w_300,h_300,g_auto/${img.public_id}.${img.format}`,
        }));

        return new Response(
            JSON.stringify({
                success: true,
                images: images,
                count: images.length,
                lastUpdated: new Date().toISOString(),
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "public, max-age=300", // Cache de 5 minutos
                    "Access-Control-Allow-Origin": "*",
                },
            },
        );
    } catch (error) {
        console.error("❌ Error en endpoint /api/galeria:", error);
        return new Response(
            JSON.stringify({
                success: false,
                error: "Error al cargar las imágenes",
                details: error.message,
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            },
        );
    }
}
