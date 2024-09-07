import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import { useAuth } from '../../contexts/authContext'

const Home = () => {
  const { currentUser } = useAuth();
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <div className='text-2xl font-bold pt-14'>
        Bonjour {currentUser.displayName ? currentUser.displayName : currentUser.email}, Vous êtes maintenant connecté(e).
      </div>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
