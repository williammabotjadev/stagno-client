import React, { useContext, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import Link from '@material-ui/core/Link'
import axios from 'axios'
import DrawerAppBar from '../components/homeBar'
import Options from './options'

import logoImage from './logo.png'

import { AuthContext } from '../contexts/authContext'
import { getTokenSourceMapRange } from 'typescript'

import { AnyLengthString } from 'aws-sdk/clients/comprehend'

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    textAlign: 'center',
  },
  session: {
    width: '80vw',
    overflow: 'auto',
    overflowWrap: 'break-word',
    fontSize: '16px',
  },
  hero: {
    width: '100%',
    background: 'rgb(220,220,220)',
  },
}))

export default function Home() {

  const [signNowToken, setSignNowToken] = React.useState('')

  const classes = useStyles()

  const history = useHistory()

  const auth = useContext(AuthContext)

  const data = new FormData();

  return (
    <Grid container>
      <DrawerAppBar />
      <Options />
    </Grid>
  )
}
