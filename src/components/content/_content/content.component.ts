import { Component, Prop, Vue } from 'vue-property-decorator';
import { ContentItem } from '@/components/content/_domain';

@Component({
  name: 'ContentComponent'
})
export default class ContentComponent extends Vue {
  @Prop() public item: ContentItem;

  private get path(): string {
    return this.item.path;
  }
  
  private get validationRules() {
    return this.$helpers.validation.getRules();
  }
}
