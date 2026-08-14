<template>
  <footer class="bg-[#e4ebf5] text-slate-800 border-t border-slate-300 dark:bg-slate-950 dark:text-white dark:border-slate-800 pt-16 pb-12 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-start text-center md:text-left">
        
        <!-- Column 1: Brand & Logo -->
        <div class="md:col-span-5 space-y-4 flex flex-col items-center md:items-start">
          <LogoSvg variant="footer" size="md" :show-bg="true" :with-text="true" :with-brand-name="true" />
          
          <p class="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
            {{ t.footer.description }}
          </p>

          <div class="pt-2 text-xs font-black tracking-widest text-ofgj-royal dark:text-ofgj-emerald uppercase">
            {{ t.footer.motto }}
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="md:col-span-3 space-y-3 flex flex-col items-center md:items-start">
          <h4 class="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-slate-300">
            {{ t.footer.links }}
          </h4>
          <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="#about" class="hover:text-ofgj-royal dark:hover:text-ofgj-emerald transition-colors">{{ t.nav.about }}</a></li>
            <li><a href="#pillars" class="hover:text-ofgj-royal dark:hover:text-ofgj-emerald transition-colors">{{ t.nav.pillars }}</a></li>
            <li><a href="#app-section" class="hover:text-ofgj-royal dark:hover:text-ofgj-emerald transition-colors">{{ t.nav.app }}</a></li>
            <li><a href="#groups" class="hover:text-ofgj-royal dark:hover:text-ofgj-emerald transition-colors">{{ t.nav.groups }}</a></li>
            <li><a href="#mission" class="hover:text-ofgj-royal dark:hover:text-ofgj-emerald transition-colors">{{ t.nav.mission }}</a></li>
            <li><a href="#team" class="hover:text-ofgj-royal dark:hover:text-ofgj-emerald transition-colors">{{ t.nav.team }}</a></li>
            <li><a href="#stories" class="hover:text-ofgj-royal dark:hover:text-ofgj-emerald transition-colors">{{ t.nav.stories }}</a></li>
          </ul>
        </div>

        <!-- Column 3: Volunteer & Community -->
        <div class="md:col-span-4 space-y-4 flex flex-col items-center md:items-start">
          <h4 class="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-slate-300">
            {{ t.footer.community }}
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
            {{ t.footer.volunteerHelp }}
          </p>

          <button 
            @click="$emit('open-join')"
            class="px-4 py-2.5 rounded-xl text-xs font-bold text-ofgj-navy bg-ofgj-emerald hover:bg-emerald-400 transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Heart class="w-4 h-4 text-red-600 fill-red-600" />
            <span>{{ t.footer.volunteerAction }}</span>
          </button>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-slate-300 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-500 text-center sm:text-left">
        <div>
          © {{ currentYear }} Our First Global Job. {{ t.footer.rights }}
        </div>

        <div class="flex items-center justify-center gap-4">
          <button @click.prevent="$emit('open-terms')" class="hover:text-slate-900 dark:hover:text-slate-300 transition-colors cursor-pointer bg-transparent border-none p-0 underline-offset-4 hover:underline">
            {{ t.footer.volunteerTerms }}
          </button>
          <span>•</span>
          <button @click.prevent="$emit('open-code-of-conduct')" class="hover:text-slate-900 dark:hover:text-slate-300 transition-colors cursor-pointer bg-transparent border-none p-0 underline-offset-4 hover:underline">
            {{ t.footer.codeOfConduct }}
          </button>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '../composables/useI18n';
import LogoSvg from './LogoSvg.vue';
import { Heart } from 'lucide-vue-next';

defineEmits(['open-join', 'open-terms', 'open-code-of-conduct']);
const { t } = useI18n();
const currentYear = computed(() => new Date().getFullYear());
</script>
