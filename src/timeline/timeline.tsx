import * as React from 'react';
import { CardHeader, CardContent, Card, Grid, withStyles, WithStyles, StyleRulesCallback } from '@material-ui/core';

type ClassNames =
  | 'container'
  | 'iconGrid'
  | 'iconContainer'
  | 'line'
  | 'cardContainer'
  | 'cardDecoratorLeft'
  | 'cardDecoratorRight';

const styles = createStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  iconGrid: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
}));

export interface IEvent {
  title?: string | JSX.Element;
  subheader?: string | JSX.Element;
  description: string[] | JSX.Element;
  icon: JSX.Element;
}

export interface IStyles {
  leftCard?: React.CSSProperties;
  rightCard?: React.CSSProperties;
}

export interface IProps {
  events: IEvent[];
  styles?: IStyles;
}

class TimelineBase extends React.Component<IProps & WithStyles<ClassNames>> {
  constructor(props: any) {
    super(props);

    if (!this.props.events) {
      throw new Error("Please provide 'events' as an input. For more help see docs.");
    }
  }

  render() {
    return <Grid container>{this.getRows()}</Grid>;
  }

  private getRows(): JSX.Element[] {
    const classes = this.props.classes;
    return this.props.events
      .map((event, i) => [
        <Grid item xs={5} key={'left-' + i}>
          {i % 2 === 0 && this.getTimelineElement(event, true)}
        </Grid>,
        <Grid item xs={2} key={'icon-' + i} className={classes.iconGrid}>
          <div className={classes.line} />
          <div className={classes.iconContainer}>{event.icon}</div>
        </Grid>,
        <Grid item xs={5} key={'right-' + i}>
          {i % 2 !== 0 && this.getTimelineElement(event, false)}
        </Grid>,
      ])
      .reduce((res, grid) => (res = [...res, ...grid]), []);
  }

  private getTimelineElement(event: IEvent, isLeft: boolean): JSX.Element {
    const classes = this.props.classes;
    const styles: IStyles = this.props.styles || {
      leftCard: {},
      rightCard: {},
    };

    return (
      <div className={classes.cardContainer}>
        <div className={isLeft ? classes.cardDecoratorLeft : classes.cardDecoratorRight} />
        <Card style={isLeft ? styles.leftCard : styles.rightCard}>
          <CardHeader title={event.title} subheader={event.subheader} />
          <CardContent>{event.description}</CardContent>
        </Card>
      </div>
    );
  }
}

export const Timeline = withStyles(styles)(TimelineBase);
