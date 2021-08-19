import {HStack} from 'native-base';
import React from 'react';
import {View, Text} from 'react-native';
import {StylesProps} from 'styled-system';

export interface TobParProps {
  style: StylesProps;
  title: string;
}

const TopBar = ({style, title}: TobParProps) => {
  return (
    <HStack backgroundColor="green.400">
      <Text>{title}</Text>
    </HStack>
  );
};

export default TopBar;
