import type { Metadata } from 'next';
import { ThemeProvider, CssBaseline } from '@mui/material';
import './globals.css';
import  theme  from '@/theme/theme';

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
