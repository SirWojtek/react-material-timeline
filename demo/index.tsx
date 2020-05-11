import { render } from 'react-dom';
import * as React from 'react';

import { MuiThemeProvider, createMuiTheme, Avatar, Icon } from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';

import { Timeline, IEvent } from '../src/timeline/timeline';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

const icon = (
  <Avatar>
    <Icon>work</Icon>
  </Avatar>
);

const events: IEvent[] = [
  {
    title: 'Event 1',
    description: ['Some description for event 1'],
    icon,
  },
  {
    title: 'Event 2',
    description: ['Some description for event 2'],
    icon,
  },
  {
    title: 'Event 3',
    description: ['Some description for event 3'],
    icon,
  },
];

class Demo extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Timeline events={events} />
      </MuiThemeProvider>
    );
  }
}

render(<Demo />, document.getElementById('root'));
