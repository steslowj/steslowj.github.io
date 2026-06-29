import type { Theme, ThemeColors, ThemeName } from '../types/themes'

export { type Theme, type ThemeName, type ThemeColors }

export const THEMES: Record<string, Theme> = {
  light_default: {
    isDark: false,
    background: '#f9fafb',
    foreground: '#111827',
    surface: '#f9fafb',
    border: '#e5e7eb',
    muted: '#6b7280',
    accent: '#3b82f6',
  },
  dark_default: {
    isDark: true,
    background: '#212737',
    foreground: '#eaedf3',
    surface: '#212737',
    border: '#ab4b08',
    muted: '#343f60',
    accent: '#ff6b01',
  },
  light_notepad: {
    isDark: false,
    background: '#fdf8e9',
    foreground: '#29231c',
    surface: '#fdf8e9',
    border: '#eaddc6',
    muted: '#736658',
    accent: '#b84c30',
  },
  dark_notepad: {
    isDark: true,
    background: '#241f1c',
    foreground: '#e6dfd3',
    surface: '#241f1c',
    border: '#3d342d',
    muted: '#8a7d71',
    accent: '#d97757',
  },
}
