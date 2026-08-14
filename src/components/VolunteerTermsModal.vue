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
            <div class="p-2.5 rounded-2xl bg-ofgj-emerald/10 text-ofgj-emerald dark:bg-ofgj-emerald/20">
              <FileText class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">
                {{ isPt ? 'Termos de Voluntariado (Lei 9.608/98)' : 'Volunteer Terms & Agreement' }}
              </h3>
              <p class="text-xs text-slate-500 dark:text-ofgj-slate">
                {{ isPt ? 'Iniciativa Our First Global Job • Diretrizes de Participação' : 'Our First Global Job Initiative • Participation Guidelines' }}
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
              {{ isPt ? '⚖️ Enquadramento Legal:' : '⚖️ Legal Notice:' }}
            </strong>
            {{ isPt 
              ? 'Atividade voluntária prestada nos termos da Lei Brasileira nº 9.608, de 18 de fevereiro de 1998, com caráter estritamente comunitário, educacional e sem fins lucrativos.'
              : 'Volunteer activities are rendered under Brazilian Volunteer Law No. 9,608/1998, conducted purely for non-profit, educational, and community benefit.' 
            }}
          </div>

          <!-- Section 1 -->
          <div class="space-y-1.5">
            <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="text-ofgj-emerald font-black">1.</span>
              {{ isPt ? 'Ausência de Vínculo Empregatício e Não Remuneração' : 'Non-Paid Activity & No Employment Relationship' }}
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {{ isPt 
                ? 'O trabalho voluntário é prestado de forma espontânea, sem recebimento de qualquer remuneração, auxílio ou bolsa, não gerando qualquer vínculo empregatício, nem obrigações de natureza trabalhista, previdenciária ou afins entre o voluntário e a comunidade Our First Global Job ou seus fundadores.'
                : 'Volunteer service is performed spontaneously without remuneration, allowance, or financial compensation. It does not establish any employment relationship, labor, or social security obligations between the volunteer and the Our First Global Job community or its founders.'
              }}
            </p>
          </div>

          <!-- Section 2 -->
          <div class="space-y-1.5">
            <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="text-ofgj-emerald font-black">2.</span>
              {{ isPt ? 'Propósito do Voluntariado' : 'Purpose of Volunteering' }}
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {{ isPt 
                ? 'A atuação como facilitador ou mentor consiste em ajudar profissionais brasileiros a praticar conversação em inglês, simular entrevistas técnicas/comportamentais e trocar conhecimentos para auxiliá-los a conquistar vagas internacionais.'
                : 'As a conversation facilitator or mentor, your role consists of helping Brazilian tech professionals practice spoken English, simulate technical or behavioral interviews, and exchange career insights to achieve international remote roles.'
              }}
            </p>
          </div>

          <!-- Section 3 -->
          <div class="space-y-1.5">
            <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="text-ofgj-emerald font-black">3.</span>
              {{ isPt ? 'Flexibilidade e Autonomia' : 'Flexibility & Autonomy' }}
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {{ isPt 
                ? 'O voluntário estabelece livremente sua disponibilidade de horários e frequência de participação. Não há metas de horas obrigatórias nem imposição de horários fixos.'
                : 'Volunteers freely define their availability and frequency of participation. There are no mandatory hours or rigid schedules imposed.'
              }}
            </p>
          </div>

          <!-- Section 4 -->
          <div class="space-y-1.5">
            <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="text-ofgj-emerald font-black">4.</span>
              {{ isPt ? 'Propriedade Intelectual e Material Educacional' : 'Intellectual Property & Materials' }}
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {{ isPt 
                ? 'Quaisquer conteúdos ou roteiros criados e compartilhados voluntariamente na comunidade são mantidos sob licença aberta para benefício educacional de todos os participantes.'
                : 'Any study materials, flashcards, or interview guides created and shared voluntarily are kept under open educational resources for the mutual benefit of all community members.'
              }}
            </p>
          </div>

          <!-- Section 5 -->
          <div class="space-y-1.5">
            <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="text-ofgj-emerald font-black">5.</span>
              {{ isPt ? 'Desligamento Voluntário' : 'Voluntary Termination' }}
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {{ isPt 
                ? 'Tanto o voluntário quanto a coordenação da iniciativa podem encerrar as atividades voluntárias a qualquer momento, mediante simples aviso prévio verbal ou escrito, sem qualquer tipo de sanção ou penalidade.'
                : 'Either the volunteer or the project organizers may conclude volunteer activities at any time upon simple written or spoken notice, without penalty.'
              }}
            </p>
          </div>

        </div>

        <!-- Footer / Action -->
        <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end shrink-0">
          <button 
            @click="close"
            class="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-ofgj-navy bg-ofgj-emerald hover:bg-emerald-400 transition-colors shadow-md cursor-pointer"
          >
            {{ isPt ? 'Compreendi e Aceito' : 'I Understand & Agree' }}
          </button>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '../composables/useI18n';
import { FileText, X } from 'lucide-vue-next';

defineProps<{ isOpen: boolean }>();
const emit = defineEmits(['close']);

const { language } = useI18n();
const isPt = computed(() => language.value === 'pt');

const close = () => {
  emit('close');
};
</script>
