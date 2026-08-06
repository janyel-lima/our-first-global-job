<template>
  <section id="groups" class="py-20 md:py-28 relative overflow-hidden bg-[#f0f4f9] dark:bg-[#080d21] text-slate-900 dark:text-white transition-colors duration-300 border-t border-b border-slate-300/80 dark:border-ofgj-azure/20">
    <!-- Ambient Background Glows -->
    <div class="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-ofgj-emerald/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-ofgj-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border tracking-wide uppercase bg-white text-emerald-800 border-emerald-300 shadow-sm dark:bg-ofgj-emerald/10 dark:text-ofgj-emerald dark:border-ofgj-emerald/30">
          <Users class="w-3.5 h-3.5 text-ofgj-emerald" />
          <span>{{ t.groups.tag }}</span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {{ t.groups.title }}
        </h2>

        <p class="text-base sm:text-lg text-slate-700 dark:text-ofgj-slate leading-relaxed">
          {{ t.groups.subtitle }}
        </p>
      </div>

      <!-- Group Cards Grid (WhatsApp & Telegram Only) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        <!-- WhatsApp Card -->
        <div class="relative group rounded-3xl p-8 transition-all duration-300 border bg-white border-slate-300/80 shadow-xl hover:shadow-2xl hover:-translate-y-1 dark:bg-[#101838] dark:border-ofgj-emerald/30 dark:hover:border-ofgj-emerald flex flex-col justify-between">
          <div class="space-y-6">
            <!-- Icon & Badge Header -->
            <div class="flex items-center justify-between">
              <div class="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-inner">
                <WhatsappIcon className="w-8 h-8 text-emerald-500" />
              </div>
              <span class="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
                {{ t.groups.freeBadge }}
              </span>
            </div>

            <!-- Title & Description -->
            <div>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                {{ t.groups.whatsappTitle }}
                <span class="text-xs px-2.5 py-0.5 rounded-md bg-emerald-600 text-white font-extrabold">
                  {{ t.groups.whatsappBadge }}
                </span>
              </h3>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ t.groups.whatsappDesc }}
              </p>
            </div>

            <!-- Feature Checklist -->
            <ul class="space-y-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
              <li v-for="(feat, idx) in t.groups.whatsappFeatures" :key="idx" class="flex items-center gap-2">
                <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <!-- Card Actions -->
          <div class="mt-8 pt-4 space-y-3">
            <button 
              @click="handleJoinGroup('whatsapp')"
              class="w-full py-3.5 px-5 rounded-2xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 group-hover:scale-[1.02] cursor-pointer"
            >
              <WhatsappIcon className="w-5 h-5" />
              <span>{{ t.groups.whatsappBtn }}</span>
              <ExternalLink class="w-4 h-4 opacity-75" />
            </button>

            <button 
              @click="copyInviteLink('https://chat.whatsapp.com/our-first-global-job', 'whatsapp')"
              class="w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/60 cursor-pointer"
            >
              <Copy class="w-3.5 h-3.5" />
              <span>{{ copiedGroup === 'whatsapp' ? t.groups.copied : t.groups.copyLink }}</span>
            </button>
          </div>
        </div>

        <!-- Telegram Card -->
        <div class="relative group rounded-3xl p-8 transition-all duration-300 border bg-white border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 dark:bg-[#101838] dark:border-ofgj-cyan/30 dark:hover:border-ofgj-cyan flex flex-col justify-between">
          <div class="space-y-6">
            <!-- Icon & Badge Header -->
            <div class="flex items-center justify-between">
              <div class="w-14 h-14 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shadow-inner">
                <TelegramIcon className="w-8 h-8 text-cyan-500" />
              </div>
              <span class="text-xs font-bold px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30">
                {{ t.groups.freeBadge }}
              </span>
            </div>

            <!-- Title & Description -->
            <div>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                {{ t.groups.telegramTitle }}
                <span class="text-xs px-2.5 py-0.5 rounded-md bg-cyan-600 text-white font-extrabold">
                  {{ t.groups.telegramBadge }}
                </span>
              </h3>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ t.groups.telegramDesc }}
              </p>
            </div>

            <!-- Feature Checklist -->
            <ul class="space-y-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
              <li v-for="(feat, idx) in t.groups.telegramFeatures" :key="idx" class="flex items-center gap-2">
                <CheckCircle2 class="w-4 h-4 text-cyan-500 shrink-0" />
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <!-- Card Actions -->
          <div class="mt-8 pt-4 space-y-3">
            <button 
              @click="handleJoinGroup('telegram')"
              class="w-full py-3.5 px-5 rounded-2xl font-bold text-sm text-white bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 transition-all shadow-lg shadow-cyan-600/20 flex items-center justify-center gap-2 group-hover:scale-[1.02] cursor-pointer"
            >
              <TelegramIcon className="w-5 h-5" />
              <span>{{ t.groups.telegramBtn }}</span>
              <ExternalLink class="w-4 h-4 opacity-75" />
            </button>

            <button 
              @click="copyInviteLink('https://t.me/ourfirstglobaljob', 'telegram')"
              class="w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/60 cursor-pointer"
            >
              <Copy class="w-3.5 h-3.5" />
              <span>{{ copiedGroup === 'telegram' ? t.groups.copied : t.groups.copyLink }}</span>
            </button>
          </div>
        </div>

      </div>

      <!-- Trust Note Footer -->
      <div class="mt-12 p-6 rounded-2xl border bg-white/70 dark:bg-[#121a3b]/80 border-slate-200 dark:border-ofgj-azure/30 text-center max-w-2xl mx-auto backdrop-blur-sm">
        <p class="text-xs sm:text-sm font-medium text-slate-600 dark:text-ofgj-slate flex items-center justify-center gap-2">
          <ShieldCheck class="w-5 h-5 text-ofgj-emerald shrink-0" />
          <span>{{ t.groups.trustNote }}</span>
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from '../composables/useI18n';
import WhatsappIcon from './WhatsappIcon.vue';
import TelegramIcon from './TelegramIcon.vue';
import { Users, CheckCircle2, ExternalLink, Copy, ShieldCheck } from 'lucide-vue-next';

const emit = defineEmits(['open-join']);
const { t } = useI18n();

const copiedGroup = ref<string | null>(null);

const groupLinks: Record<string, string> = {
  whatsapp: 'https://chat.whatsapp.com/our-first-global-job',
  telegram: 'https://t.me/ourfirstglobaljob'
};

const handleJoinGroup = (groupType: string) => {
  const link = groupLinks[groupType];
  if (link) {
    emit('open-join');
  }
};

const copyInviteLink = async (link: string, groupType: string) => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(link);
      copiedGroup.value = groupType;
      setTimeout(() => {
        copiedGroup.value = null;
      }, 2500);
    }
  } catch (e) {
    console.error('Failed to copy', e);
  }
};
</script>
