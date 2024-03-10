import React from 'react'
import { Button } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'

export const RandomButton = ({onGeneratedClick}) => {
  return (
    <Segment basic textAlign={"center"} padded>
        <Button primary onClick={onGeneratedClick}>Random exercise</Button>
    </Segment>
  )
}
