import angular from 'angular';
import { MyComponent } from './components/myComponent.component';

angular.module('demo', ['ng'])
  .component('myComponent', MyComponent);

angular.element(document).ready(() => angular.bootstrap(document, ['demo']));
