
For more information:  
[Getting Started](https://material.angular.io/guide/getting-started)


### Install dependencies

  ```
  yarn add @angular/material @angular/cdk
  ```
### Update Styles

in the angular.json file, change project “styles” to:

  ```json
    "styles": [
      {
        "input": "src/styles.scss"
      }
    ],
  ```
  
### Fix Schematic Issue

There is an issue with mal-formed  `collection.json`.

[See Temporary Fix](https://github.com/angular/material2/issues/11836)

Replace `./node_modules/@angular/material/schematics/collection.json` with:

  ```json
  // This is the root config file where the schematics are defined.
  {
    "$schema": "./node_modules/@angular-devkit/schematics/collection-schema.json",
    "schematics": {
      // Adds Angular Material to an application without changing any templates
      "ng-add": {
        "description": "Adds Angular Material to the application without affecting any templates",
        "factory": "./install",
        "schema": "./install/schema.json",
        "aliases": ["material-shell"]
      },
      // Create a dashboard component
      "dashboard": {
        "description": "Create a card-based dashboard component",
        "factory": "./dashboard/index",
        "schema": "./dashboard/schema.json",
        "aliases": ["material-dashboard"]
      },
      // Creates a table component
      "table": {
        "description": "Create a component that displays data with a data-table",
        "factory": "./table/index",
        "schema": "./table/schema.json",
        "aliases": ["material-table"]
      },
      // Creates toolbar and navigation components
      "nav": {
        "description": "Create a component with a responsive sidenav for navigation",
        "factory": "./nav/index",
        "schema": "./nav/schema.json",
        "aliases": [ "material-nav" ]
      },
      // Creates a address form component
      "addressForm": {
        "description": "Create a component with a address form",
        "factory": "./address-form/index",
        "schema": "./address-form/schema.json",
        "aliases": ["address-form"]
      }
    }
  }
  
  ```
  
### Install Schematic

Replace `[ app name ]` with your app name.

  ```bash
  ng generate @angular/material:material-shell --collection=material-schematics --theme=custom --project=[ app name ]
  ```