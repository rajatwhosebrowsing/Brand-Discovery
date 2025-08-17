import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants/colors';

const BrandDetailScreen = ({ route, navigation }) => {
  const { brand } = route.params;
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowPress = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1A237E', '#0D1B2A', '#000000']}
        style={styles.gradient}
      />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Image source={{ uri: brand.logo }} style={styles.logo} />
            </View>
            
            <Text style={styles.brandName}>{brand.name}</Text>
            <Text style={styles.tagline}>{brand.tagline}</Text>
            
            <View style={styles.detailsContainer}>
              <Text style={styles.sectionTitle}>About</Text>
              <Text style={styles.description}>{brand.description}</Text>
              
              <Text style={styles.sectionTitle}>Industry</Text>
              <Text style={styles.industry}>{brand.industry}</Text>
              
              <Text style={styles.sectionTitle}>Founded</Text>
              <Text style={styles.founded}>{brand.founded}</Text>
              
              <Text style={styles.sectionTitle}>Headquarters</Text>
              <Text style={styles.headquarters}>{brand.headquarters}</Text>
            </View>
            
            <TouchableOpacity
              style={[
                styles.followButton,
                isFollowing && styles.followingButton
              ]}
              onPress={handleFollowPress}
            >
              <Text style={[
                styles.followButtonText,
                isFollowing && styles.followingButtonText
              ]}>
                {isFollowing ? 'Following ✓' : 'Follow'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 10,
  },
  backButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.white,
  },
  brandName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: colors.lightGray,
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  detailsContainer: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
    marginTop: 20,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: colors.lightGray,
    lineHeight: 24,
  },
  industry: {
    fontSize: 16,
    color: colors.lightGray,
  },
  founded: {
    fontSize: 16,
    color: colors.lightGray,
  },
  headquarters: {
    fontSize: 16,
    color: colors.lightGray,
  },
  followButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  followingButton: {
    backgroundColor: colors.success,
  },
  followButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  followingButtonText: {
    color: colors.white,
  },
});

export default BrandDetailScreen;