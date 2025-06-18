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

// Common component styles using design tokens
export const componentStyles = {
  container: {
    padding: spacing.xl,
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: colors.background.neutral,
  },
  
  section: {
    marginBottom: spacing.xxxl,
  },
  
  card: {
    backgroundColor: token('color.background.input', '#FFFFFF'),
    border: `1px solid ${colors.border.default}`,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: colors.elevation.raised,
  },
  
  tipBox: {
    backgroundColor: colors.background.subtle,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    border: `1px solid ${colors.border.default}`,
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  },
  
  centerContent: {
    textAlign: 'center',
    marginBottom: spacing.xxxl,
  },
};