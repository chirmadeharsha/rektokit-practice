import {
  Box,
  CardMedia,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core'


const useStyles = makeStyles(() => ({
  appBar: {
    color: 'black',
    padding: '0px'
  },
  media: {
    height: '45px',
    width: '45px',
    borderRadius: '10px',
    marginBottom: '1rem',
    marginRight: '15px',
    color: '#e1ddde'
  },
  boldTitle: {
    fontWeight: 'bold'
  }
}))

type CustomCardHeaderProps = {
  title: string
}

const CustomHeaCardHeader = ({ title }: CustomCardHeaderProps) => {
  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar className={classes.appBar}>
        <CardMedia
          className={classes.media}
          component='img'
          src='https://rk-staging-static.s3.eu-west-1.amazonaws.com/static/public/images/hea/icon-title-home.svg'
          alt='Home Image'
        />
        <Typography
          variant='h5'
          className={classes.boldTitle}
        >
          {title}
        </Typography>
      </Toolbar>
    </Box>
  )
}

export default CustomHeaCardHeader
