<template>
  <Teleport to="body">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn"
      @click.self="close"
    >
      <div class="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl border shadow-2xl bg-white border-slate-200 dark:bg-[#121b3d] dark:border-ofgj-azure/40 max-h-[85vh] flex flex-col transition-colors">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div class="flex items-center gap-3">
            <div class="p-2.5 rounded-2xl bg-ofgj-azure/10 text-ofgj-azure dark:bg-ofgj-azure/20 dark:text-ofgj-emerald">
              <ShieldCheck class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">
                {{ isPt ? 'Código de Conduta da Comunidade' : 'Community Code of Conduct' }}
              </h3>
              <p class="text-xs text-slate-500 dark:text-ofgj-slate">
                {{ isPt ? 'Diretrizes de Convivência, Respeito e Aprendizado' : 'Guidelines for Respectful & Supportive Learning' }}
              </p>
            </div>
          </div>

          <button 
            @click="close"
            class="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#162146] transition-colors cursor-pointer"
            :aria-label="isPt ? 'Fechar' : 'Close'"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Scrollable Content -->
        <div class="py-6 overflow-y-auto space-y-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
          
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-[#0c122b] border border-slate-200 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400">
            <strong class="text-slate-900 dark:text-white font-bold block mb-1">
              {{ isPt ? '🤝 Nosso Compromisso:' : '🤝 Our Commitment:' }}
            </strong>
            {{ isPt 
              ? 'O Our First Global Job é um espaço seguro e acolhedor para a troca de conhecimentos em tecnologia e a prática do inglês falado. Erros fazem parte do processo de aprendizado e são recebidos com incentivo.'
              : 'Our First Global Job is a safe and welcoming space for tech knowledge sharing and spoken English practice. Mistakes are a natural part of learning and are met with encouragement.' 
            }}
          </div>

          <!-- Guideline 1 -->
          <div class="space-y-1.5">
            <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="text-ofgj-azure dark:text-ofgj-emerald font-black">1.</span>
              {{ isPt ? 'Cordialidade e Inclusão' : 'Cordiality & Inclusivity' }}
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {{ isPt 
                ? 'Trate todos os membros com empatia, gentileza e respeito. Não toleramos discriminação por gênero, raça, orientação sexual, sotaque, nível de inglês, religião ou senioridade profissional.'
                : 'Treat all community members with empathy, kindness, and respect. Discrimination based on gender, race, sexual orientation, accent, English level, religion, or seniority is strictly unacceptable.'
              }}
            </p>
          </div>

          <!-- Guideline 2 -->
          <div class="space-y-1.5">
            <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="text-ofgj-azure dark:text-ofgj-emerald font-black">2.</span>
              {{ isPt ? 'Foco Profissional (Sem Política / Ideologias)' : 'Professional Focus (No Politics / Ideology)' }}
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {{ isPt 
                ? 'Nossos canais (WhatsApp, Telegram e reuniões ao vivo) são destinados ao estudo e desenvolvimento de carreira. É expressamente proibido discutir política partidária, religião, correntes ofensivas ou gerar debates ideológicos acalorados.'
                : 'Our channels (WhatsApp, Telegram, and live calls) are focused on learning and career growth. Discussing partisan politics, religion, chain messages, or heated ideological debates is strictly prohibited.'
              }}
            </p>
          </div>

          <!-- Guideline 3 -->
          <div class="space-y-1.5">
            <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="text-ofgj-azure dark:text-ofgj-emerald font-black">3.</span>
              {{ isPt ? 'Proibição de Spam e Vendas' : 'No Spam or Unsolicited Pitching' }}
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {{ isPt 
                ? 'Não envie mensagens privadas (DM) não solicitadas para membros, nem faça propaganda de serviços pagos, cursos ou autopromoção agressiva sem autorização prévia da moderação.'
                : 'Do not send unsolicited private messages (DMs) to members, nor promote paid courses, products, or aggressive self-promotion without explicit prior moderator approval.'
              }}
            </p>
          </div>

          <!-- Guideline 4 -->
          <div class="space-y-1.5">
            <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="text-ofgj-azure dark:text-ofgj-emerald font-black">4.</span>
              {{ isPt ? 'Respeito à Privacidade e Dados' : 'Respect for Privacy & Personal Data' }}
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {{ isPt 
                ? 'Não divulgue dados pessoais, números de telefone, e-mails ou prints de conversas privadas de outros membros sem o consentimento deles.'
                : 'Do not share personal information, phone numbers, email addresses, or screenshots of private conversations of other members without their explicit consent.'
              }}
            </p>
          </div>

          <!-- Guideline 5 -->
          <div class="space-y-1.5">
            <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="text-ofgj-azure dark:text-ofgj-emerald font-black">5.</span>
              {{ isPt ? 'Moderação e Contato' : 'Moderation & Reporting' }}
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {{ isPt 
                ? 'Em caso de comportamento inadequado ou desconforto nos canais, entre em contato imediatamente com a coordenação e equipe de moderação para resolução do caso.'
                : 'If you witness inappropriate behavior or feel uncomfortable in any channel, contact the organizers and moderation team immediately for resolution.'
              }}
            </p>
          </div>

        </div>

        <!-- Footer / Action -->
        <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end shrink-0">
          <button 
            @click="close"
            class="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-ofgj-azure hover:bg-blue-600 dark:text-ofgj-navy dark:bg-ofgj-emerald dark:hover:bg-emerald-400 transition-colors shadow-md cursor-pointer"
          >
            {{ isPt ? 'Entendido e De Acordo' : 'Understood & Agreed' }}
          </button>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '../composables/useI18n';
import { ShieldCheck, X } from 'lucide-vue-next';

defineProps<{ isOpen: boolean }>();
const emit = defineEmits(['close']);

const { language } = useI18n();
const isPt = computed(() => language.value === 'pt');

const close = () => {
  emit('close');
};
</script>
