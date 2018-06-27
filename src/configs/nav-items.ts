import { MenuApiComponent } from '../app/pages/components/Layout/menu/menu-api/menu-api.component';
import { MenuExampleComponent } from '../app/pages/components/Layout/menu/menu-example/menu-example.component';
import { MenuOverviewComponent } from '../app/pages/components/Layout/menu/menu-overview/menu-overview.component';
import { TabItem } from '../app/shared/util-components/tab-group/tab-item';
import { IDataItem, IRoute } from '../models/routes';
import { CDK, COMPONENTS, GIT_REPO_PROJECTS_BASE, GUIDES, ICON, ICONS, POC, THEMES } from './constants';

export const ROUTES: IRoute = {
  // project
  cdk: {
    // section
    guides: {
      // dataItem
      [ 'cdk-overview' ]: <IDataItem>{
        route: `/${CDK}/guides/cdk-overview`,
        name: 'CDK Overview',
        desc: 'Overview of cdk.',
        base: '',
        githubSpec: null,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, overview`,
      },

      // dataItem
      [ 'adding-to-cdk' ]: <IDataItem>{
        route: `/${CDK}/guides/adding-to-cdk`,
        name: 'Adding To CDK',
        desc: 'Adding To CDK.',
        base: '',
        githubSpec: null,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, adding`,
      },
    },
    // section
    value: {
      hasValue: <IDataItem>{
        route: `/${CDK}/value/hasValue`,
        name: 'hasValue',
        desc: 'Determines if a scalar value is not undefined, null, or empty.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/value/src/has-value.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, value, hasValue`,
      },
      isScalar: <IDataItem>{
        route: `/${CDK}/value/isScalar`,
        name: 'isScalar',
        base: '',
        desc: 'Determines if a value is a scalar value.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/is-scalar.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, value, isScalar`,
      },
    },
    // section
    object: {
      // dataItem
      allPropsAreDefined: <IDataItem>{
        route: `/${CDK}/object/allPropsAreDefined`,
        name: 'allPropsAreDefined',
        desc: 'Determines if all properties on an object are defined.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/all-props-are-defined.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, allPropsAreDefined, all props are defined`,
      },
      allPropsAreDefinedIn: <IDataItem>{
        route: `/${CDK}/object/allPropsAreDefinedIn`,
        name: 'allPropsAreTruthy',
        desc: 'Determines if all properties on an object are defined in a path.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/all-props-are-defined-in.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, allPropsAreTruthy, all props are defined`,
      },
      allPropsAreTruthy: <IDataItem>{
        route: `/${CDK}/object/allPropsAreTruthy`,
        name: 'allPropsAreTruthy',
        desc: 'Determines if all properties on an object are truthy.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/all-props-are-truthy-in.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, allPropsAreTruthy, all props are defined`,
      },
      allPropsAreTruthyIn: <IDataItem>{
        route: `/${CDK}/object/allPropsAreTruthyIn`,
        name: 'allPropsAreTruthyIn',
        desc: 'Determines if all properties on an object are truthy in a path.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/all-props-are-truthy-in.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, allPropsAreTruthyIn, all props are defined`,
      },
      allPropsHaveValue: <IDataItem>{
        route: `/${CDK}/object/allPropsHaveValue`,
        name: 'allPropsHaveValue',
        desc: 'Determines if all properties on an object haveValue.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/all-props-have-value-in.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, allPropsHaveValue, all props are defined`,
      },
      allPropsHaveValueIn: <IDataItem>{
        route: `/${CDK}/object/allPropsHaveValueIn`,
        name: 'allPropsHaveValueIn',
        desc: 'Determines if all properties on an object haveValue in a path.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/all-props-have-value-in.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, allPropsHaveValueIn, all props are defined`,
      },
      clone: <IDataItem>{
        route: `/${CDK}/object/clone`,
        name: 'clone',
        desc: 'Clone an object.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/clone.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, clone, all props are defined`,
      },
      createObjectWithPath: <IDataItem>{
        route: `/${CDK}/object/createObjectWithPath`,
        name: 'createObjectWithPath',
        desc: 'Create and object by submitting a path inside of an object.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/create-object-with-path.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, createObjectWithPath, all props are defined`,
      },
      findProperties: <IDataItem>{
        route: `/${CDK}/object/findProperties`,
        name: 'findProperties',
        desc: 'Find property that matches search string.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/find-properties.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, findProperties, all props are defined`,
      },
      findPropertyData: <IDataItem>{
        route: `/${CDK}/object/findPropertyData`,
        name: 'findPropertyData',
        desc: 'Find property that matches search string, return value of that property.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/find-property-data.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, findPropertyData, all props are defined`,
      },
      findPropsWithValue: <IDataItem>{
        route: `/${CDK}/object/findPropsWithValue`,
        name: 'findPropsWithValue',
        desc: 'Find property that matches search string, return value of that property.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/find-props-with-value.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, findPropsWithValue, all props are defined`,
      },
      getIn: <IDataItem>{
        route: `/${CDK}/object/getIn`,
        name: 'getIn',
        desc: 'Get a value deeply embedded in an object via dot path.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/get-in.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, getIn, all props are defined`,
      },
      hasValueEqual: <IDataItem>{
        route: `/${CDK}/object/hasValueEqual`,
        name: 'hasValueEqual',
        desc: 'Determines two objects are equal based on hasValue check.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/has-value-equal.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, hasValueEqual`,
      },
      hasValueIn: <IDataItem>{
        route: `/${CDK}/object/hasValueIn`,
        name: 'hasValueIn',
        base: '',
        desc: 'Determines if a scalar value is not undefined, null, or empty in a nested object.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/has-value-in.spec.ts`,
        seeAlso: [ 'hasValue' ],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, hasValueIn`,
      },
      hasValueNotEqual: <IDataItem>{
        route: `/${CDK}/object/hasValueNotEqual`,
        name: 'hasValueNotEqual',
        base: '',
        desc: 'Determines if two objects are not equal by hasValue check.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/has-value-not-equal.spec.ts`,
        seeAlso: [ 'hasValue' ],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, hasValueNotEqual`,
      },
      hasValueNotEqualIn: <IDataItem>{
        route: `/${CDK}/object/hasValueNotEqualIn`,
        name: 'hasValueNotEqualIn',
        base: '',
        desc: 'Determines if two objects are not equal by hasValue in a path.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/has-value-not-equal-in.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, hasValueNotEqualIn`,
      },
      invokeIfElseIn: <IDataItem>{
        route: `/${CDK}/object/invokeIfElseIn`,
        name: 'invokeIfElseIn',
        base: '',
        desc: 'Invoke a function nested in a path of an object.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/invoke-if-else-in.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, invokeIfElseIn`,
      },
      invokeIfElseInConfig: <IDataItem>{
        route: `/${CDK}/object/invokeIfElseInConfig`,
        name: 'invokeIfElseInConfig',
        base: '',
        desc: 'Config param for invokeIfElseIn.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/invoke-if-else-in-config.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, invokeIfElseInConfig`,
      },
      invokeIfIn: <IDataItem>{
        route: `/${CDK}/object/invokeIfIn`,
        name: 'invokeIfIn',
        base: '',
        desc: 'Invoke function if in path.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/invoke-if-in.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, invokeIfIn`,
      },
      invokeIn: <IDataItem>{
        route: `/${CDK}/object/invokeIn`,
        name: 'invokeIn',
        base: '',
        desc: 'Invoke function in a path.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/invoke-in.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, invokeIn`,
      },
      isDefined: <IDataItem>{
        route: `/${CDK}/object/isDefined`,
        name: 'isDefined',
        base: '',
        desc: 'Determines if an object or variable is not undefined or null.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/is-defined.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, isDefined`,
      },
      isDefinedIn: <IDataItem>{
        route: `/${CDK}/object/isDefinedIn`,
        name: 'isDefinedIn',
        base: '',
        desc: 'Determines if a nested property is not undefined or null.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/is-defined-in.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, isDefinedIn`,
      },
      isIn: <IDataItem>{
        route: `/${CDK}/object/isIn`,
        name: 'isIn',
        base: '',
        desc: 'Determines if a property exists in a path.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/is-in.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, isIn`,
      },
      isMatch: <IDataItem>{
        route: `/${CDK}/object/isMatch`,
        name: 'isMatch',
        base: '',
        desc: 'Recursively searches an object to find an object that matches a search object.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/is-match.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CDK,
        search: `${CDK}, object, isMatch`,
      },
    },
  },

  // project
  material: {
    // section
    guides: {
      // dataItem
      [ 'mat-overview' ]: <IDataItem>{
        route: `/${COMPONENTS}/guides/mat-overview`,
        name: 'Components Overview',
        desc: 'Overview of components.',
        base: '',
        githubSpec: null,
        seeAlso: [],
        version: '6.0',
        icon: ICON.MATERIAL,
        search: `${COMPONENTS}, material, overview`,
      },
      [ 'adding-components' ]: <IDataItem>{
        route: `/${COMPONENTS}/guides/adding-components`,
        name: 'Adding Components',
        desc: 'Adding Components.',
        base: '',
        githubSpec: null,
        seeAlso: [],
        version: '6.0',
        icon: ICON.MATERIAL,
        search: `${COMPONENTS}, material, adding`,
      },
    },
    // section
    Layout: {
      // dataItem
      menu: <IDataItem>{
        route: `/${COMPONENTS}/Layout/menu/overview`,
        name: 'menu',
        desc: 'Shows html content in a pop-over',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${COMPONENTS}/src/lib/menu/src/menu.spec.ts`,
        seeAlso: [ 'hasValue' ],
        version: '6.0',
        icon: ICON.MATERIAL,
        search: `${COMPONENTS}, menu`,
        tabItem: new TabItem(MenuOverviewComponent, MenuApiComponent, MenuExampleComponent),
      },
    },
  },

  // project
  guides: {
    // section
    'getting-started': {
      // dataItem
      install: <IDataItem>{
        // Do No Use: this is auto configured.
        base: '',

        // Required: shows description in search results
        desc: 'Installation and dependencies.',

        // Required if using markdown: file to load in documentation
        file: '',

        // Do Not Use: guides don't have unit tests.
        githubSpec: '',

        // Required: icon name used in search results
        icon: ICON.GUIDE,

        // Required: Name of Guide will become right menu header link
        name: 'Install Guide',

        // Required: Route to doc
        route: `/${GUIDES}/getting-started/install`,

        // Required: search filters
        search: `${GUIDES}, install, getting-started`,

        // Optional
        seeAlso: [],

        // Not Required, only used for components and cdk
        version: '6.0',
      },
      firebase: <IDataItem>{
        base: '',
        desc: 'Host Docs to Firebase.',
        file: 'assets/guides/getting-started/FIREBASE.md',
        githubSpec: '',
        icon: ICON.GUIDE,
        name: 'Host Docs to Firebase',
        route: `/${GUIDES}/getting-started/firebase`,
        search: `${GUIDES}, install, getting-started, firebase`,
        seeAlso: [],
        version: '6.0',
      },
    },
    'adding-docs-to-this-site': {
      markdown: <IDataItem>{
        // No Not Edit
        base: '',

        // Required: Follows same path as this Routes object
        route: `/${GUIDES}/adding-docs-to-this-site/markdown`,

        // Required: Name of Guide will become right menu header link
        name: 'Adding Markdown Files',

        // Required if using markdown: file to load in documentation
        file: 'assets/guides/adding-docs-to-this-site/markdown.md',

        // Required: shows description in search results
        desc: 'Documentation using markdown files.',

        // Do Not Use: guides don't have unit tests.
        githubSpec: '',

        // Required: icon name used in search results
        icon: ICON.GUIDE,

        // Required: search filters
        search: `${GUIDES}, install, adding-docs-to-this-site, adding, docs, site, markdown`,

        // Optional
        seeAlso: [],

        // Not Required, only used for components and cdk
        version: '6.0',
      },
      html: <IDataItem>{
        // No Not Edit
        base: '',

        // Required: Follows same path as this Routes object
        route: `/${GUIDES}/adding-docs-to-this-site/html`,

        // Required: Name of Guide will become right menu header link
        // and <h2> title of document
        name: 'Creating Guides Using HTML',

        // Required if using markdown: file to load in documentation
        file: '',

        // Required: shows description in search results
        desc: 'Documentation Using HTML.',

        // Do Not Use: guides don't have unit tests.
        githubSpec: '',

        // Required: icon name used in search results
        icon: ICON.GUIDE,

        // Required: search filters
        search: `${GUIDES}, install, adding-docs-to-this-site, adding, docs, site, html`,

        // Optional
        seeAlso: [],

        // Not Required, only used for components and cdk
        version: '6.0',
      },
      'doc-components': <IDataItem>{
        // No Not Edit
        base: '',

        // Required: Follows same path as this Routes object
        route: `/${GUIDES}/adding-docs-to-this-site/doc-components`,

        // Required: Name of Guide will become right menu header link
        // and <h2> title of document
        name: 'Doc Components',

        // Required if using markdown: file to load in documentation
        file: '',

        // Required: shows description in search results
        desc: 'Components for Documentation.',

        // Do Not Use: guides don't have unit tests.
        githubSpec: '',

        // Required: icon name used in search results
        icon: ICON.GUIDE,

        // Required: search filters
        search: `${GUIDES}, install, adding-docs-to-this-site, adding, docs, Components for Documentation`,

        // Optional
        seeAlso: [],

        // Not Required, only used for components and cdk
        version: '6.0',
      },
    },
  },

  // project
  icons: {
    // section
    custom: {
      // dataItem
      search: <IDataItem>{
        route: `/${ICONS}/custom/search`,
        name: 'search',
        desc: 'Search custom icons.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CUSTOM,
        search: `${ICONS}, icon, icons, install`,
      },
      // dataItem
      [ 'install-svg-icons' ]: <IDataItem>{
        route: `/${ICONS}/custom/install-svg-icons`,
        name: 'Install SVG Icons',
        desc: 'Install custom icons.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CUSTOM,
        search: `${ICONS}, icon, icons, install`,
      },
      // dataItem
      [ 'add-to-platform' ]: <IDataItem>{
        route: `/${ICONS}/custom/add-to-platform`,
        name: 'Add Icon To Platform',
        desc: 'How to add an icon to the platform.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CUSTOM,
        search: `${ICONS}, icon, icons, add, platform`,
      },
    },
  },

  // project
  poc: {
    // section
    guides: {
      // dataItem
      [ 'poc-overview' ]: <IDataItem>{
        route: `/${POC}/guides/poc-overview`,
        name: 'Proof of Concepts',
        desc: 'Adding a Proof of Concept.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.POC,
        search: `${POC}, guide, overview`,
      },
    },
    // section
    demos: {
      // dataItem
      [ 'sample-poc' ]: <IDataItem>{
        route: `/${POC}/demos/sample-poc`,
        name: 'Sample PoC',
        desc: 'Sample PoC.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.POC,
        search: `${POC}, demos, demo, sample`,
      },
    },
  },

  // project
  themes: {
    // section
    demos: {
      // dataItem
      overview: <IDataItem>{
        route: `/${THEMES}/demos/overview`,
        name: 'Overview',
        desc: 'Theme Overview Demo.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.THEMES,
        search: `${THEMES}, demos, theme, overview`,
      },
    },
    // section
    references: {
      // dataItem
      resources: <IDataItem>{
        route: `/${THEMES}/references/resources`,
        name: 'Resources',
        desc: 'Theme references.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.THEMES,
        search: `${THEMES}, demos, theme, references`,
      },
    },
  },
};
