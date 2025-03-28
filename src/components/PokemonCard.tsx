import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import ImageColors from 'react-native-image-colors';

import {useNavigation} from '@react-navigation/native';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}
export const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation();

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {fallback: 'grey'}).then((colors) => {
      if (!isMounted.current) return;

      colors.platform === 'ios'
        ? setBgColor(colors.background || 'grey')
        : setBgColor(colors.dominant || 'grey');
    });
    return () => {
      isMounted.current = false;
    };
    //IOS background
    //Android dominate
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor,
        })
      }
    >
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}
      >
        <View>
          <Text style={styles.name}>
            {pokemon.name.toLocaleUpperCase()}
            {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokebolaContainer}>
          <Image source={require('../assets/pokebola-blanca.png')} style={styles.pokebola} />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    //backgroundColor:'grey',
    marginHorizontal: 10,
    height: 140,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 17,
    fontWeight: '800',
    top: 15,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -20,
    bottom: -20,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    top:15,
    right: -7,
    bottom: -5,
  },
  pokebolaContainer: {
    //backgroundColor:'green',
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5,
  },
});
