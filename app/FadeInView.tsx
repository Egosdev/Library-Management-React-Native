import React, { useEffect, useRef, ReactNode } from 'react';
import { Animated, ViewStyle } from 'react-native';

interface FadeInViewProps {
  style?: ViewStyle;
  children?: ReactNode;
}

const FadeInView: React.FC<FadeInViewProps> = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
