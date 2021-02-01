import Vue, { PluginObject } from 'vue';
import { VueConstructor } from 'vue/types/vue';
import { ValidationHelper } from '@/app-modules/helpers';

export interface Helpers {
  validation: ValidationHelper;
}

class Plugin implements PluginObject<any> {
  [key: string]: any;

  public install(vue: VueConstructor<Vue>, options?: any): void {
    Object.defineProperty(vue.prototype, '$helpers', {
      get(): Helpers {
        return {
          validation: new ValidationHelper(),
        };
      }
    });
  }
}

export default {
  init() {
    Vue.use(new Plugin());
  }
};
