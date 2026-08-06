<template>
  <section id="app" class="py-20 sm:py-28 bg-[#e4ebf5] dark:bg-[#080d21] text-slate-900 dark:text-white relative overflow-hidden transition-colors border-y border-slate-300/80 dark:border-slate-800">
    <!-- Ambient glowing backgrounds -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-ofgj-emerald/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-ofgj-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-white text-ofgj-emerald border border-slate-300 shadow-sm dark:bg-ofgj-emerald/20 dark:text-ofgj-emerald dark:border-ofgj-emerald/30">
          <Smartphone class="w-4 h-4 text-ofgj-emerald" />
          <span>{{ t.appShowcase.tag }}</span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          {{ t.appShowcase.title }}
        </h2>

        <p class="text-base sm:text-lg text-slate-700 dark:text-ofgj-slate leading-relaxed">
          {{ t.appShowcase.subtitle }}
        </p>
      </div>

      <!-- Main Banner/Card showcasing App & Repo -->
      <div 
        class="relative rounded-3xl p-8 sm:p-12 bg-white text-slate-900 border-2 border-ofgj-emerald/40 shadow-xl dark:bg-gradient-to-br dark:from-[#101838] dark:via-[#162146] dark:to-[#0c122b] dark:text-white dark:border-ofgj-emerald/40 dark:shadow-2xl transition-colors duration-300 overflow-hidden text-left"
      >
        <!-- Background Grid Pattern Accent -->
        <div class="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] dark:bg-[radial-gradient(#39d07e_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <!-- Left Info & CTA -->
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold bg-ofgj-emerald/10 text-emerald-800 border border-emerald-300 dark:bg-ofgj-emerald/20 dark:text-ofgj-emerald dark:border-ofgj-emerald/30">
              <Zap class="w-3.5 h-3.5 text-ofgj-emerald" />
              <span>{{ t.appShowcase.badge }}</span>
            </div>

            <h3 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-snug">
              {{ t.appShowcase.ctaCardTitle }}
            </h3>

            <p class="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ t.appShowcase.ctaCardDesc }}
            </p>

            <div class="pt-2 space-y-4">
              <div class="flex flex-wrap items-center gap-3">
                <!-- Primary Action Button: Web App -->
                <a 
                  :href="t.appShowcase.appUrl || 'https://app.ourfirstglobaljob.org'"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-6 py-3.5 rounded-2xl font-black text-sm text-ofgj-navy bg-ofgj-emerald hover:bg-emerald-400 transition-all shadow-lg shadow-ofgj-emerald/25 flex items-center justify-center gap-2 transform hover:scale-105 shrink-0"
                >
                  <span>{{ t.appShowcase.ctaButton }}</span>
                  <ExternalLink class="w-4 h-4" />
                </a>

                <!-- Secondary Action Button: GitHub Repo -->
                <a 
                  :href="t.appShowcase.repoUrl || 'https://github.com/ourfirstglobaljob'"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-5 py-3.5 rounded-2xl font-bold text-sm text-slate-800 dark:text-slate-100 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all flex items-center justify-center gap-2.5 shrink-0 shadow-sm"
                >
                  <Github class="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span>{{ t.appShowcase.repoButton }}</span>
                  <span class="text-[10px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    {{ t.appShowcase.repoTag }}
                  </span>
                </a>
              </div>

              <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <ShieldCheck class="w-4 h-4 text-ofgj-azure dark:text-ofgj-cyan shrink-0" />
                <span>{{ t.appShowcase.clickToDirect }}</span>
              </div>
            </div>
          </div>

          <!-- Right Interactive Mockup / Preview Box of App Features -->
          <div class="lg:col-span-5 relative">
            <div class="rounded-2xl p-6 bg-slate-100/90 border border-slate-300 shadow-inner space-y-3 dark:bg-[#080d21] dark:border-ofgj-azure/40 group-hover:border-ofgj-emerald/60 transition-colors">
              <!-- Top bar mockup simulation -->
              <div class="flex items-center justify-between pb-3 border-b border-slate-300 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <div class="flex items-center gap-2">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span class="ml-2 text-[10px] text-slate-600 dark:text-ofgj-slate">app.ourfirstglobaljob.org</span>
                </div>
                <ExternalLink class="w-3.5 h-3.5 text-ofgj-emerald" />
              </div>

              <!-- Mockup List Items showcasing the 4 requested app pillars -->
              <div class="space-y-2.5 pt-1">
                <!-- 1. Agenda & Aulas -->
                <div class="p-2.5 rounded-xl bg-white border border-slate-300/80 dark:bg-[#121b3d] dark:border-ofgj-azure/30 flex items-center justify-between shadow-sm dark:shadow-none">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-ofgj-emerald/20 text-ofgj-emerald flex items-center justify-center font-bold text-xs shrink-0">
                      📅
                    </div>
                    <div>
                      <div class="text-xs font-bold text-slate-900 dark:text-white">{{ t.appShowcase.mockup.item1Title }}</div>
                      <div class="text-[10px] text-slate-600 dark:text-ofgj-slate">{{ t.appShowcase.mockup.item1Sub }}</div>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300">
                    {{ t.appShowcase.mockup.item1Badge }}
                  </span>
                </div>

                <!-- 2. Dúvidas com Professores -->
                <div class="p-2.5 rounded-xl bg-white border border-slate-300/80 dark:bg-[#121b3d] dark:border-ofgj-azure/30 flex items-center justify-between shadow-sm dark:shadow-none">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-ofgj-cyan/20 text-ofgj-azure dark:text-ofgj-cyan flex items-center justify-center font-bold text-xs shrink-0">
                      💬
                    </div>
                    <div>
                      <div class="text-xs font-bold text-slate-900 dark:text-white">{{ t.appShowcase.mockup.item2Title }}</div>
                      <div class="text-[10px] text-slate-600 dark:text-ofgj-slate">{{ t.appShowcase.mockup.item2Sub }}</div>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-300">
                    {{ t.appShowcase.mockup.item2Badge }}
                  </span>
                </div>

                <!-- 3. Mini-cursos -->
                <div class="p-2.5 rounded-xl bg-white border border-slate-300/80 dark:bg-[#121b3d] dark:border-ofgj-azure/30 flex items-center justify-between shadow-sm dark:shadow-none">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0">
                      🎓
                    </div>
                    <div>
                      <div class="text-xs font-bold text-slate-900 dark:text-white">{{ t.appShowcase.mockup.item3Title }}</div>
                      <div class="text-[10px] text-slate-600 dark:text-ofgj-slate">{{ t.appShowcase.mockup.item3Sub }}</div>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-300">
                    {{ t.appShowcase.mockup.item3Badge }}
                  </span>
                </div>

                <!-- 4. Certificados Simbólicos -->
                <div class="p-2.5 rounded-xl bg-white border border-slate-300/80 dark:bg-[#121b3d] dark:border-ofgj-azure/30 flex items-center justify-between shadow-sm dark:shadow-none">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                      🏆
                    </div>
                    <div>
                      <div class="text-xs font-bold text-slate-900 dark:text-white">{{ t.appShowcase.mockup.item4Title }}</div>
                      <div class="text-[10px] text-slate-600 dark:text-ofgj-slate">{{ t.appShowcase.mockup.item4Sub }}</div>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300">
                    {{ t.appShowcase.mockup.item4Badge }}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- 4 Feature Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a 
          v-for="(feat, idx) in t.appShowcase.features" 
          :key="idx"
          :href="t.appShowcase.appUrl || 'https://app.ourfirstglobaljob.org'"
          target="_blank"
          rel="noopener noreferrer"
          class="block p-6 rounded-2xl bg-white border border-slate-300/80 hover:border-ofgj-emerald shadow-md hover:shadow-xl dark:bg-[#121b3d] dark:border-ofgj-azure/30 dark:hover:border-ofgj-emerald/60 transition-all duration-300 space-y-3 group hover:-translate-y-1"
        >
          <div class="w-10 h-10 rounded-xl bg-ofgj-emerald/10 text-ofgj-emerald flex items-center justify-center font-bold group-hover:bg-ofgj-emerald group-hover:text-ofgj-navy transition-colors">
            <component :is="getFeatureIcon(idx)" class="w-5 h-5" />
          </div>
          <h4 class="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-ofgj-emerald transition-colors flex items-center justify-between">
            <span>{{ feat.title }}</span>
            <ExternalLink class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-ofgj-emerald" />
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ feat.desc }}
          </p>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n';
import { 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  ExternalLink,
  Github,
  Calendar,
  MessageCircle,
  GraduationCap,
  Award
} from 'lucide-vue-next';

const { t } = useI18n();

const getFeatureIcon = (index: number) => {
  switch (index) {
    case 0: return Calendar;
    case 1: return MessageCircle;
    case 2: return GraduationCap;
    case 3: default: return Award;
  }
};
</script>
