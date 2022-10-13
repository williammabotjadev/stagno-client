import React, { useState, useContext } from 'react'

import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Link from '@mui/material/Link'

import { useValidPassword, useValidUsername } from '../../hooks/useAuthHooks'
import { Password, Username } from '../../components/authComponents'

import { AuthContext } from '../../contexts/authContext'
import Logo from '../../images/logo.png'
import SignInBg from '../../images/signin.jpg'

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  hover: {
    '&:hover': { cursor: 'pointer' },
  },
})

const SignIn: React.FunctionComponent<{}> = () => {
  const classes = useStyles()

  const { username, setUsername, usernameIsValid } = useValidUsername('')
  const { password, setPassword, passwordIsValid } = useValidPassword('')
  const [error, setError] = useState('')

  const isValid = !usernameIsValid || username.length === 0 || !passwordIsValid || password.length === 0

  const history = useHistory()

  const authContext = useContext(AuthContext)

  const signInClicked = async () => {
    try {
      await authContext.signInWithEmail(username, password)
      history.push('home')
    } catch (err: any) {
      if (err.code === 'UserNotConfirmedException') {
        history.push('verify')
      } else {
        setError(err.message)
      }
    }
  }

  const passwordResetClicked = async () => {
    history.push('requestcode')
  }

  return (
    <Grid className={classes.root} container direction="row" justify="center" alignItems="center" style={{
      backgroundImage: `url(${SignInBg})`,
    }}>
      <Grid xs={11} sm={6} lg={4} container direction="row" justify="center" alignItems="center" item>
        <Paper style={{ width: '100%', padding: 32 }}>
          <Grid container direction="column" justify="center" alignItems="center" style={{
            height: '100vh'
          }}>
            {/* Title */}
            <Box m={2}>
                <Link href="/">
                  <img style={{
                    marginLeft: '120px'
                  }} width={"42%"} src={Logo} alt="logo" />
                </Link>
              <Typography variant="h3" style={{
                marginLeft: '156px'
              }}>Sign in</Typography>
            </Box>

            {/* Sign In Form */}
            <Box width="80%" m={1}>
              {/* <Email emailIsValid={emailIsValid} setEmail={setEmail} /> */}
              <Username usernameIsValid={usernameIsValid} setUsername={setUsername} />{' '}
            </Box>
            <Box width="80%" m={1}>
              <Password label="Password" passwordIsValid={passwordIsValid} setPassword={setPassword} />
              <Grid container direction="row" justify="flex-start" alignItems="center">
                <Box onClick={passwordResetClicked} mt={2}>
                  <Typography className={classes.hover} variant="body2">
                    Forgot Password?
                  </Typography>
                </Box>
              </Grid>
            </Box>

            {/* Error */}
            <Box mt={2}>
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            </Box>

            {/* Buttons */}
            <Box mt={2}>
              <Grid container direction="row" justify="center">
                <Box m={1}>
                  <Button style={{
                    color: 'white',
                    backgroundColor: '#ed1b24'
                  }} variant="contained" onClick={() => history.goBack()}>
                    Cancel
                  </Button>
                </Box>
                <Box m={1}>
                  <Button disabled={isValid} style={{
                    color: 'white',
                    backgroundColor: '#23408e'
                  }} variant="contained" onClick={signInClicked}>
                    Sign In
                  </Button>
                </Box>
              </Grid>
            </Box>
            <Box mt={2}>
              <Box onClick={() => history.push('signup')}>
                <Typography className={classes.hover} variant="body1">
                  Register a new account
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default SignIn
