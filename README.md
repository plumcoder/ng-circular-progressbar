# Angular Circular Progressbar

A circular progressbar component, built with SVG and extensively customizable. [**Try it out on CodeSandbox**](https://codesandbox.io/s/quizzical-sanderson-benyk).

<a href="https://codesandbox.io/s/quizzical-sanderson-benyk"><img height="100" src="/showcase/animated-progressbar.gif?raw=true" alt="animated progressbar" /></a> <a href="https://codesandbox.io/s/quizzical-sanderson-benyk"><img height="100" src="/showcase/circular-progressbar-examples.png?raw=true" alt="progressbar examples" /></a>



**New features:**

- Use `import { CircularProgressbarWithChildren }` in order to [put arbitrary custom HTML inside progress bar](/README.md#adding-arbitrary-text-or-content-inside-the-progressbar).
- Use `import { buildStyles }` to make it easier to [customize styles](/README.md#using-the-styles-prop).
- Use `props.minValue` and `props.maxValue` to specify a range other than 0-100.


## Installation

Install with yarn:

```bash
yarn add @plcoder/ng-circular-progressbar
```

or npm:

```bash
npm install --save @plcoder/ng-circular-progressbar
```

## Usage

Import the module

```javascript
import { NgCircularProgressbagrModule } from '@plcoder/ng-circular-progressbar';

@NgModule({
  declarations: [
    YourAppComponent
  ],
  imports: [
    ...
    NgCircularProgressbagrModule,
    ...
  ],
  providers: [],
  bootstrap: [YourAppComponent]
})

export class YourAppModule {}
```


Now you can use the component:

```js
const percentage = 66;

<ng-circular-progressbar [value]="percentage" [text]="percentage + '%'">
</ng-circular-progressbar>
```

If your values are not in percentages, you can adjust `minValue` and `maxValue` to select the scale you want:

```js
const value = 0.66;

<ng-circular-progressbar [value]="value" maxValue="1" [text]="value*100 + '%'">
</ng-circular-progressbar>

```

The progressbar is designed to fill the width of its container. You can size the progressbar by sizing its container:

```js
<div style={{ width: 200, height: 200 }}>
  <ng-circular-progressbar value="66">
</ng-circular-progressbar>
</div>
```

This makes the progressbar work well with responsive designs and grid systems.


## Props

[**Take a look at the CodeSandbox**](https://codesandbox.io/s/quizzical-sanderson-benyk) for interactive examples on how to use these props.

| Name                | Description                                                                                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`             | Completion value of the progressbar, from `minValue` to `maxValue`. Required.                                                                                                                                                          |
| `minValue`          | Minimum value of the progressbar. Default: `0`.                                                                                                                                                                                        |
| `maxValue`          | Maximum value of the progressbar. Default: `100`.                                                                                                                                                                                      |
| `className`         | Classes to apply to the svg element. Default: `''`.                                                                                                                                                                                    |
| `text`              | Text to display inside progressbar. Default: `''`.                                                                                                                                                                                     |
| `strokeWidth`       | Width of circular line relative to total width of component, a value from 0-100. Default: `8`.                                                                                                                                         |
| `background`        | Whether to display background color. Default: `false`.                                                                                                                                                                                 |
| `backgroundPadding` | Padding between background circle and path/trail relative to total width of component. Only used if `background` is `true`. Default: `0`.                                                                                              |
| `counterClockwise`  | Whether to rotate progressbar in counterclockwise direction. Default: `false`.                                                                                                                                                         |
| `circleRatio`       | Number from 0-1 representing ratio of the full circle diameter the progressbar should use. Default: `1`.                                                                                                                               |
| `classes`           | Object allowing overrides of classNames of each svg subcomponent (root, trail, path, text, background). |
| `styles`            | Object allowing customization of styles of each svg subcomponent (root, trail, path, text, background).                                                                                                                                |

## Theming (customizing styles)

Use CSS or inline styles to customize the styling - the default CSS is a good starting point, but you can override it as needed.

#### Using the `styles` prop

You can use the `styles` prop to customize each part of the progressbar (the root svg, path, trail, text, and background). This uses the native `style` prop for each subcomponent, so you can use any CSS properties here, not just the ones mentioned below.

As a convenience, you can use `buildStyles` to configure the most common style changes:

```jsx
import { NgCircularProgressbarModule, buildStyles } from '@plcoder/ng-circular-progressbar';

const percentage = 66;
const myStyles = buildStyles({
  // Rotation of path and trail, in number of turns (0-1)
  rotation: 0.25,

  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
  strokeLinecap: 'butt',

  // Text size
  textSize: '16px',

  // How long animation takes to go from one percentage to another, in seconds
  pathTransitionDuration: 0.5,

  // Can specify path transition in more detail, or remove it entirely
  // pathTransition: 'none',

  // Colors
  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
  textColor: '#f88',
  trailColor: '#d6d6d6',
  backgroundColor: '#3e98c7',
});

<ng-circular-progressbar [value]="percentage" [text]="percentage + '%'" styles="myStyles">
</ng-circular-progressbar>

```

`buildStyles` is a shorthand, but you can also build the `styles` object yourself. It's an object with `root`, `path`, `trail`, `text`, and `background` properties, which are each a set of inline styles to apply to the relevant SVG subcomponent. Here's the equivalent set of styles as above, without using `buildStyles`:

```js

const percentage = 69;

const myStyles = {
  // Customize the root svg element
  root: {},
  // Customize the path, i.e. the "completed progress"
  path: {
    // Path color
    stroke: `rgba(62, 152, 199, ${percentage / 100})`,
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',
    // Customize transition animation
    transition: 'stroke-dashoffset 0.5s ease 0s',
    // Rotate the path
    transform: 'rotate(0.25turn)',
    transformOrigin: 'center center',
  },
  // Customize the circle behind the path, i.e. the "total progress"
  trail: {
    // Trail color
    stroke: '#d6d6d6',
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',
    // Rotate the trail
    transform: 'rotate(0.25turn)',
    transformOrigin: 'center center',
  },
  // Customize the text
  text: {
    // Text color
    fill: '#f88',
    // Text size
    fontSize: '16px',
  },
  // Customize background - only used when the `background` prop is true
  background: {
    fill: '#3e98c7',
  },
};

<ng-circular-progressbar [value]="percentage" [text]="percentage + '%'" styles="myStyles">
</ng-circular-progressbar>

```

However, you're not limited to the CSS properties shown above&mdash;you have the full set of SVG CSS properties available to you when you use `prop.styles`.

See the [CodeSandbox examples](https://codesandbox.io/s/quizzical-sanderson-benyk) for a live example on how to customize styles.

#### Using CSS

You can also customize styles with CSS. There are equivalent CSS hooks for the root, path, trail, text, and background of the progressbar.

If you're importing the default styles, you can override the defaults like this:

```js
import './custom.css';
```

```css
// custom.css
.CircularProgressbar-path {
  stroke: red;
}
.CircularProgressbar-trail {
  stroke: gray;
}
.CircularProgressbar-text {
  fill: yellow;
}
.CircularProgressbar-background {
  fill: green;
}
```

## Adding arbitrary text or content inside the progressbar

If you want to add multiple lines of text or images within the progressbar, you can overlay it on top of a regular `<ng-circular-progressbar />` using absolute positioning. `react-circular-progressbar` ships with a `CircularProgressbarWithChildrenComponent` component which makes it easy to do project custom HTML:

```js

<ng-circular-progressbar-with-children [value]="66">
  <img style="width: 40px; margin-top: -5px" src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
  <div style="font-size: 12px; margin-top: -5px">
    <strong>66%</strong> mate
  </div>
</ng-circular-progressbar-with-children>

```

<img src="/showcase/CircularProgressbarWithChildren.png?raw=true" alt="CircularProgressbarWithChildren example" />

`ng-circular-progressbar-with-children` has all the same props as `ng-circular-progressbar` - you can use it the exact same way otherwise.
