# Changelog

All notable changes are documented in this file.

## 1.2.7 - 2017-12-13
### Fixed
- Add parentSelector and overlayPosition props to modal [1254](https://github.com/wix/wix-style-react/pull/1254)

### Added
- HBox and VBox components [1263](https://github.com/wix/wix-style-react/pull/1263)

## 1.2.6 - 2017-12-13
### Fixed
- Remove unwanted padding from `<FieldWithSelection>` dropdown [1258](https://github.com/wix/wix-style-react/pull/1258)
- support append to parent in tooltip teskit [1252](https://github.com/wix/wix-style-react/pull/1252)

### Changed
- Migrate storybook utils to `wix-storybook-utils` [1215](https://github.com/wix/wix-style-react/pull/1215)

## 1.2.5 - 2017-12-10
### Added
- `DropdownComposite` - [1238](https://github.com/wix/wix-style-react/pull/1238)

### Changed
- `Page` - Change styles [1234](https://github.com/wix/wix-style-react/pull/1234)
- `Page` - Added max-width support [1245](https://github.com/wix/wix-style-react/pull/1245)

### Fixed
- `Input` - RTL is now implemented with direction:rtl [1232](https://github.com/wix/wix-style-react/pull/1232)

## 1.2.4 - 2017-12-06
### Changed
- `DropdownLayout`
    - remove line-height from options in material theme (https://github.com/wix/wix-style-react/commit/7bf3f75e347de4a4920740de92441b5f205f65a1)
    - fix position in safari [1231](https://github.com/wix/wix-style-react/pull/1231)

## 1.2.3 - 2017-12-05
### Changed
- `DropdownLayout` - change option padding to conform to backoffice UX [1127](https://github.com/wix/wix-style-react/pull/1227)

### Fixed
- `<Loader>` - Fix teskit for the case  the loader doesn't exist [1226](https://github.com/wix/wix-style-react/pull/1226), [1228](https://github.com/wix/wix-style-react/pull/1228)
- `<InputWithOptions>` - do not force blur when hiding options dropdown [1125](https://github.com/wix/wix-style-react/pull/1225)

## 1.2.2 - 2017-12-04
### Fixed
- wix-ui-test-utils should be a dep instead of dev-dep
## 1.2.1 - 2017-12-04
### Fixed
- Publish transpiled code (https://github.com/wix/wix-style-react/commit/d165950bfc3b355b1bbc5896797538a52c410ec2)


## 1.2.0 - 2017-12-04
### Changed
- Migrate to wix-ui-test-utils [1204](https://github.com/wix/wix-style-react/pull/1204)
- Removed dist from testkit import path in the examples
- Deprecate export-components script in facor of import-path package [1217](https://github.com/wix/wix-style-react/pull/1217)
- Migrate to haste [1218](https://github.com/wix/wix-style-react/pull/1218)
- `<Loader>`: New loader [1203](https://github.com/wix/wix-style-react/pull/1203)
### Fixed
- `<input>` - Correct prop-types for noRitghtBorderRadius [1213](https://github.com/wix/wix-style-react/pull/1213)

### Added
- `<Page>` - Add Tabs [1211](https://github.com/wix/wix-style-react/pull/1211)
- `<DropdownLayout>` - Added long options support to dropdown [#1220](https://github.com/wix/wix-style-react/pull/1220)

## 1.1.4624 - 2017-11-29
### Changed
- use node 8.9.1
- remove `module` from package.json, no more `dist/es` folder
- `<MessageBoxFunctionalLayout>` - confirmText & cancelText proptype now node [1202](https://github.com/wix/wix-style-react/pull/1202)


### Fixed
- `<Input>` - correct autofocus cursor position [1208](https://github.com/wix/wix-style-react/pull/1208)


## 1.1.4623 - 2017-11-28
### Added
- New icons: Code, Facebook, Google & Yandex [1197](https://github.com/wix/wix-style-react/pull/1197)

### Changed
- `<PageHeader>` - general improvements [1196](https://github.com/wix/wix-style-react/pull/1196)

### Fixed
- `<Notification.TextLabel/>` - correct style & ellipsed text behaviour [1180](https://github.com/wix/wix-style-react/pull/1180)
- `<Checkbox/>` - do not require `.ltr` [1199](https://github.com/wix/wix-style-react/pull/1199)


## 1.1.4262 - 2017-11-27
### Changed
- `<Page>` refactor & improve docs [1182](https://github.com/wix/wix-style-react/pull/1190), [1182](https://github.com/wix/wix-style-react/pull/1182)

### Fixed
- `<InputArea>` updated to the correct icon [1181](https://github.com/wix/wix-style-react/pull/1181)


## 1.1.4260 - 2017-11-25
### Added
- `<StatsWidget>` - Added new widget (https://github.com/wix/wix-style-react/commit/3209220357d8b8e1bd320de5f1e9512f50214342)
- `<Tooltip>` - Add reange polyfill [1178](https://github.com/wix/wix-style-react/pull/1178)
- Package.lock - [1183](https://github.com/wix/wix-style-react/pull/1183)
- Themes - huge refactor to boost performance and api. [1186](https://github.com/wix/wix-style-react/pull/1186)

### Changed
- `<TimeInput>` + `<Search>` - Update docs [1108](https://github.com/wix/wix-style-react/pull/1108)
- `<Tooltip>` - Remove deprecated tooltip [1179](https://github.com/wix/wix-style-react/pull/1179)

### Fixed
- `<ToggleSwith>` - disable the toggle on disable mode[1174](https://github.com/wix/wix-style-react/pull/1174)
- storybook e2e
- `<InputWithOption>` - Solved saffari issue: [387](https://github.com/wix/wix-style-react/issues/387) 
- `<Tooltip>` - Remove setTimeout [1177](https://github.com/wix/wix-style-react/pull/1177)
- Terminal was cleaned from all warning printouts - [1185](https://github.com/wix/wix-style-react/pull/1185)


## 1.1.4259 - 2017-11-22
### Added
- `<Page>` Added more features [1158](https://github.com/wix/wix-style-react/pull/1158)
- Added sorting order icons [1140](https://github.com/wix/wix-style-react/pull/1140)

### Changed
- `<Breadcrumbs>` style changes [1156](https://github.com/wix/wix-style-react/pull/1156)
- `<Tag>` Fixed bug with expanding width [1159](https://github.com/wix/wix-style-react/pull/1159)


## 1.1.4258 - 2017-11-21
### Added
- `<Page>` component and friends [1145](https://github.com/wix/wix-style-react/pull/1145)

### Changed
- `<AutoExample>` e2e approach [1148](https://github.com/wix/wix-style-react/pull/1148)

### Fixed
- `<DataTable>` - missing separators in data table [1153](https://github.com/wix/wix-style-react/pull/1153)
- `<GoogleAddressInput>` remove undefined properties from result [1154](https://github.com/wix/wix-style-react/pull/1154)


## 1.1.4527 - 2017-11-20
### Changed
- Themes implementation without provider [1151](https://github.com/wix/wix-style-react/pull/1151)

### Added
- `<Page>` - additional e2e tests

- `<GoogleAddressInput>` - Allow fetching address data via Places API [1141](https://github.com/wix/wix-style-react/pull/1141)
### Fixed
- TpaThemeProvider - small bug (https://github.com/wix/wix-style-react/commit/d66bf2107f1376c5034ef835303da20716df7e82)
- `<Button>` - Fixed incorrect padding in RTL [1142](https://github.com/wix/wix-style-react/pull/1142)
- `<DropdownLayout>` - Use lodash findIndex instead of native (for IE support)[1143](https://github.com/wix/wix-style-react/pull/1143)
- `<DropdownLayout>`, `<GoogleAddressInput>`, `<MultiSelect>` - Added a selectedHightlight prop to DropdownLayout, meaning after selecting an option if it should highlight it when dropdown is reopened [1136](https://github.com/wix/wix-style-react/pull/1136)
- `<DropdownLayout>` - mouseClickOutside method was fixed [1147](https://github.com/wix/wix-style-react/pull/1147)


## 1.1.4525 - 2017-11-18
### Added
- themes: progressed with themes poc
- `<Page>` - new component (https://github.com/wix/wix-style-react/pull/1127)

### Fixed
- `<GoogleAddressInput>` - pixelated google credit picture in the footer.
  (https://github.com/wix/wix-style-react/pull/1128)
- `<Tooltip>` - Popover jumping problem(https://github.com/wix/wix-style-react/pull/1137)


## 1.1.4524 - 2017-11-14
### Added
- `<ToogleSwitch/>` - Added support for colors, in order to add component to Wix Viewer (https://github.com/wix/wix-style-react/commit/aa4df9ceb95bd3786f812cb44831f027dbcdb2a4)

- Themes harmless side project as a POC.(https://github.com/wix/wix-style-react/commit/2d50e0a99f04fa8af7eb7566fb5b2930d36baeba)
### Fixed
- `<FieldWithSelectionComposite>` - fix-selection-input-type (https://github.com/wix/wix-style-react/pull/1126)
- release.js: run gh-pages-auto-release only when releasing(https://github.com/wix/wix-style-react/commit/d3d8035e57de0ce97c6b1c0544638a0798ec6760)


## 1.1.4523 - 2017-11-13
### Added
- `<Range/>` - now able to work with `<DatePicker/>`s to create date
  range component (https://github.com/wix/wix-style-react/commit/9b32f2a397eec268052036be5230e5b67ea3eda6)

### Fixed
- `<InputWithOptions/>` - do not hide dropdown if `options.length === 0` (https://github.com/wix/wix-style-react/pull/1116)


## 1.1.4252 - 2017-11-10
### Added
- `<Tooltip/>` `shouldUpdatePosition` prop (https://github.com/wix/wix-style-react/commit/da9c496396e7395de53dfb9a8bacbd7520c61012)

### Changed
- `<Tooltip/>` (https://github.com/wix/wix-style-react/commit/5b3fa3b0367bffe512b7ed44b11932b4d456e6ae):
    - default `maxWidth` now `204px`
    - default `textAlign` now `left`
