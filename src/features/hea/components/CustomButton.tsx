import { Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  button: {
    color: 'white',
    padding: '10px 1rem',
    marginLeft: '0.5rem',
    textTransform: 'none',
    width:'10%',
    height:'77%',
  }
}))

type CustomButtonProps = {
  buttonName: string
  color?: 'inherit' | 'default' | 'primary' | 'secondary' | undefined
  variant: string
}

const CustomButton = ({
  color,
  buttonName,
}: CustomButtonProps) => {
  const classes = useStyles()
  return (
    <Button
      variant='contained'
      color={color}
      className={classes.button}
    >
      {buttonName}
    </Button>
  )
}

export default CustomButton
