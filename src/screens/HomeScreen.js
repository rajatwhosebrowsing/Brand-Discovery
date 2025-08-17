import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  Alert,
  SafeAreaView,
} from 'react-native';
import GradientBackground from '../components/GradientBackground';
import BrandCard from '../components/BrandCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchBrands } from '../services/api';
import { colors } from '../constants/colors';

const HomeScreen = ({ navigation }) => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = async () => {
    try {
      setLoading(true);
      const brandsData = await fetchBrands();
      setBrands(brandsData);
    } catch (error) {
      Alert.alert('Error', 'Failed to load brands. Please try again.');
      console.error('Error fetching brands:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadBrands();
    setRefreshing(false);
  };

  const handleBrandPress = (brand) => {
    navigation.navigate('BrandDetail', { brand });
  };

  const renderBrandCard = ({ item }) => (
    <BrandCard
      brand={item}
      onPress={() => handleBrandPress(item)}
    />
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <GradientBackground />
        <SafeAreaView style={styles.loadingContainer}>
          <LoadingSpinner />
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <GradientBackground />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Text style={styles.header}>Top Brands Today</Text>
          <FlatList
            data={brands}
            renderItem={renderBrandCard}
            keyExtractor={(item) => item.id.toString()}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingBottom: 30,
  },
});

export default HomeScreen;