// Atlaskit Design System Theme and Tokens
import { token } from '@atlaskit/tokens';

export const spacing = {
  xxs: token('space.025', '2px'),
  xs: token('space.050', '4px'),
  sm: token('space.100', '8px'),
  md: token('space.150', '12px'),
  lg: token('space.200', '16px'),
  xl: token('space.250', '20px'),
  xxl: token('space.300', '24px'),
  xxxl: token('space.400', '32px'),
};

export const colors = {
  background: {
    neutral: token('color.background.neutral', '#FAFBFC'),
    subtle: token('color.background.neutral.subtle', '#F4F5F7'),
    bold: token('color.background.neutral.bold', '#DFE1E6'),
  },
  text: {
    primary: token('color.text', '#172B4D'),
    secondary: token('color.text.subtle', '#6B778C'),
    disabled: token('color.text.disabled', '#A5ADBA'),
  },
  border: {
    default: token('color.border', '#DFE1E6'),
    focused: token('color.border.focused', '#4C9AFF'),
  },
  elevation: {
    surface: token('elevation.surface', 'none'),
    raised: token('elevation.surface.raised', '0px 1px 1px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)'),
    overlay: token('elevation.surface.overlay', '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)'),
  }
};

export const borderRadius = {
  sm: token('border.radius.050', '2px'),
  md: token('border.radius.100', '3px'),
  lg: token('border.radius.200', '6px'),
  xl: token('border.radius.300', '8px'),
};

export const typography = {
  heading: {
    xxlarge: {
      fontSize: token('font.size.500', '29px'),
      fontWeight: token('font.weight.medium', '500'),
      lineHeight: token('font.lineHeight.500', '32px'),
    },
    xlarge: {
      fontSize: token('font.size.400', '24px'),
      fontWeight: token('font.weight.medium', '500'),
      lineHeight: token('font.lineHeight.400', '28px'),
    },
    large: {
      fontSize: token('font.size.300', '20px'),
      fontWeight: token('font.weight.medium', '500'),
      lineHeight: token('font.lineHeight.300', '24px'),
    },
    medium: {
      fontSize: token('font.size.200', '16px'),
      fontWeight: token('font.weight.semibold', '600'),
      lineHeight: token('font.lineHeight.200', '20px'),
    },
    small: {
      fontSize: token('font.size.100', '14px'),
      fontWeight: token('font.weight.semibold', '600'),
      lineHeight: token('font.lineHeight.100', '16px'),
    },
  },
  body: {
    large: {
      fontSize: token('font.size.200', '16px'),
      fontWeight: token('font.weight.regular', '400'),
      lineHeight: token('font.lineHeight.200', '20px'),
    },
    medium: {
      fontSize: token('font.size.100', '14px'),
      fontWeight: token('font.weight.regular', '400'),
      lineHeight: token('font.lineHeight.100', '16px'),
    },
    small: {
      fontSize: token('font.size.075', '12px'),
      fontWeight: token('font.weight.regular', '400'),
      lineHeight: token('font.lineHeight.100', '16px'),
    },
  },
};

// Extended color palette for comprehensive theming
export const extendedColors = {
  ...colors,
  status: {
    success: token('color.background.success', '#E3FCEF'),
    successText: token('color.text.success', '#006644'),
    warning: token('color.background.warning', '#FFF4E6'),
    warningText: token('color.text.warning', '#974F0C'),
    danger: token('color.background.danger', '#FFEBE6'),
    dangerText: token('color.text.danger', '#BF2600'),
    info: token('color.background.information', '#DEEBFF'),
    infoText: token('color.text.information', '#0747A6'),
    discovery: token('color.background.discovery', '#EAE6FF'),
    discoveryText: token('color.text.discovery', '#5E4DB2'),
  },
  brand: {
    primary: token('color.background.brand.bold', '#0052CC'),
    primaryHover: token('color.background.brand.bold.hovered', '#0747A6'),
    secondary: token('color.background.neutral.subtle', '#F4F5F7'),
    accent: token('color.background.accent.blue.subtle', '#E9F2FF'),
  }
};

// Animation and transition utilities
export const animations = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
  },
  hover: {
    transform: 'translateY(-1px)',
    transition: 'all 200ms ease-in-out',
  },
  focus: {
    outline: `2px solid ${colors.border.focused}`,
    outlineOffset: '2px',
  }
};

// Common component styles using design tokens
export const componentStyles = {
  container: {
    padding: spacing.xl,
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: colors.background.neutral,
    minHeight: '100vh',
  },
  
  section: {
    marginBottom: spacing.xxxl,
  },
  
  card: {
    backgroundColor: token('color.background.input', '#FFFFFF'),
    border: `1px solid ${colors.border.default}`,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    boxShadow: colors.elevation.raised,
    transition: `box-shadow ${animations.duration.normal} ${animations.easeInOut}`,
    '&:hover': {
      boxShadow: colors.elevation.overlay,
    }
  },
  
  cardCompact: {
    backgroundColor: token('color.background.input', '#FFFFFF'),
    border: `1px solid ${colors.border.default}`,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    boxShadow: colors.elevation.surface,
  },
  
  tipBox: {
    backgroundColor: extendedColors.brand.accent,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    border: `1px solid ${extendedColors.brand.primary}`,
    borderLeft: `4px solid ${extendedColors.brand.primary}`,
  },
  
  successBox: {
    backgroundColor: extendedColors.status.success,
    color: extendedColors.status.successText,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    border: `1px solid ${extendedColors.status.successText}`,
  },
  
  warningBox: {
    backgroundColor: extendedColors.status.warning,
    color: extendedColors.status.warningText,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    border: `1px solid ${extendedColors.status.warningText}`,
  },
  
  flexRow: {
    display: 'flex',
    gap: spacing.md,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  
  grid: {
    display: 'grid',
    gap: spacing.lg,
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  },
  
  gridCompact: {
    display: 'grid',
    gap: spacing.md,
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },
  
  centerContent: {
    textAlign: 'center',
    marginBottom: spacing.xxxl,
  },
  
  // Interactive elements
  buttonGroup: {
    display: 'flex',
    gap: spacing.xs,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  
  formField: {
    marginBottom: spacing.lg,
  },
  
  // Layout utilities
  fullWidth: {
    width: '100%',
  },
  
  maxWidth: {
    maxWidth: '600px',
  },
  
  // Responsive breakpoints
  mobile: '@media (max-width: 768px)',
  tablet: '@media (max-width: 1024px)',
  desktop: '@media (min-width: 1025px)',
};

// Component-specific theme configurations
export const componentThemes = {
  button: {
    primary: {
      backgroundColor: extendedColors.brand.primary,
      color: 'white',
      '&:hover': {
        backgroundColor: extendedColors.brand.primaryHover,
      }
    },
    secondary: {
      backgroundColor: extendedColors.brand.secondary,
      color: colors.text.primary,
      border: `1px solid ${colors.border.default}`,
    }
  },
  
  table: {
    header: {
      backgroundColor: colors.background.subtle,
      fontWeight: typography.heading.small.fontWeight,
      borderBottom: `2px solid ${colors.border.default}`,
    },
    row: {
      borderBottom: `1px solid ${colors.background.subtle}`,
      '&:hover': {
        backgroundColor: colors.background.subtle,
      }
    }
  },
  
  modal: {
    overlay: {
      backgroundColor: 'rgba(9, 30, 66, 0.54)',
      backdropFilter: 'blur(4px)',
    },
    content: {
      backgroundColor: 'white',
      borderRadius: borderRadius.xl,
      boxShadow: colors.elevation.overlay,
      maxWidth: '90vw',
      maxHeight: '90vh',
    }
  }
};