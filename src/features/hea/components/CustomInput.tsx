import { FormGroup, InputLabel, TextField, makeStyles } from '@material-ui/core'

// ** MATERIAL UI MAKESTYLES CHANGES
const useStyles = makeStyles(theme => ({
  inputContainer: {
    display: 'flex',
    width: '80%',
    marginBottom: '0.3rem',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
    }
  },
  input: {
    borderRadius: '5px',
    color: 'black',
    backgroundColor: 'white',
    [theme.breakpoints.up('sm')]: {
      padding: '0.8rem 1rem',
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10px 1rem'
    },
    width: '100%'
  },
  inputLabel: {
    textAlign: 'start',
    display: 'flex',
    alignItems: 'center',
    padding: '0.3rem 0rem',
    marginTop: '0.3rem',
    color: 'grey',
    width: '115px'
  }
}))

type CustomInputProps = {
  labelName: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
}

const CustomInput = ({
  labelName,
  name,
  handleInputChange,
  value
}: CustomInputProps) => {
  const classes = useStyles()

  return (
    <FormGroup className={classes.inputContainer} >
      <InputLabel className={classes.inputLabel}>{labelName}</InputLabel>
      <TextField
        id={name}
        name={name}
        label=''
        value={value ? value : ''}
        variant='outlined'
        InputProps={{
          classes: {
            input: classes.input
          }
        }}
        InputLabelProps={{
          shrink: false
        }}
        onChange={handleInputChange}
      />
    </FormGroup>
  )
}

export default CustomInput
