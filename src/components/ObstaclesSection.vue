<template>
  <section id="about" class="py-20 bg-[#e6ecf5] dark:bg-[#0c122b] border-y border-slate-300/80 dark:border-ofgj-azure/20 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-ofgj-royal border border-slate-300 shadow-sm dark:bg-ofgj-azure/20 dark:text-ofgj-cyan dark:border-transparent">
          {{ t.obstacles.tag }}
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t.obstacles.title }}
        </h2>
        <p class="text-base sm:text-lg text-slate-700 dark:text-ofgj-slate">
          {{ t.obstacles.subtitle }}
        </p>
      </div>

      <!-- 4 Obstacles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        <div 
          v-for="(card, index) in t.obstacles.cards" 
          :key="index"
          class="relative p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1.5 shadow-md hover:shadow-xl bg-white border-slate-300/80 dark:bg-[#121b3d] dark:border-ofgj-azure/30 flex flex-col justify-between group"
        >
          <!-- Top Tag with Index Number -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="p-3 rounded-xl bg-gradient-to-br" :class="card.color">
                <component :is="getIcon(card.icon)" class="w-6 h-6 text-ofgj-azure dark:text-ofgj-cyan" />
              </div>
              <span class="text-xs font-black tracking-widest text-slate-400 dark:text-slate-500">
                0{{ index + 1 }}
              </span>
            </div>

            <!-- Card Content -->
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-ofgj-azure dark:group-hover:text-ofgj-emerald transition-colors">
              {{ card.title }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-ofgj-slate leading-relaxed">
              {{ card.desc }}
            </p>
          </div>

          <!-- Bottom Solution Badge -->
          <div class="mt-6 pt-4 border-t border-slate-100 dark:border-ofgj-azure/20 flex items-center gap-2 text-xs font-semibold text-ofgj-emerald">
            <CheckCircle2 class="w-4 h-4 shrink-0" />
            <span>{{ t.obstacles.cardSolution }}</span>
          </div>
        </div>
      </div>

      <!-- Highlight Narrative Box -->
      <div class="mt-16 p-8 rounded-3xl border bg-white border-slate-300/90 shadow-xl dark:bg-[#101735] dark:bg-gradient-to-r dark:from-ofgj-navy dark:via-[#162146] dark:to-ofgj-navy dark:text-white dark:border-ofgj-azure/40 dark:shadow-2xl relative overflow-hidden transition-colors duration-300">
        <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-ofgj-emerald/10 rounded-full blur-2xl"></div>
        <div class="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <p class="text-xl sm:text-2xl font-bold italic tracking-wide text-slate-800 dark:text-ofgj-slate leading-relaxed">
            {{ t.obstacles.quote }}
          </p>
          <div class="pt-2 flex items-center justify-center gap-2 text-sm font-extrabold text-ofgj-royal dark:text-ofgj-emerald">
            <span>Our First Global Job</span>
            <span>🌏🍀</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n';
import { ShieldAlert, Compass, Clock, UserX, CheckCircle2 } from 'lucide-vue-next';

const { t } = useI18n();

const getIcon = (name: string) => {
  switch (name) {
    case 'ShieldAlert': return ShieldAlert;
    case 'Compass': return Compass;
    case 'Clock': return Clock;
    case 'UserX': return UserX;
    default: return ShieldAlert;
  }
};
</script>
