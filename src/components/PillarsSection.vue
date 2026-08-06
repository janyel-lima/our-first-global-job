<template>
  <section id="pillars" class="py-20 bg-[#f0f4f9] dark:bg-[#0c122b] transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Title -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-ofgj-emerald border border-slate-300 shadow-sm dark:bg-ofgj-emerald/10 dark:text-ofgj-emerald dark:border-ofgj-emerald/20">
          {{ t.pillars.tag }}
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t.pillars.title }}
        </h2>
        <p class="text-base sm:text-lg text-slate-700 dark:text-ofgj-slate">
          {{ t.pillars.subtitle }}
        </p>
      </div>

      <!-- 5 Pillars Bento Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        
        <div 
          v-for="(item, index) in t.pillars.items" 
          :key="index"
          class="p-8 rounded-3xl border transition-all duration-300 shadow-md hover:shadow-xl bg-white border-slate-300/80 dark:bg-[#121b3d] dark:border-ofgj-azure/30 flex flex-col justify-between group"
          :class="index === 0 ? 'lg:col-span-2' : ''"
        >
          <div>
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center bg-ofgj-royal/10 text-ofgj-azure dark:bg-ofgj-azure/20 dark:text-ofgj-cyan mb-6 group-hover:scale-110 transition-transform">
              <component :is="getIcon(item.icon)" class="w-6 h-6" />
            </div>

            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-ofgj-emerald transition-colors">
              {{ item.title }}
            </h3>
            
            <p class="text-base text-slate-600 dark:text-ofgj-slate leading-relaxed">
              {{ item.desc }}
            </p>
          </div>

          <div class="mt-8 flex items-center gap-2 text-xs font-bold text-ofgj-azure dark:text-ofgj-cyan">
            <span>{{ t.pillars.exploreAction }}</span>
            <ArrowUpRight class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n';
import { BookOpen, Briefcase, MessageSquare, Users, Sparkles, ArrowUpRight } from 'lucide-vue-next';

const { t } = useI18n();

const getIcon = (name: string) => {
  switch (name) {
    case 'BookOpen': return BookOpen;
    case 'Briefcase': return Briefcase;
    case 'MessageSquare': return MessageSquare;
    case 'Users': return Users;
    case 'Sparkles': return Sparkles;
    default: return BookOpen;
  }
};
</script>
