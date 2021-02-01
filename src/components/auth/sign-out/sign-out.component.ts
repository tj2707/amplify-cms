import { Auth } from 'aws-amplify';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component({
  name: 'SignOutComponent'
})
export default class SignOutComponent extends Vue {

  private showButton: boolean = false;

  @Action private syncAuth: () => Promise<void>;
  @Getter private isLoggedIn: boolean;

  private async signOut() {
    try {
      await Auth.signOut();
      this.$router.push('/');
    } catch (err) {
      console.log('error signing out: ', err);
    }
  }

  private async fetchData() {
    await this.syncAuth();
  }

  private created() {
    this.fetchData();
  }
}
