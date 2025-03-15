"use client";
import { useParams, useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Mapeo de nombres en español
const categoryNames: Record<string, string> = {
  plastic: "del plástico",
  paper: " del papel",
  wood: " de la madera",
  rubber: " del caucho",
  metal: "metalmecánica",
  food: " de alimentos",
};

// Mapeo de descripciones por categoría
const descriptions: Record<string, string> = {
  plastic: `
    Las cuchillas industriales para la industria del plástico están diseñadas para realizar cortes precisos y eficientes en materiales como plásticos rígidos, flexibles, espumas, PVC y polímeros reciclados. Se fabrican en una amplia variedad de formas y tamaños, incluyendo cuchillas rectas, circulares, dentadas y de guillotina, adaptándose a las necesidades específicas de cada proceso productivo.

    Gracias a su fabricación en aceros de alta resistencia y tratamientos térmicos especiales, estas cuchillas garantizan una mayor durabilidad y resistencia al desgaste generado por la fricción y la dureza del material procesado. Se utilizan en aplicaciones como el corte de láminas, extrusión, inyección, molienda y reciclaje, optimizando la producción y reduciendo desperdicios.

    En Servicuchillas, ofrecemos cuchillas diseñadas a medida para distintos tipos de maquinaria, asegurando un ajuste perfecto y un rendimiento superior en cada proceso.
  `,

  paper: `
    Las cuchillas industriales para la industria del papel están diseñadas para realizar cortes precisos y limpios en distintos tipos de papel, cartón y derivados. Se fabrican en diversas formas y tamaños, incluyendo cuchillas circulares, rectas, dentadas y de disco, adaptándose a equipos de corte y rebobinado.

    Gracias a su fabricación en aceros de alta dureza y tratamientos especializados, estas cuchillas garantizan una larga vida útil y un desgaste mínimo, incluso en procesos de alta velocidad. Se utilizan en aplicaciones como corte de bobinas, procesamiento de papel reciclado, fabricación de etiquetas y embalajes, asegurando máxima eficiencia y calidad en cada etapa de producción.

    En Servicuchillas, diseñamos y fabricamos cuchillas a medida, optimizando el rendimiento de la maquinaria y garantizando cortes precisos para una producción sin interrupciones.
  `,

  wood: `
    Las cuchillas industriales para la industria de la madera están diseñadas para garantizar cortes precisos y eficientes en diferentes tipos de madera, desde tablones macizos hasta tableros procesados como MDF y aglomerados. Se fabrican en diversas formas y tamaños, incluyendo cuchillas rectas, circulares, dentadas y perfiladas, adaptándose a sierras, cepilladoras, moldureras y trituradoras.

    Elaboradas con aceros de alta resistencia y tratamientos térmicos especializados, estas cuchillas ofrecen durabilidad y un excelente desempeño en procesos de alto impacto. Son fundamentales en aplicaciones como el aserrado, la fabricación de muebles, la carpintería industrial y el procesamiento de láminas y paneles.

    En Servicuchillas, desarrollamos cuchillas a medida para optimizar la eficiencia de cada proceso, asegurando cortes limpios, reduciendo el desperdicio de material y prolongando la vida útil de la maquinaria.
  `,

  rubber: `
    Las cuchillas para la industria del caucho están diseñadas para realizar cortes precisos y limpios en materiales de alta elasticidad y resistencia, como caucho natural, sintético y compuestos especiales utilizados en la fabricación de neumáticos, cintas transportadoras, sellos y otros productos industriales.

    Disponibles en diversas formas y tamaños, incluyen cuchillas rectas, circulares, dentadas y biseladas, adaptadas a procesos de corte y laminado. Se fabrican con aceros de alta dureza y aleaciones especiales para resistir la fricción y el desgaste generados por la elasticidad del caucho.

    En Servicuchillas, diseñamos y fabricamos cuchillas personalizadas que optimizan la producción, reducen el desperdicio y garantizan un desempeño eficiente en cada aplicación, asegurando cortes consistentes y una mayor vida útil de la herramienta.
  `,

  metal: `
    Las cuchillas para la industria metalmecánica están diseñadas para realizar cortes precisos y eficientes en metales de diversas durezas, incluyendo acero, aluminio, cobre y otros materiales utilizados en la manufactura, estampado y transformación de piezas metálicas.

    Disponibles en una variedad de formas y tamaños, estas cuchillas incluyen modelos rectos, circulares, dentados y segmentados, adaptados a procesos como corte en frío, cizallado, troquelado y perfilado. Se fabrican en aceros de alta aleación y materiales tratados térmicamente para garantizar máxima resistencia al desgaste, impacto y temperaturas elevadas.

    En Servicuchillas, ofrecemos soluciones personalizadas que mejoran la productividad y la precisión en los procesos metalmecánicos, optimizando la vida útil de las herramientas y asegurando cortes limpios y consistentes para cada aplicación.
  `,

  food: ` 
    Las cuchillas para la industria de alimentos están diseñadas para garantizar cortes precisos, higiénicos y eficientes en una amplia variedad de productos, como carnes, embutidos, pan, frutas, vegetales y alimentos procesados. Su fabricación en acero inoxidable de grado alimenticio asegura resistencia a la corrosión y cumplimiento de normativas sanitarias.

    Estas cuchillas se presentan en diferentes formas y tamaños, incluyendo modelos rectos, circulares, serrados y perforados, adaptados a máquinas rebanadoras, picadoras, troqueladoras y equipos de procesamiento automatizado. Su diseño optimiza la eficiencia del corte, minimiza el desperdicio y mantiene la calidad del producto final.

    En Servicuchillas, ofrecemos soluciones especializadas para la industria alimentaria, garantizando herramientas duraderas, de alto rendimiento y con un acabado que cumple los más altos estándares de higiene y seguridad.
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
