import { Helpers } from '@/plugins/helpers';

declare module 'vue/types/vue' {
  interface Vue {
    readonly $helpers: Helpers;
  }
}
