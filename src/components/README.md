# Components

Components are defined here.

There are 2 types of components:

1. Hyperview components
   - Rendered using a Hyperview tag (e.g. `<TextField>` renders `HvTextField`)
   - Starts with the prefix `hv`
   - When adding/removing/renaming one, make sure to make a corresponding change in
     [`services/hv-components/index.js`](`services/hv-components/index.js`)

2. Helper components
   - Only used internally (e.g. `VisibilityDetectingView`)
