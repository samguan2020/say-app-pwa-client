
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  messagesContainer: {
    maxHeight: '300px', // Set the desired height for the scrollable container
    overflowY: 'auto',
    padding: theme.spacing(1),
  },
  formContainer: {
    flex: 1, // Each form container takes up half of the space
    display: 'flex',
    flexDirection: 'column', // Ensures content within forms is also stacked vertically
    overflow: 'auto' // Adds scroll to form if content overflows
  }
}));
