import { makeStyles } from '@material-ui/core/styles';
import { colors, Hidden } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  grid: {
    display: 'flex',
    height: '65vh',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: '25% 75%'
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: 'center'
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 300,
    padding: theme.spacing(4),
    opacity: 0.9
  },
  paperForm: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 300,
    padding: theme.spacing(4),
    opacity: 0.9
  },
  item: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  button: {
    width: '200',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: colors.orange
  },
  iconEdit: {
    color: colors.green
  }
}));

export default useStyles;
