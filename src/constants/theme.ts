import { Dimensions } from 'react-native';
import design from '../../Design.json';

const { width, height } = Dimensions.get('window');

const theme = {
  colors: {
    ...design.designSystem.colorPalette.primary,
    ...design.designSystem.colorPalette.accent,
    ...design.designSystem.colorPalette.neutral,
    ...design.designSystem.colorPalette.text,
    ...design.designSystem.colorPalette.semantic,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    full: 9999,
  },
  typography: {
    fontFamily: {
      primary: 'System', // Using system fonts for simplicity
      secondary: 'System',
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 32,
      '4xl': 40,
    },
    fontWeights: {
      regular: '400' as '400',
      medium: '500' as '500',
      semibold: '600' as '600',
      bold: '700' as '700',
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.04,
      shadowRadius: 8,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 16,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.12,
      shadowRadius: 32,
      elevation: 8,
    },
    colored: {
      shadowColor: design.designSystem.colorPalette.primary.brand,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 4,
    },
  },
  layout: {
    width,
    height,
  },
  patterns: design.designSystem.patterns,
  responsive: design.designSystem.responsive,
  accessibility: design.designSystem.accessibility,
  farmingDomain: design.designSystem.farmingDomain,
};

export default theme;
