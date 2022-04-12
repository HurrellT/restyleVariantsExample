import {createTheme} from '@shopify/restyle';
import messageVariants from './Message/Message';

const base = createTheme({
  colors: {
    error: '#ed1c24',
  },
  spacing: {
    negative_s: -20, // Only use it in VERY SPECIFIC cases
    negative_mini_l: -14, // Only use it in VERY SPECIFIC cases
    negative_mini_xs: -8, // Only use it in VERY SPECIFIC cases
    zero: 0,
    micro_xxs: 0.25,
    micro_xs: 0.5,
    micro_s: 1,
    micro_m: 2,
    micro_l: 4,
    mini_xxs: 6,
    mini_xs: 8,
    mini_s: 10,
    mini_m: 12,
    mini_l: 14,
    xxs: 16,
    xs: 18,
    s: 20,
    m: 22,
    l: 24,
    xl: 26,
    xxl: 28,
    mega_xxs: 30,
    mega_xs: 32,
    mega_s: 48,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  dimensions: {},
  ...messageVariants,
});

export type Theme = typeof base;
export default base;
