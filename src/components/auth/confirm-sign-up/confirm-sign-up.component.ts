import { Auth } from 'aws-amplify';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ConfirmSignUpComponent'
})
export default class ConfirmSignUpComponent extends Vue {
  private email: string = '';
  private code: string = '';
  private showEmailField: boolean = false;
  private isValid: boolean = true;
  private authResultError: string = '';
  private showResendCode: boolean = true;
  private showResendCodeMessage: boolean = false;
  
  private get validationRules() {
    return this.$helpers.validation.getRules();
  }

  private async confirm() {
    try {
      if ((this.$refs.form as any).validate()) {
        await Auth.confirmSignUp(this.email, this.code);
        this.$router.push('/auth/sign-in');
      }
    } catch (err) {
      this.authResultError = err.message;
    }
  }

  private async resendCode() {
    try {
      this.showResendCode = false;

      await Auth.resendSignUp(this.email);

      this.showResendCodeMessage = true;

      setTimeout(() => {
        this.showResendCodeMessage = false;
        this.showResendCode = true;
      }, 3000);
    } catch (err) {
      this.authResultError = err.message;
    }
  }

  private created() {
    this.email = this.$route.query.email as string;
    this.showEmailField = !this.email;
  }
}
