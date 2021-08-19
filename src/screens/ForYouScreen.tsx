import {Box} from 'native-base';
import React from 'react';
import ListItem from '../components/ListItem';
import UserListComp from '../components/UserListComp';

const ForYouScreen = () => {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <UserListComp />
      <ListItem />
    </Box>
  );
};

export default ForYouScreen;
