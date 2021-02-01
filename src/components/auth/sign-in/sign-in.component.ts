import { Auth } from 'aws-amplify';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'SignInComponent'
})
export default class SignInComponent extends Vue {
  private email: string = '';
  private password: string = '';
  private isValid: boolean = true;
  private authResultError: string = '';
  private redirectUrl: string = '';
  
  private get validationRules() {
    return this.$helpers.validation.getRules();
  }

  private async signIn() {
    try {
      if ((this.$refs.form as any).validate()) {
        await Auth.signIn(this.email, this.password);

        const url = this.redirectUrl || '/';        
        this.$router.push(url);
      }
    } catch (err) {
      this.authResultError = err.message;
    }
  }

  private created() {
    this.redirectUrl = this.$route.query.redirect as string;
  }
}
