export const MyComponent = {
  template: '<h1>Hello {{$ctrl.name}}',
  controller() {
    console.log('MyComponent');
    this.name = 'Apsis';
  },
}
