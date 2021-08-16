import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const UserListComp = () => {
  const userListState = useSelector((state: RootState) => state.userList);
  return (
    <View>
      {userListState.error && <Text>Error</Text>}
      {userListState.loading && <Text>Loading</Text>}
      {userListState.users && <Text>users</Text>}
    </View>
  );
};

export default UserListComp;
