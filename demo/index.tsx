import { render } from 'react-dom';
import * as React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withStyles, WithStyles, StyleRulesCallback } from 'material-ui/styles';
import { blue, pink } from 'material-ui/colors';
import { Grid } from 'material-ui';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
});

class Demo extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
		test
      </MuiThemeProvider>
    );
  }
}

render(<Demo />, document.getElementById('root'));
