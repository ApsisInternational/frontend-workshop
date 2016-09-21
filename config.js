System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "app": "src/app/",
    "apsis:*": "jspm_packages/apsis/*"
  },

  packages: {
    "app": {
      "main": "index.js"
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.8",
    "angular-ui-router": "github:angular-ui/angular-ui-router-bower@0.3.1",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "site": "apsis:site@3.7.1",
    "topbar": "apsis:topbar@3.1.1",
    "apsis:icon@2.1.0": {
      "angular": "github:angular/bower-angular@1.5.8",
      "css": "github:systemjs/plugin-css@0.1.27",
      "kontroll": "apsis:kontroll@1.1.0"
    },
    "apsis:popover@1.10.0": {
      "css": "github:systemjs/plugin-css@0.1.27",
      "icon": "apsis:icon@2.1.0",
      "kontroll": "apsis:kontroll@1.1.0",
      "text": "github:systemjs/plugin-text@0.0.2"
    },
    "apsis:site@3.7.1": {
      "angular": "github:angular/bower-angular@1.5.8",
      "angular-ui-router": "github:angular-ui/angular-ui-router-bower@0.3.1",
      "css": "github:systemjs/plugin-css@0.1.27",
      "icon": "apsis:icon@2.1.0",
      "kontroll": "apsis:kontroll@1.1.0",
      "popover": "apsis:popover@1.10.0",
      "text": "github:systemjs/plugin-text@0.0.6",
      "translate": "apsis:translate@0.1.0"
    },
    "apsis:topbar@3.1.1": {
      "angular": "github:angular/bower-angular@1.5.8",
      "css": "github:systemjs/plugin-css@0.1.27",
      "kontroll": "apsis:kontroll@1.1.0",
      "text": "github:systemjs/plugin-text@0.0.6"
    },
    "apsis:translate@0.1.0": {
      "ApsisInternational/bower-angular-translate": "github:ApsisInternational/bower-angular-translate@2.8.1",
      "ApsisInternational/bower-angular-translate-loader-static-files": "github:ApsisInternational/bower-angular-translate-loader-static-files@2.8.1"
    },
    "github:angular-ui/angular-ui-router-bower@0.3.1": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
