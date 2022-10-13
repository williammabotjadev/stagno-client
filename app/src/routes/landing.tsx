import React from 'react'

import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
import DrawerAppBar from '../components/appBar'

import bgImage from '../images/landing.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  title: {
    textAlign: 'center',
  },
}))

const Landing: React.FunctionComponent = () => {
  const classes = useStyles()

  const history = useHistory()

  const signIn = () => {
    history.push('/signin')
  }

  const signUp = () => {
    history.push('/signup')
  }

  return (
    <Grid container>
      <Grid className={classes.root} container direction="column" justify="center" alignItems="center" style={{
          backgroundImage: `url(${bgImage})`,
        }}>
       <DrawerAppBar />
        <Box m={2}>
          <Button onClick={signIn} variant="contained" style={{
            backgroundColor: '#23408e',
            color: '#fff',
            width: '240px',
            height: '80px',
            fontSize: '24px'
          }}>
            SIGN IN
          </Button>
          <Button onClick={signUp} variant="contained" style={{
            backgroundColor: '#385399',
            color: '#fff',
            width: '240px',
            height: '80px',
            fontSize: '24px',
            marginLeft: '20px'
          }}>
            Register
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Landing
