import { Auth } from 'aws-amplify';
import { Component, Vue } from 'vue-property-decorator';
import { User } from '../_domain/models';

@Component({
  name: 'SignUpComponent'
})
export default class SignUpComponent extends Vue {

  private user: User = new User();
  private password: string = '';
  private isValid: boolean = true;
  private authResultError: string = '';
  
  private get validationRules() {
    return this.$helpers.validation.getRules();
  }

  private async signUp() {
    try {
      this.authResultError = '';

      if ((this.$refs.form as any).validate()) {
        const { email, name } = this.user;
  
        await Auth.signUp({
          username: email,
          password: this.password,
          attributes: {
            email,
            name
          }
        });
        
        this.$router.push(`/auth/sign-up/confirm?email=${this.user.email}`);
      }

    } catch (err) {
      this.isValid = false;
      this.authResultError = err.message;
    }
  }
}
