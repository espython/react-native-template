import React from 'react';
import {Image} from 'native-base';
import {ImageSourcePropType} from 'react-native';

export interface TabBarIconProps {
  size: number;
  source: ImageSourcePropType;
}

const TabBarIcon = ({size, source}: TabBarIconProps) => (
  <Image resizeMode="cover" source={source} alt={'Alternate Text ' + size} />
);

export default TabBarIcon;
