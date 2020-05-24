# react-material-timeline

`react-material-timeline` is a vertical (right now!) timeline component which can be summarized with a simple equation:
```
react-material-timeline = react + material-ui + the code
```
If you are looking for elegant, simple library to show time based event, this is the perfect candidate!

## Features
* easy to integrate with `material-ui` and compatible with material theme
* lightweight and simple
* optional Typescript mappings

## Demo

https://react-material-timeline.stackblitz.io

## Instalation
### Prerequisites
`react-material-timeline` uses `material-ui` library.
It means you should have configured `material-ui` before you start.
For more information look here: https://material-ui.com/getting-started/installation/

### Install package
```
yarn add react-material-timeline
```
or
```
npm install react-material-timeline
```

## Usage
1. Import.
2. Prepare `events`
3. Feed `Timeline`
4. Have fun.

```tsx
import { Timeline } from 'react-material-timeline';
import { Avatar, Icon } from '@material-ui/core';

const icon =

const events = [
  {
    title: 'Event 1',
    subheader: new Date().toDateString(),
    description: [ 'Some description for event 1' ],
    icon: <Avatar><Icon>work</Icon></Avatar>,
  },
  {
    title: 'Event 2',
    subheader: new Date().toDateString(),
    description: [ 'Some description for event 2' ],
    icon: <Avatar><Icon>home</Icon></Avatar>,
  }
];

class AwesomeTimeline extends Component {
  render() {
    return <Timeline events={events}/>;
  }
}
```

## Custtomisation
It is possible to inject CSS styles for cards via `styles` property:

```tsx
// make text in timeline right cards to be aligned to the right
<Timeline events={events} styles={{ rightCard: { textAlign: 'right' } }} />
```

Currently, it is possible to adjust left and right cards separatelly.

## Contributions & Feature requests
If you have any ideas how to make this library better or you found a bug feel free to open new issue.
This is our hobby project and we'd like to invite you to have fun enhancing it with us!

