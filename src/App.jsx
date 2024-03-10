import { Container, Divider } from 'semantic-ui-react';
import './App.css';
import { RandomButton } from './elements/RandomButton';
import { Exercise } from './elements/ExerciseComp';
import listExercise from './ListExercises.json';
import { useState } from 'react';

function App() {

  const [exercise, setExercise] = useState(listExercise[0]);

  const generated = () => {
    const length = listExercise.length;
    if(listExercise && length > 0){
      const i = Math.floor(Math.random() * length);
      setExercise(listExercise[i]);
    }
  }

  return (
    <Container>
      <RandomButton onGeneratedClick={generated}/>
      <Exercise exc={exercise}/>
      <Divider></Divider>
    </Container>
  );
}

export default App;
