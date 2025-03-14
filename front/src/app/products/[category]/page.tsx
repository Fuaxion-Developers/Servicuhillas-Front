"use client";
import { useParams, useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Mapeo de nombres en español
const categoryNames: Record<string, string> = {
  plastic: "del Plástico",
  paper: " del Papel",
  wood: " de la Madera",
  rubber: " del Caucho",
  metal: "Metalmecánica",
  food: " de Alimentos",
};

// Mapeo de descripciones por categoría
const descriptions: Record<string, string> = {
  plastic: `
    Diseñadas para garantizar cortes precisos y eficientes en materiales como espumas, PVC y otros polímeros, tanto rígidos como flexibles. 
    Se fabrican en aceros de alta resistencia para soportar el desgaste y la fricción generada en procesos de reciclaje, extrusión e inyección.

    - Materiales de alta resistencia: Fabricadas en aceros endurecidos y tratamientos especiales para mayor durabilidad.
    - Cortes precisos y limpios: Minimización de rebabas y desperdicio de material.
    - Diseño a medida: Adaptadas a distintos tipos de máquinas y procesos industriales.
    - Resistencia al desgaste: Tratamientos térmicos para prolongar su vida útil.
    - Usos comunes: Trituración, molienda, corte en caliente y granulación de plásticos reciclados y vírgenes.
  `,

  paper: `
    Cuchillas diseñadas para realizar cortes precisos en materiales como papel, cartón y celulosa, garantizando bordes limpios y minimizando el desperdicio. Se fabrican con aceros de alta dureza para resistir el desgaste y la fricción constante en procesos de corte.

    - Alta precisión: Garantizan cortes limpios sin desgarres ni imperfecciones.
    - Materiales resistentes: Fabricadas en aceros de alta dureza con tratamientos para mayor durabilidad.
    - Diseño a medida: Adaptadas a distintos tipos de máquinas y aplicaciones.
    - Baja fricción: Diseño optimizado del filo que minimiza la fricción durante el corte, reduciendo el calentamiento y el desgaste.
    - Usos comunes: Corte de bobinas, procesamiento de cartón y papel reciclado.
  `,

  wood: `
  Cuchillas diseñadas para realizar cortes precisos y eficientes en diferentes tipos de madera, desde tableros de fibra hasta troncos macizos. 
  Se fabrican con aceros de alta resistencia y tratamientos especiales que les permiten soportar altas velocidades y esfuerzos sin perder el filo.

  - Corte limpio y preciso: Diseñadas para minimizar astillas y desperdicio de material.
  - Alta resistencia: Fabricadas en aceros endurecidos para mayor durabilidad.
  - Adaptabilidad: Disponibles en diferentes formatos para sierras, cepilladoras y trituradoras.
  - Diseño de filo optimizado: Su geometría precisa reduce la fricción y el desgaste, prolongando la vida útil.
  - Usos comunes: Procesamiento de tableros, corte de madera maciza, fabricación de muebles y carpintería industrial.
`,

  rubber: `
Cuchillas diseñadas para realizar cortes precisos y sin deformaciones en materiales elásticos y resistentes. 
Se fabrican con aceros de alta dureza y tratamientos especiales para soportar la abrasión y la elasticidad del caucho, 
garantizando una vida útil prolongada y un rendimiento eficiente en los procesos de producción.

- Corte limpio y sin rebabas: Evitan deformaciones en el material.
- Alta resistencia al desgaste: Fabricadas en acero templado.
- Versatilidad: Adecuadas para cortar caucho natural, sintético y reforzado con fibras.
- Baja adherencia: Tratamientos especiales para reducir la acumulación de residuos.
- Usos comunes: Producción de neumáticos, fabricación de sellos y juntas, procesamiento de bandas transportadoras y otros productos de caucho industrial.
`,

  metal: `
Cuchillas diseñadas para cortar y dar forma a metales de distintas durezas con alta precisión y durabilidad. 
Fabricadas con aceros de alta resistencia y tratamientos térmicos especializados, estas cuchillas garantizan un rendimiento óptimo 
en entornos de alta exigencia, minimizando el desgaste y optimizando la producción.

- Alta dureza y resistencia al desgaste: Fabricadas en acero templado.
- Precisión en el corte: Ideales para cortar láminas, tubos y piezas metálicas sin deformaciones.
- Durabilidad optimizada: Diseñadas para soportar altas cargas de trabajo.
- Versatilidad de aplicaciones: Utilizadas en procesos de estampado, cizallado y perfilado de metales.
- Usos comunes: Producción de herramientas y componentes industriales.
`,

  food: ` 
Cuchillas diseñadas para realizar cortes precisos en productos como carnes, embutidos, pan, frutas, vegetales y otros alimentos procesados. 
Están fabricadas en acero inoxidable de grado alimenticio, lo que garantiza resistencia a la corrosión, higiene y cumplimiento de normativas sanitarias. 
Su diseño optimiza la eficiencia del corte y minimiza el desperdicio de producto.

- Material higiénico y resistente: Acero inoxidable con alta resistencia a la corrosión y fácil limpieza.
- Corte preciso y uniforme: Diseñadas para garantizar eficiencia en procesos de producción automatizados.
- Variedad de formas y tamaños: Adaptadas para diferentes tipos de alimentos y maquinaria.
- Durabilidad y rendimiento: Tratamientos especiales para reducir el desgaste y aumentar la vida útil.
- Usos comunes: Procesamiento de carnes, panificación, corte de frutas y vegetales, producción de snacks y alimentos congelados.
`,
};

// Mapeo de imágenes por categoría
const categoryImages: Record<string, string> = {
  plastic:
    "https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741735447/910c987e-e9c0-4af8-916a-d9b6e3b3e77e_c34i2d.png",
  paper:
    "https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741359735/cuchillas/ifbyi1lexmfsyi8hwm6f.png",
  wood: "https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741735446/cc4599db-1cd6-43f7-bb68-6e046c36029b_kc1kom.png",
  rubber:
    "https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741735447/910c987e-e9c0-4af8-916a-d9b6e3b3e77e_c34i2d.png",
  metal:
    "https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741359738/cuchillas/o9h5lauapb1mwyiylsaw.png",
  food: "https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741359738/cuchillas/ctfhuj48yehxjgzljayy.png",
};

// Mapeo de tamaños de imagen por categoría
const categoryImageSizes: Record<string, { width: number; height: number }> = {
  plastic: { width: 500, height: 110 },
  paper: { width: 500, height: 200 },
  wood: { width: 480, height: 480 },
  rubber: { width: 520, height: 160 },
  metal: { width: 500, height: 500 },
  food: { width: 460, height: 300 },
};

export default function ProductPage() {
  const { category } = useParams();
  const router = useRouter();
  const translatedCategory = categoryNames[category as string] || category;
  const imageUrl =
    categoryImages[category as string] || categoryImages["plastic"];
  const { width, height } =
    categoryImageSizes[category as string] || categoryImageSizes["plastic"];

  return (
    <Box
      sx={{
        padding: "8%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Botón de Volver */}
      <Button
        variant="contained"
        onClick={() => router.back()}
        startIcon={<ArrowBackIcon />}
        sx={{
          alignSelf: "flex-start",
          backgroundColor: "#444",
          "&:hover": { backgroundColor: "#666" },
        }}
      >
        Volver
      </Button>

      {/* Contenido */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Texto a la izquierda */}
        <Box sx={{ textAlign: "left", marginTop: "80px" }}>
          <Typography variant="h3" fontWeight="bold" color="white">
            Cuchillas para la industria {translatedCategory}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginTop: "200px",
              color: "gray",
              whiteSpace: "pre-line",
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "#EAC01B",
                color: "black",
                padding: "8px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "20px",
              }}
            >
              Descripción
            </Box>
            {descriptions[category as string] || "Descripción no encontrada."}
          </Typography>
        </Box>

        {/* Imagen a la derecha con tamaño dinámico */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Image
            src={imageUrl}
            alt={`Cuchillas para la industria ${translatedCategory}`}
            width={width}
            height={height}
            style={{ borderRadius: "12px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
