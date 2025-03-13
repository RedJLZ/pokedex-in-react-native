import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../components/PokemonCard';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {styles} from '../styles/appTheme';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, isLoading, loadPokemon} = usePokemonPaginated();

  return (
    <>
      <Image source={require('../assets/pokebola.png')} style={styles.pokebolaBG} />
      <View
        style={{
          //...styles.globalMagin,
          alignItems: 'center',
        }}
      >
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // Header
          ListHeaderComponent={
            <Text
              style={{
                ...styles.globalMagin,
                ...styles.title,
                top: top + 10,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}
            >
              Pokedex
            </Text>
          }
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          // infinite scroll
          onEndReached={loadPokemon}
          onEndReachedThreshold={0.4}
          ListFooterComponent={<ActivityIndicator style={{height: 100}} size={20} color="orange" />}
        />
      </View>
    </>
  );
};
