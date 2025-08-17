import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const GradientBackground = ({ children, style }) => {
  return (
    <Svg style={[{ position: 'absolute', top: 0, left: 0 }, style]} width={width} height={height}>
      <Defs>
        <RadialGradient
          id="radialGradient"
          cx="50%"
          cy="20%"
          r="80%"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset="0%" stopColor="#4A90E2" stopOpacity="0.9" />
          <Stop offset="30%" stopColor="#2E5BBA" stopOpacity="0.7" />
          <Stop offset="70%" stopColor="#1A237E" stopOpacity="0.5" />
          <Stop offset="100%" stopColor="#0D1B2A" stopOpacity="1" />
        </RadialGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#radialGradient)" />
    </Svg>
  );
};

export default GradientBackground;