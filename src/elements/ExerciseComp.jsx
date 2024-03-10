import React from 'react'
import {
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Image,
    Container,
  } from 'semantic-ui-react'

export const Exercise = (props) => {

    return (
        <Container textAlign='center'>
            <Card centered>
                <Image size='medium' src={props.exc.image}/>
                {/* https://i1.sndcdn.com/avatars-000700309825-w7g8qm-t500x500.jpg */}
                <CardContent>
                    <CardHeader>{props.exc.title}</CardHeader>

                    <CardDescription>
                        <Container textAlign='justified'>
                            <p className='scrollable-segment'>
                                {props.exc.description}
                            </p>
                        </Container>
                    </CardDescription>

                </CardContent>
            </Card>
        </Container>
    );
}
