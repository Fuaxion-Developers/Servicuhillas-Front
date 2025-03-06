import type { Metadata } from 'next';
import { ThemeProvider, CssBaseline } from '@mui/material';
import './globals.css';
import  theme  from '@/theme/theme';
import Navbar from '@/components/primary/layout/navbar/Navbar';
import Footer from '@/components/primary/layout/footer/Footer'

export const metadata: Metadata = {
  title: 'SERVICUCHILLAS',
  description:
    'Empresa especializada en la fabricación, mantenimiento y afilado de cuchillas industriales para las industrias del plástico, papel, madera, caucho, metal y alimentos.',
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
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
