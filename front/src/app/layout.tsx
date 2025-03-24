import type { Metadata } from "next";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./globals.css";
import theme from "@/theme/theme";
import Navbar from "@/components/primary/layout/navbar/Navbar";
import Footer from "@/components/primary/layout/footer/Footer";

export const metadata: Metadata = {
  title: "SERVICUCHILLAS | Fabriación y Mantenimiento de Cuchillas Industriales",
  description:
    "Empresa especializada en la fabricación, mantenimiento y afilado de cuchillas industriales para las industrias del plástico, papel, madera, caucho, metal y alimentos.",
  keywords: [
    "servicuchillas",
    "afilado de cuchillas",
    "cuchillas industriales",
    "mantenimiento de cuchillas",
    "afilado profesional",
    "industria metalmecánica",
    "Industría del plástico",
    "industría del papel",
    "industría de la madera",
    "industría del caucho",
    "industría de alimentos"
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "SERVICUCHILLAS | Especialistas en Cuchillas Industriales",
    description:
      "Expertos en fabricación y mantenimiento de cuchillas industriales para múltiples sectores.",
    url: "https://www.servicuchillas.com",
    siteName: "SERVICUCHILLAS",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "SERVICUCHILLAS - Cuchillas Industriales",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
