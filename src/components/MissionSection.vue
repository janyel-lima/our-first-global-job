<template>
  <section id="mission" class="py-24 relative overflow-hidden bg-gradient-to-br from-[#e4ebf5] via-[#f0f4fa] to-[#e4ebf5] dark:from-[#0c122b] dark:via-[#121b3d] dark:to-[#0c122b] text-slate-900 dark:text-white border-y border-slate-300/80 dark:border-ofgj-azure/30 transition-colors duration-300">
    <!-- Glowing atmosphere -->
    <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-ofgj-emerald/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
      
      <!-- Logo Icon Badge -->
      <div class="inline-flex p-3 rounded-2xl bg-white border border-slate-300 shadow-lg dark:bg-[#162146] dark:border-ofgj-azure/30 animate-float">
        <LogoSvg variant="transparency" size="lg" :show-bg="false" :with-text="false" :with-brand-name="false" />
      </div>

      <div class="space-y-4">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-ofgj-emerald border border-slate-300 shadow-sm dark:bg-ofgj-emerald/20 dark:text-ofgj-emerald dark:border-ofgj-emerald/30">
          {{ t.mission.tag }}
        </span>
        
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
          {{ t.mission.title }}
        </h2>
      </div>

      <!-- Main Quote Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        
        <!-- Negative Promise Clear statement -->
        <div class="p-8 rounded-3xl bg-white border border-slate-300 shadow-xl space-y-4 relative overflow-hidden group hover:border-amber-400 transition-colors dark:bg-[#162146]/80 dark:border-slate-700/60">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
            ✕
          </div>
          <p class="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 leading-snug">
            "{{ t.mission.quote1 }}"
          </p>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            {{ t.mission.quote1Sub }}
          </p>
        </div>

        <!-- Positive Mission statement -->
        <div class="p-8 rounded-3xl bg-white border-2 border-ofgj-emerald/60 shadow-xl space-y-4 relative overflow-hidden group hover:border-ofgj-emerald transition-colors dark:bg-[#162146]/80 dark:border-ofgj-emerald/40">
          <div class="w-10 h-10 rounded-xl bg-ofgj-emerald/20 text-ofgj-emerald flex items-center justify-center font-bold">
            ✓
          </div>
          <p class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
            "{{ t.mission.quote2 }}"
          </p>
          <p class="text-sm text-slate-600 dark:text-ofgj-slate">
            {{ t.mission.quote2Sub }}
          </p>
        </div>

      </div>

      <!-- Welcome Banner Callout -->
      <div class="pt-6 space-y-6">
        <p class="text-lg sm:text-xl font-medium text-slate-700 dark:text-ofgj-slate max-w-2xl mx-auto">
          {{ t.mission.text }}
        </p>

        <!-- Big Motto Badge -->
        <div class="inline-block p-6 rounded-3xl bg-white/90 border border-slate-300/80 shadow-xl dark:bg-[#121b3d]/80 dark:bg-gradient-to-r dark:from-ofgj-azure/20 dark:via-ofgj-emerald/20 dark:to-ofgj-cyan/20 dark:border-ofgj-emerald/40 backdrop-blur-md">
          <div class="text-2xl sm:text-4xl font-black tracking-wide bg-gradient-to-r from-ofgj-azure via-ofgj-royal to-ofgj-emerald dark:from-ofgj-cyan dark:via-white dark:to-ofgj-emerald bg-clip-text text-transparent">
            {{ t.mission.motto }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n';
import LogoSvg from './LogoSvg.vue';

const { t } = useI18n();
</script>
