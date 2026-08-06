<template>
  <Teleport to="body">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn"
      @click.self="close"
    >
      <div class="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl border shadow-2xl bg-white border-slate-200 dark:bg-[#121b3d] dark:border-ofgj-azure/40 max-h-[90vh] overflow-y-auto">
        
        <!-- Close Button -->
        <button 
          @click="close"
          class="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#162146] transition-colors cursor-pointer"
        >
          <X class="w-5 h-5" />
        </button>

        <!-- Form State -->
        <div v-if="!submitted" class="space-y-6">
          
          <!-- Header -->
          <div class="text-center space-y-2">
            <div class="inline-flex p-3 rounded-2xl bg-ofgj-emerald/10 text-ofgj-emerald mb-1">
              <Sparkles class="w-6 h-6" />
            </div>
            <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white">
              {{ t.modal.title }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-ofgj-slate">
              {{ t.modal.subtitle }}
            </p>
          </div>

          <!-- Type Selector (Member vs Volunteer) -->
          <div class="grid grid-cols-2 gap-3 p-1 rounded-2xl bg-slate-100 dark:bg-[#162146]">
            <button
              @click="joinType = 'member'"
              class="py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer"
              :class="joinType === 'member'
                ? 'bg-white text-ofgj-navy shadow dark:bg-ofgj-azure dark:text-white'
                : 'text-slate-600 dark:text-ofgj-slate hover:text-slate-900'"
            >
              {{ t.modal.typeMember }}
            </button>

            <button
              @click="joinType = 'volunteer'"
              class="py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer"
              :class="joinType === 'volunteer'
                ? 'bg-white text-ofgj-navy shadow dark:bg-ofgj-emerald dark:text-ofgj-navy'
                : 'text-slate-600 dark:text-ofgj-slate hover:text-slate-900'"
            >
              {{ t.modal.typeVolunteer }}
            </button>
          </div>

          <!-- Form Fields -->
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                {{ t.modal.nameLabel }} *
              </label>
              <input 
                v-model="form.name"
                type="text" 
                required
                :placeholder="t.modal.placeholders.name" 
                class="w-full px-4 py-3 rounded-xl border text-sm bg-slate-100/70 border-slate-300 focus:bg-white focus:ring-2 focus:ring-ofgj-azure outline-none text-slate-900 dark:bg-[#0c122b] dark:border-ofgj-azure/40 dark:text-white dark:focus:ring-ofgj-emerald"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                {{ t.modal.emailLabel }} *
              </label>
              <input 
                v-model="form.email"
                type="email" 
                required
                :placeholder="t.modal.placeholders.email" 
                class="w-full px-4 py-3 rounded-xl border text-sm bg-slate-100/70 border-slate-300 focus:bg-white focus:ring-2 focus:ring-ofgj-azure outline-none text-slate-900 dark:bg-[#0c122b] dark:border-ofgj-azure/40 dark:text-white dark:focus:ring-ofgj-emerald"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  {{ t.modal.roleLabel }}
                </label>
                <input 
                  v-model="form.role"
                  type="text" 
                  :placeholder="t.modal.placeholders.role" 
                  class="w-full px-4 py-3 rounded-xl border text-sm bg-slate-100/70 border-slate-300 focus:bg-white focus:ring-2 focus:ring-ofgj-azure outline-none text-slate-900 dark:bg-[#0c122b] dark:border-ofgj-azure/40 dark:text-white dark:focus:ring-ofgj-emerald"
                />
              </div>

              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  {{ t.modal.whatsappLabel }}
                </label>
                <input 
                  v-model="form.phone"
                  type="text" 
                  :placeholder="t.modal.placeholders.phone" 
                  class="w-full px-4 py-3 rounded-xl border text-sm bg-slate-100/70 border-slate-300 focus:bg-white focus:ring-2 focus:ring-ofgj-azure outline-none text-slate-900 dark:bg-[#0c122b] dark:border-ofgj-azure/40 dark:text-white dark:focus:ring-ofgj-emerald"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                {{ t.modal.englishLevelLabel }}
              </label>
              <select 
                v-model="form.englishLevel"
                class="w-full px-4 py-3 rounded-xl border text-sm bg-slate-100/70 border-slate-300 focus:bg-white focus:ring-2 focus:ring-ofgj-azure outline-none text-slate-900 dark:bg-[#0c122b] dark:border-ofgj-azure/40 dark:text-white dark:focus:ring-ofgj-emerald"
              >
                <option value="basic">{{ t.modal.levelBasic }}</option>
                <option value="intermediate">{{ t.modal.levelIntermediate }}</option>
                <option value="advanced">{{ t.modal.levelAdvanced }}</option>
              </select>
            </div>

            <button 
              type="submit"
              class="w-full py-4 rounded-xl font-extrabold text-base text-ofgj-navy bg-ofgj-emerald hover:bg-emerald-400 transition-all shadow-lg shadow-ofgj-emerald/25 flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <span>{{ t.modal.submit }}</span>
              <CheckCircle2 class="w-5 h-5" />
            </button>
          </form>
        </div>

        <!-- Success Celebration State -->
        <div v-else class="text-center space-y-6 py-6 animate-scaleUp">
          <div class="w-20 h-20 mx-auto rounded-full bg-ofgj-emerald/20 text-ofgj-emerald flex items-center justify-center text-4xl shadow-inner">
            🍀
          </div>

          <div class="space-y-2">
            <h3 class="text-2xl font-black text-slate-900 dark:text-white">
              {{ t.modal.successTitle }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-ofgj-slate max-w-md mx-auto">
              {{ t.modal.successDesc }}
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#0c122b] dark:border-ofgj-azure/40 space-y-3">
            <a 
              href="https://chat.whatsapp.com/our-first-global-job" 
              target="_blank" 
              rel="noopener"
              class="w-full py-4 rounded-xl font-extrabold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <WhatsappIcon className="w-5 h-5" />
              <span>{{ t.modal.groupButton }}</span>
            </a>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">
              {{ t.modal.nextLiveNotice }}
            </p>
          </div>

          <button 
            @click="close"
            class="text-xs font-bold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white underline cursor-pointer"
          >
            {{ t.modal.closeWindow }}
          </button>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useI18n } from '../composables/useI18n';
import confetti from 'canvas-confetti';
import WhatsappIcon from './WhatsappIcon.vue';
import { X, Sparkles, CheckCircle2 } from 'lucide-vue-next';

defineProps<{ isOpen: boolean }>();
const emit = defineEmits(['close']);

const { t } = useI18n();
const joinType = ref<'member' | 'volunteer'>('member');
const submitted = ref(false);

const form = reactive({
  name: '',
  email: '',
  role: '',
  phone: '',
  englishLevel: 'intermediate'
});

const close = () => {
  submitted.value = false;
  emit('close');
};

const handleSubmit = () => {
  submitted.value = true;
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
};
</script>
