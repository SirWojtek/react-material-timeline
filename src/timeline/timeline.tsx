import * as React from 'react';
import { Card, Grid, Icon, Typography } from 'material-ui';
import { CardHeader, CardContent } from 'material-ui/Card';
import {
  WithTheme, withStyles, WithStyles, StyleRulesCallback
} from 'material-ui/styles';

type ClassNames = 'container'
  | 'iconGrid' | 'iconContainer' | 'line'
  | 'cardContainer' | 'cardDecoratorLeft' | 'cardDecoratorRight';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  iconGrid: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    zIndex: 0,
  },
  line: {
    position: 'absolute',
    left: 'calc(50% - 1px)',
    width: '2px',
    height: '100%',
    backgroundColor: theme.palette.grey.A100,
  },
  cardContainer: {
    position: 'relative',
  },
  cardDecoratorLeft: {
    position: 'absolute',
	width: 0,
	height: 0,
	borderTop: '16px solid transparent',
	borderLeft: '16px solid' + theme.palette.grey.A100,
	borderBottom: '16px solid transparent',
    top: 'calc(50% - 16px)',
    left: '100%',
  },
  cardDecoratorRight: {
    position: 'absolute',
	width: 0,
	height: 0,
	borderTop: '16px solid transparent',
	borderRight: '16px solid' + theme.palette.grey.A100,
	borderBottom: '16px solid transparent',
    top: 'calc(50% - 16px)',
    right: '100%',
  }
});

export interface IEvent {
  time: Date | string;
  title: string;
  description: string[] | JSX.Element;
  icon: JSX.Element;
}

interface IProps {
  events: IEvent[];
};

class Timeline extends React.Component<IProps & WithStyles<ClassNames>> {
  constructor(props: any) {
    super(props);

  }

  render() {
    const classes = this.props.classes;

    return (
      <Grid container>
        { this.getRows() }
      </Grid>
    );
  }

  private getRows(): JSX.Element[] {
    const classes = this.props.classes;
    return this.props.events.map((event, i) => ([
        <Grid item xs={5} key={'left-' + i}>
          { i % 2 === 0 && this.getTimelineElement(event, true) }
        </Grid>,
        <Grid item xs={2} key={'icon-' + i} className={classes.iconGrid}>
          <div className={classes.line}/>
          <div className={classes.iconContainer}>
            { event.icon }
          </div>
        </Grid>,
        <Grid item xs={5} key={'right-' + i}>
          { i % 2 !== 0 && this.getTimelineElement(event, false) }
        </Grid>
    ])).reduce((res, grid) => res = [ ...res, ...grid ], []);
  }

  private getTimelineElement(event: IEvent, isLeft: boolean): JSX.Element {
    const classes = this.props.classes;

    return (
      <div className={classes.cardContainer}>
        <div className={isLeft ?
          classes.cardDecoratorLeft : classes.cardDecoratorRight}/>
        <Card>
          <CardHeader title={event.title}/>
          <CardContent>
            { event.description }
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)<IProps>(Timeline);
