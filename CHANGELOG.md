<!--

## 0.0.0-alpha.0 (DD Month, Year)

### Features

- todo

### Changes

- todo

### Bug Fixes

- todo

-->

## 0.0.1-alpha.9 (7 November, 2020)

### Features

- New Theme component
  - Replaces the ThemeProvider.
  - Replaces the CssReset component with a new `injectGlobalStyles` function which allows a user to restyle and extend their apps base CSS.

### Changes

- Removed the following components
  - ColorModeProvider (see below)
  - CssReset (moved into Theme)
  - Field (see below)
  - SpicyProvider
  - ThemeProvider
- Removed color mode implementations from all components
  - Our intention is to provide an alternate dark theme instead of a provider + hook.
- Removed Field component
  - Determined through implementations that this provider is best implemented by the consumer as different form libraries (formik, react-form-hook) call for different implementations and usages.
- Default theme now uses Tailwind CSS colors
- Component styles have been adjusted to use new theme colors
- Added CHANGELOG.md

### Bug Fixes

- Fixed outline and ghost variants of the Button component not having transparent background colors
- Fixed issue with color prop on Text and Heading components
- Fixed height prop not being avaliable on Input, Select and TextArea components
- Fixed ref forwarding issue with Input, Select and TextArea components

## 0.0.1-alpha.8 (28 October, 2020)

### Bug Fixes

- Fix for menu background
- Fix menu in dark mode

## 0.0.1-alpha.7 (28 October, 2020)

### Features

- New Avatar component
- New Popover component
- New Menu component

### Changes

- Improvements to box shadows steps in theme
- Renamed Drawer and Modal props

### Bug Fixes

- Fix for headers receiving default browser margin/padding

## 0.0.1-alpha.6 (26 October, 2020)

### Changes

- Raise opacity on disabled elements
- Reduced x padding on inputs
- Black button consistency

### Bug Fixes

- Dependencies update and React 17 fix
- Possible iOS button appearance fix

## 0.0.1-alpha.5 (29 July, 2020)

### Changes

- Try to improve Link component again
- Change all component styles to be functions so they're used consistently when imported/extended

## 0.0.1-alpha.4 (29 July, 2020)

### Changes

- Removed device-width padding from noscroll class
- Improved types for Box component and Link
- Modified when variants for components are called
- Other component changes
- Fixed tests not running

## 0.0.1-alpha.3 (13 July, 2020)

### Changes

- Reworked theme system
- Aligned design choices with those found in [Tailwind CSS](https://tailwindcss.com/)
- Component styles are now found in `system.components` e.g. `system.components.Button` which allows for extending variants, colors, sizes etc.
- Updated storybook to 6.0 beta
- Various improvements all over the library

## 0.0.1-alpha.2 (22 June, 2020)

### Features

- New Portal component
- New Modal component
- New Drawer component

### Changes

- Various changes to component styles
- Split CssReset component out of the Theme component
- Implemented shouldForwardProp on styled components

### Fixes

- Various fixes to types, linting and component internals

## 0.0.1-alpha.1 (26 April, 2020)

- First publish of components
