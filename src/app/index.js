import angular from 'angular';
import 'angular-ui-router';
import { topbar } from 'topbar';
import { site } from 'site';
import { MyComponent } from './components/myComponent.component';

angular.module('demo', [
  'ng',
  'ui.router',
  site.name,
  topbar.name
])
  .component('myComponent', MyComponent)
  .config(myConfig);

angular.element(document).ready(() => angular.bootstrap(document, ['demo']));

function myConfig(aSidebarNavigationFactoryProvider, $stateProvider, $urlRouterProvider) {
  aSidebarNavigationFactoryProvider
    .setProduct('pro')
    .addMenuItems([
      {
        title: 'Home',
        state: 'home.dashboard',
      },
      {
        title: 'Profile',
        state: 'profile.user',
      }
    ]);

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      abstract: true,
      template: '<a-site-main></a-site-main>',
      controller(aTopbar) {
        console.log('home');
        aTopbar.setState({
          left: [
            {
              sref: 'home.dashboard',
              title: 'Dashboard'
            },
            {
              sref: 'home.settings',
              title: 'Settings',
            },
          ]
        });
      }
    })
    .state('home.dashboard', {
      url: '',
      template: '<my-component></my-component>',
      controller() {
        console.log('home.dashboard');
      }
    })
    .state('home.settings', {
      url: '',
      template: '<h1>Settings</h1>',
      controller() {
        console.log('home.settings');
      }
    })
    .state('profile', {
      url: '/profile',
      abstract: true,
      template: '<a-site-main></a-site-main>',
      controller(aTopbar) {
        console.log('profile');


        aTopbar.setState({
          left: [
            {
              sref: 'profile.user',
              title: 'User'
            },
            {
              sref: 'profile.account',
              title: 'Account',
            },
          ]
        });
      }
    })
    .state('profile.user', {
      url: '',
      template: '<h1>user</h1>',
      controller() {
        console.log('profile.user');
      }
    })
    .state('profile.account', {
      url: '',
      template: '<h1>Account</h1>',
      controller() {
        console.log('profile.account');
      }
    });
}
