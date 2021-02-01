export class ValidationHelper {
  public getRules(): any {
    return {
      required: (value: string) => !!value || 'Please enter a value',
      number: (value: string) => {
        const pattern = /^[1-9]+.?[0-9]{0,2}$/;
        return pattern.test(value) || 'Please enter a monetary value';
      }
    }
  }
}