import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  admin: {
    justifyContent: 'space-between',
    margin: '0px 5px',
  },
  appBar: {
    display: 'space-between',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0px 20px',
    margin: '0px 0px',
    position: 'sticky',
    width: '100%',
  },
  banner: {
    width: '70px',
    margin: '5px 0px',
  },
  button: {
    minHeight: '64px',
  },
  heading: {
    textDecoration: 'none',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  toolbar: {
    justifyContent: 'space-between',
    // minHeight: 0,
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'contents',
    alignItems: 'right',
  },
  iconButton: {
    width: '30px',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));