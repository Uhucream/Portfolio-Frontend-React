import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import blueGrey from '@material-ui/core/colors/blueGrey'
import { Link } from 'react-router-dom'
import Subheader from '@/components/modules/Subheader'

const useStyles = makeStyles({
  root: {
    maxWidth: 275
  }
})

export default function TopPageCards() {
  return (
    <Container fixed style={{padding: 12}}>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Subheader>About Me</Subheader>
          <AboutMeCard />
        </Grid>
      </Grid>
    </Container>
  )
}

function AboutMeCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        image="WWDC.png"
        style={{
          height: 225,
          position: 'relative',
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0,.4)), url("WWDC.png")',
          backgroundPosition: 'left 50% bottom 20%'
        }}
      >
        <Typography align="left" variant="h4" component="div" style={{position: 'absolute', bottom: '16px', left: '16px'}}>
          自己紹介
        </Typography>
      </CardMedia>
      <CardContent>
        <Typography
          align="left"
          variant="body1"
          color="textPrimary"
          component="p"
        >
          金沢工業大学 3年 情報工学科の学生です。
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          style={{ color: blueGrey[400] }}
          component={Link}
          to="/about_me"
        >
          詳しい情報
        </Button>
      </CardActions>
    </Card>
  )
}
