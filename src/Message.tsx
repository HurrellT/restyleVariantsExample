import {
  AllProps,
  composeRestyleFunctions,
  createVariant,
  useRestyle,
  VariantProps,
} from '@shopify/restyle';
import React from 'react';
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Theme} from './styles/base';

type RestyleProps = AllProps<Theme> &
  VariantProps<Theme, 'messageContainerVariants'> &
  VariantProps<Theme, 'messageTextVariants'>;

type OtherProps = Record<string, any>;

const containerVariants = createVariant<Theme, 'messageContainerVariants'>({
  themeKey: 'messageContainerVariants',
});
const composedContainerVariantsFunctions = composeRestyleFunctions<
  Theme,
  RestyleProps
>([containerVariants]);

const textVariants = createVariant<Theme, 'messageTextVariants'>({
  themeKey: 'messageTextVariants',
});
const composedTextVariants = composeRestyleFunctions<Theme, RestyleProps>([
  textVariants,
]);

const Message = ({
  extraStyles = {},
  extraTextStyles = {},
  children,
  variant = 'default',
}: any) => {
  const containerStyle = useRestyle<
    Theme,
    RestyleProps,
    OtherProps & {style: StyleProp<ViewStyle>}
  >(composedContainerVariantsFunctions, {
    variant,
    ...extraStyles,
  });
  const textStyle = useRestyle<
    Theme,
    RestyleProps,
    OtherProps & {style: StyleProp<TextStyle>}
  >(composedTextVariants, {
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
