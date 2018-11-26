import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #bc7012 30%, #efd002 90%)',
      borderRadius: 3,
      border: 0,
      height: 64,
      width: 256,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(75, 45, 6, 0.7)'
    },
    label: {
      color: '#444444',
      fontSize: '48px',
      fontWeight: 'bolder',
      textTransform: 'upperCase',
    }
  })(Button);


export default StyledButton;