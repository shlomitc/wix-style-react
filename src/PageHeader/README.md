# Wix Style React Page.Header Component

Page.Header component is an implementation for the Header which is nested inside the Page.

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| minimized | bool | false | true | This property is being supplied by the Page component, it's value changes by the state of the scrolled content |
| hasBackgroundImage | bool | false | true | This property is being supplied by the Page component, it's value reflects if the Page has a background image or not |
| breadcrumbs | Breadcrumbs | null | false | Wix-Style-React Breadcrumbs component |
| title | string | '' | true | The main title text |
| subtitle | string | '' | false | The subtitle text |
| showBackButton | bool | false | false | Should show a back button |
| onBackClicked | EventCallback | null | false | The callback when back button is clicked |
| actionsBar | Component | null | false | A placeholder for a component that can contain actions / anything else |
