import { ref, watch, onMounted } from 'vue';

export type Theme = 'dark' | 'light';

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('ofgj_theme') as Theme | null;
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
  }
  return 'dark';
};

const currentTheme = ref<Theme>(getInitialTheme());

function applyTheme(theme: Theme) {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('ofgj_theme', theme);
  }
}

// Apply on initial script execution
if (typeof window !== 'undefined') {
  applyTheme(currentTheme.value);
}

export function useTheme() {
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark';
  };

  const setTheme = (theme: Theme) => {
    currentTheme.value = theme;
  };

  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme);
  }, { immediate: true });

  onMounted(() => {
    applyTheme(currentTheme.value);
  });

  return {
    theme: currentTheme,
    toggleTheme,
    setTheme
  };
}

