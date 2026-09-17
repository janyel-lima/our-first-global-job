<template>
  <section id="faq" class="py-20 md:py-28 relative overflow-hidden bg-slate-100/70 dark:bg-[#070b1e] text-slate-900 dark:text-white transition-colors duration-300 border-t border-b border-slate-300/80 dark:border-ofgj-azure/20 scroll-mt-12">
    <!-- Ambient Background Accents -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ofgj-azure/10 dark:bg-ofgj-azure/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
      
      <!-- Section Header -->
      <div class="text-center space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border bg-white text-ofgj-emerald border-slate-300 shadow-sm dark:bg-ofgj-emerald/10 dark:text-ofgj-emerald dark:border-ofgj-emerald/30">
          <HelpCircle class="w-3.5 h-3.5 text-ofgj-emerald" />
          <span>{{ t.faq.tag }}</span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {{ t.faq.title }}
        </h2>

        <p class="text-base sm:text-lg text-slate-700 dark:text-ofgj-slate max-w-2xl mx-auto leading-relaxed">
          {{ t.faq.subtitle }}
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-4">
        <div 
          v-for="(item, idx) in t.faq.items" 
          :key="idx"
          class="rounded-2xl border transition-all duration-300 bg-white border-slate-300/80 shadow-md dark:bg-[#101838] dark:border-ofgj-azure/30 overflow-hidden"
          :class="{ 'ring-2 ring-ofgj-emerald/50 border-ofgj-emerald/60': openIndex === idx }"
        >
          <button
            @click="toggle(idx)"
            class="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none transition-colors hover:bg-slate-50 dark:hover:bg-[#141f47]"
            :aria-expanded="openIndex === idx"
          >
            <span class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
              {{ item.question }}
            </span>
            <div 
              class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
              :class="openIndex === idx ? 'bg-ofgj-emerald text-ofgj-navy rotate-180' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'"
            >
              <ChevronDown class="w-4 h-4" />
            </div>
          </button>

          <!-- Accordion Answer Body -->
          <div 
            v-show="openIndex === idx"
            class="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 space-y-3"
          >
            <p 
              v-for="(paragraph, pIdx) in item.answer.split('\n\n')" 
              :key="pIdx"
              class="leading-relaxed"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom help prompt -->
      <div class="text-center pt-4">
        <p class="text-sm text-slate-600 dark:text-slate-400">
          Ainda tem dúvidas? Fique à vontade para perguntar diretamente na nossa comunidade:
        </p>
        <div class="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a 
            href="#groups"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 transition-colors border border-emerald-300 dark:border-emerald-500/40"
          >
            <span>Ver grupos do WhatsApp e Telegram</span>
            <span>→</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from '../composables/useI18n';
import { HelpCircle, ChevronDown } from 'lucide-vue-next';

const { t } = useI18n();
const openIndex = ref<number | null>(0); // First item open by default

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>
