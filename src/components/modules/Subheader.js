import React from 'react'
import { Typography } from '@material-ui/core'

export default function Subheader (props) {
  return (
    <Typography
      variant="caption"
      align="left"
      paragraph
      display="block"
      style={{
        color: 'hsla(0,0%,100%,.7)',
        fontSize: '0.875rem',
        marginBottom: 13,
        marginTop: 14,
        marginLeft: 16
      }}
    >
      {props.children}
    </Typography>
  )
}