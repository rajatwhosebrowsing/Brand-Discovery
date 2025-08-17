import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { colors } from '../constants/colors';

const BrandCard = ({ brand, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>
        <Image source={{ uri: brand.logo }} style={styles.logo} />
        <View style={styles.content}>
          <Text style={styles.name}>{brand.name}</Text>
          <Text style={styles.tagline} numberOfLines={2}>
            {brand.tagline}
          </Text>
          <View style={styles.industryTag}>
            <Text style={styles.industryText}>{brand.industry}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    marginRight: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 5,
  },
  tagline: {
    fontSize: 14,
    color: colors.lightGray,
    marginBottom: 8,
    lineHeight: 18,
  },
  industryTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(74, 144, 226, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(74, 144, 226, 0.5)',
  },
  industryText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
});

export default BrandCard;