import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
  }
  

  // Permitir el uso en TypographyOptions
  interface TypographyVariantsOptions {
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    caption3?: React.CSSProperties;
  }
}

// Agregar compatibilidad con el componente Typography
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
    caption3: true;
  }
}

declare module '@mui/system' {
  interface BreakpointOverrides {
    // Your custom breakpoints
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}