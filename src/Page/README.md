# Wix Style React Page Component

Page component is a wrapper component which allows you to use the sticky header component.
<br/>
The PageHeader component is the header implementation that will be changed when scrolling down inside the page.

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| backgroundImageUrl | string | null | false | Background image url of the header beackground |
| maxWidth | number | null | false | Sets the max width of the header and the content |
| gradientClassName | string | null | false | A class name that contains gradient css |

## Children
| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| Page.Header | Page.Header | null | true | The PageHeader object which defines the components within the Header |
| Page.Tail | Page.Tail | null | false | A placeholder for a component which sticks to the bottom of the header |
| Page.Content | Page.Content | null | true | A placeholder for the page scrollable body |