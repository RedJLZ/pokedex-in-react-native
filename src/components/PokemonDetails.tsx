import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';
interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
    >
      {/** Types y peso */}
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={{...styles.title}}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text style={{...styles.regularText}} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        {/** Peso */}
        <Text style={{...styles.title}}>Peso</Text>
        <Text style={{...styles.regularText}}>{pokemon.weight}Kg</Text>
      </View>
      {/** types */}
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Sprites</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>
        <FadeInImage uri={pokemon.sprites.front_default} style={{...styles.basicSprinte}} />
        <FadeInImage uri={pokemon.sprites.back_default} style={{...styles.basicSprinte}} />
        <FadeInImage uri={pokemon.sprites.front_shiny} style={{...styles.basicSprinte}} />
        <FadeInImage uri={pokemon.sprites.back_shiny} style={{...styles.basicSprinte}} />
      </ScrollView>
      {/**Habilidades */}
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Habilidades base</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text style={{...styles.regularText}} key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      {/**Movimientos */}
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Movimientos</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text style={{...styles.regularText}} key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
      {/**Stats */}
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View key={stat.stat.name} style={{flexDirection: 'row'}}>
              <Text style={{...styles.regularText, width: 150}} key={stat.stat.name}>
                {stat.stat.name}
              </Text>
              <Text style={{...styles.regularText, fontWeight: '700'}}>{stat.base_stat}</Text>
            </View>
          ))}
        </View>
        {/** Sprite final */}
        <View style={{marginBottom: 20, alignItems: 'center'}}>
          <FadeInImage uri={pokemon.sprites.front_default} style={{...styles.basicSprinte}} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },
  regularText: {
    fontSize: 17,
    marginRight: 10,
  },
  basicSprinte: {
    width: 100,
    height: 100,
  },
});
