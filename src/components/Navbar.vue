<template>
  <header class="sticky top-0 z-50 transition-all duration-300 border-b backdrop-blur-md bg-[#edf2f7]/90 border-slate-300/80 dark:bg-[#0c122b]/90 dark:border-ofgj-azure/20 shadow-sm dark:shadow-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 gap-2 lg:gap-4">
        <!-- Logo Brand -->
        <a href="#" class="flex items-center gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-ofgj-emerald rounded-lg p-1 shrink-0">
          <LogoSvg variant="header" size="md" :show-bg="true" :with-text="true" :with-brand-name="true" />
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center gap-3 xl:gap-6 whitespace-nowrap">
          <a href="#about" class="text-xs xl:text-sm font-semibold transition-colors text-slate-700 hover:text-ofgj-azure dark:text-ofgj-slate dark:hover:text-ofgj-emerald whitespace-nowrap shrink-0">
            {{ t.nav.about }}
          </a>
          <a href="#pillars" class="text-xs xl:text-sm font-semibold transition-colors text-slate-700 hover:text-ofgj-azure dark:text-ofgj-slate dark:hover:text-ofgj-emerald whitespace-nowrap shrink-0">
            {{ t.nav.pillars }}
          </a>
          <a href="#app" class="text-xs xl:text-sm font-semibold transition-colors text-slate-700 hover:text-ofgj-azure dark:text-ofgj-slate dark:hover:text-ofgj-emerald whitespace-nowrap shrink-0 flex items-center gap-1.5">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-ofgj-emerald opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-ofgj-emerald"></span>
            </span>
            {{ t.nav.app }}
          </a>
          <a href="#groups" class="text-xs xl:text-sm font-semibold transition-colors text-slate-700 hover:text-ofgj-azure dark:text-ofgj-slate dark:hover:text-ofgj-emerald whitespace-nowrap shrink-0">
            {{ t.nav.groups }}
          </a>
          <a href="#team" class="text-xs xl:text-sm font-semibold transition-colors text-slate-700 hover:text-ofgj-azure dark:text-ofgj-slate dark:hover:text-ofgj-emerald whitespace-nowrap shrink-0">
            {{ t.nav.team }}
          </a>
          <a href="#mission" class="text-xs xl:text-sm font-semibold transition-colors text-slate-700 hover:text-ofgj-azure dark:text-ofgj-slate dark:hover:text-ofgj-emerald whitespace-nowrap shrink-0">
            {{ t.nav.mission }}
          </a>
        </nav>

        <!-- Right Controls: Language, Theme, CTA -->
        <div class="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          <!-- Language Selector -->
          <button 
            @click="toggleLanguage" 
            class="px-2.5 xl:px-3 py-1.5 rounded-full text-xs font-bold transition-all border flex items-center gap-1.5 bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-sm dark:bg-[#162146] dark:hover:bg-[#1e2d5c] dark:border-ofgj-azure/40 dark:text-ofgj-slate dark:shadow-none shrink-0"
            title="Alternar idioma / Switch language"
          >
            <Globe class="w-3.5 h-3.5 text-ofgj-cyan shrink-0" />
            <span class="whitespace-nowrap">{{ lang === 'pt' ? 'PT 🇧🇷' : 'EN 🇺🇸' }}</span>
          </button>

          <!-- Theme Selector -->
          <button 
            @click="toggleTheme" 
            class="p-2 rounded-full transition-all border bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-sm dark:bg-[#162146] dark:hover:bg-[#1e2d5c] dark:border-ofgj-azure/40 dark:text-ofgj-slate dark:shadow-none shrink-0"
            :title="theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'"
          >
            <Sun v-if="theme === 'dark'" class="w-4 h-4 text-amber-400 shrink-0" />
            <Moon v-else class="w-4 h-4 text-ofgj-royal shrink-0" />
          </button>

          <!-- CTA Button -->
          <button 
            @click="$emit('open-join')"
            class="px-3 xl:px-4 py-2.5 rounded-xl font-bold text-xs xl:text-sm text-ofgj-navy bg-ofgj-emerald hover:bg-emerald-400 transition-all transform hover:-translate-y-0.5 shadow-md shadow-ofgj-emerald/20 flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>{{ t.nav.join }}</span>
          </button>
        </div>

        <!-- Mobile & Tablet Menu Button (shown on < lg screens) -->
        <div class="flex lg:hidden items-center gap-2 shrink-0">
          <button 
            @click="toggleLanguage" 
            class="px-2.5 py-1 rounded-full text-xs font-bold border flex items-center gap-1 bg-white border-slate-300 text-slate-800 dark:bg-[#162146] dark:text-ofgj-slate dark:border-ofgj-azure/40"
          >
            <span>{{ lang === 'pt' ? 'PT' : 'EN' }}</span>
          </button>

          <button 
            @click="toggleTheme" 
            class="p-2 rounded-full border bg-white border-slate-300 text-slate-800 dark:bg-[#162146] dark:text-ofgj-slate dark:border-ofgj-azure/40"
          >
            <Sun v-if="theme === 'dark'" class="w-4 h-4 text-amber-400" />
            <Moon v-else class="w-4 h-4 text-ofgj-royal" />
          </button>

          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="p-2 rounded-lg text-slate-700 dark:text-ofgj-slate hover:bg-slate-200/60 dark:hover:bg-[#162146]"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="mobileMenuOpen" class="lg:hidden border-b border-slate-300 dark:border-ofgj-azure/30 bg-[#edf2f7] dark:bg-[#0c122b] px-4 pt-2 pb-6 space-y-3">
      <a 
        v-for="link in mobileLinks" 
        :key="link.href" 
        :href="link.href" 
        @click="mobileMenuOpen = false"
        class="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 dark:text-ofgj-slate hover:bg-white dark:hover:bg-[#162146]"
      >
        {{ link.label }}
      </a>
      <div class="pt-2">
        <button 
          @click="mobileMenuOpen = false; $emit('open-join')" 
          class="w-full py-3 rounded-xl font-bold text-center text-ofgj-navy bg-ofgj-emerald hover:bg-emerald-400 transition-all shadow-md"
        >
          {{ t.nav.join }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from '../composables/useI18n';
import { useTheme } from '../composables/useTheme';
import LogoSvg from './LogoSvg.vue';
import { Globe, Sun, Moon, Menu, X } from 'lucide-vue-next';

defineEmits(['open-join']);

const { lang, t, toggleLanguage } = useI18n();
const { theme, toggleTheme } = useTheme();
const mobileMenuOpen = ref(false);

const mobileLinks = computed(() => [
  { href: '#about', label: t.value.nav.about },
  { href: '#pillars', label: t.value.nav.pillars },
  { href: '#app', label: t.value.nav.app },
  { href: '#groups', label: t.value.nav.groups },
  { href: '#team', label: t.value.nav.team },
  { href: '#mission', label: t.value.nav.mission },
]);
</script>
