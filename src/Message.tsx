import {
  composeRestyleFunctions,
  createVariant,
  useRestyle,
} from '@shopify/restyle';
import React from 'react';
import {Text, View} from 'react-native';

const containerVariants = createVariant<any, 'messageContainerVariants'>({
  themeKey: 'messageContainerVariants',
});

const textVariants = createVariant<any, 'messageTextVariants'>({
  themeKey: 'messageTextVariants',
});

const Message = ({
  extraStyles = {},
  extraTextStyles = {},
  children,
  variant = 'default',
}: any) => {
  const containerStyle = useRestyle(
    composeRestyleFunctions([containerVariants]),
    {
      variant,
      ...extraStyles,
    },
  );
  const textStyle = useRestyle(composeRestyleFunctions([textVariants]), {
    variant,
    ...extraTextStyles,
  });

  return (
    <View {...containerStyle}>
      <Text {...textStyle}>{children}</Text>
    </View>
  );
};

export default Message;
