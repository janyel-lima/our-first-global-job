<template>
  <section class="relative overflow-hidden pt-8 pb-20 md:py-24 bg-gradient-to-b from-[#edf2f7] via-[#f4f7fb] to-[#e4ebf5] dark:from-[#0c122b] dark:via-[#101735] dark:to-[#0c122b] transition-colors duration-300">
    <!-- Ambient glowing backdrop circles -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ofgj-azure/10 dark:bg-ofgj-azure/15 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/3 right-10 w-[400px] h-[400px] bg-ofgj-emerald/10 dark:bg-ofgj-emerald/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Column: Copy & CTAs -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border tracking-wide shadow-sm bg-white text-emerald-800 border-emerald-300 dark:bg-ofgj-emerald/10 dark:text-ofgj-emerald dark:border-ofgj-emerald/30">
            <Sparkles class="w-3.5 h-3.5 text-ofgj-emerald animate-pulse" />
            <span>{{ t.hero.badge }}</span>
          </div>

          <!-- Main Title -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            <span class="block">Our First</span>
            <span class="bg-gradient-to-r from-ofgj-cyan via-ofgj-azure to-ofgj-emerald bg-clip-text text-transparent">
              Global Job
            </span>
          </h1>

          <!-- Punchy Hook Quote -->
          <p class="text-lg sm:text-xl font-medium text-slate-700 dark:text-ofgj-slate max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {{ t.hero.subtitle }}
          </p>

          <!-- Core Call to Actions -->
          <div class="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
            <!-- Entrar na Comunidade (Levar para os grupos de Whats e Telegram) -->
            <a 
              href="#comunidade"
              class="w-full sm:w-auto px-7 py-4 rounded-2xl font-extrabold text-base text-ofgj-navy bg-ofgj-emerald hover:bg-emerald-400 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-ofgj-emerald/25 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{{ t.hero.ctaPrimary }}</span>
              <ArrowRight class="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <!-- Quero ser Voluntário (Abre formulário de contato com a responsável) -->
            <button 
              @click="$emit('open-join')"
              class="w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-base transition-all border flex items-center justify-center gap-2 bg-white text-slate-800 border-slate-300 hover:bg-slate-50 shadow-md dark:bg-[#162146] dark:text-white dark:border-ofgj-azure/40 dark:hover:bg-[#1f2e63] transform hover:-translate-y-0.5 cursor-pointer"
            >
              <HeartHandshake class="w-5 h-5 text-ofgj-emerald dark:text-emerald-400" />
              <span>{{ t.hero.ctaVolunteer }}</span>
            </button>

            <!-- Conhecer o App Oficial -->
            <a 
              href="#app-section"
              class="w-full sm:w-auto px-5 py-4 rounded-2xl font-semibold text-sm sm:text-base text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Smartphone class="w-4 h-4 text-ofgj-cyan" />
              <span>{{ t.hero.ctaSecondary }}</span>
            </a>
          </div>

          <!-- Community Highlights Pills -->
          <div class="pt-6 border-t border-slate-300/80 dark:border-ofgj-azure/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
            <div>
              <div class="text-2xl font-extrabold text-ofgj-azure dark:text-ofgj-cyan">1,200+</div>
              <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ t.hero.stats.members }}</div>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-ofgj-emerald">R$ 0,00</div>
              <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ t.hero.stats.cost }}</div>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-ofgj-royal dark:text-ofgj-periwinkle">100%</div>
              <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ t.hero.stats.focus }}</div>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-ofgj-cyan">{{ t.hero.stats.weekly }}</div>
              <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ t.hero.stats.practice }}</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Graphic Card -->
        <div class="lg:col-span-5 relative flex justify-center">
          <!-- Glass Card containing Logo + Animated Badges -->
          <div class="relative w-full max-w-md p-8 rounded-3xl border shadow-2xl backdrop-blur-xl bg-white/95 border-slate-300/80 dark:bg-[#121b3d]/90 dark:border-ofgj-azure/40 group">
            
            <!-- Animated Floating Logo Icon -->
            <div class="flex justify-center my-6">
              <div class="relative p-4 rounded-3xl bg-slate-100/90 border border-slate-200/90 shadow-md dark:bg-ofgj-navy dark:border-ofgj-azure/30 dark:shadow-xl transition-colors duration-300 animate-float">
                <LogoSvg variant="transparency" size="xl" :show-bg="false" :with-text="true" :with-brand-name="false" />
              </div>
            </div>

            <!-- Unified Motto Header -->
            <div class="text-center space-y-3 mt-4 flex flex-col items-center">
              <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-ofgj-emerald/10 via-ofgj-azure/10 to-ofgj-emerald/10 dark:from-ofgj-emerald/15 dark:via-ofgj-azure/20 dark:to-ofgj-emerald/15 border border-ofgj-emerald/30 dark:border-ofgj-emerald/40 shadow-sm backdrop-blur-sm transition-all duration-300">
                <h3 class="text-base sm:text-lg font-black tracking-tight flex items-center gap-1.5 sm:gap-2">
                  <span class="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-ofgj-emerald dark:via-ofgj-cyan dark:to-emerald-300 bg-clip-text text-transparent">
                    Practice • Grow • Go Global
                  </span>
                  <span class="text-sm ml-0.5">🍀</span>
                </h3>
              </div>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-ofgj-slate max-w-xs mx-auto leading-relaxed">
                {{ t.hero.subtitle }}
              </p>
            </div>

            <!-- Floating Pill Badges -->
            <div class="absolute -top-4 -left-4 px-4 py-2 rounded-xl text-xs font-bold shadow-lg border bg-white border-slate-300 text-slate-800 dark:bg-[#162146] dark:border-ofgj-azure/50 dark:text-ofgj-slate flex items-center gap-2">
              <Globe class="w-4 h-4 text-ofgj-cyan animate-spin" style="animation-duration: 12s;" />
              <span>USD / EUR Remote</span>
            </div>

            <div class="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl text-xs font-bold shadow-lg border bg-white border-slate-300 text-slate-800 dark:bg-[#162146] dark:border-ofgj-emerald/50 dark:text-ofgj-emerald flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-ofgj-emerald" />
              <span>{{ t.hero.stats.cost }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n';
import LogoSvg from './LogoSvg.vue';
import { Sparkles, ArrowRight, Smartphone, Globe, CheckCircle2, HeartHandshake } from 'lucide-vue-next';

defineEmits(['open-join']);
const { t } = useI18n();
</script>
