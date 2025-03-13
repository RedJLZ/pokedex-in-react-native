import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../features/HomeScreen';
import {PokemonScreen} from '../features/PokemonScreen';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  HomScreen: undefined;
  SearchScreen: undefined;
  PokemonScreen: {simplePokemon: SimplePokemon; color: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const Tab1 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="HomScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
