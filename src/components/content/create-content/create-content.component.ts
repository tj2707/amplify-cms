import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import ContentComponent from '@/components/content/_content';
import { ContentItem } from '@/components/content/_domain';

@Component({
  name: 'CreateContentComponent',
  components: {
    contentItem: ContentComponent
  }
})
export default class CreateContentComponent extends Vue {

  @Action private addContent: (item: ContentItem) => Promise<void>;

  private contentItem: ContentItem = new ContentItem();
  private isValid: boolean = true;

  private async save() {
    if ((this.$refs.form as any).validate()) {
      await this.addContent(this.contentItem);
  
      this.$router.push(`/content`);
    }
  }
}
