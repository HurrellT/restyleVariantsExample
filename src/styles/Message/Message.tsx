import {Platform} from 'react-native';

const container = {
  flexDirection: 'row',
  alignItems: 'center',
};

const text = {
  color: 'text',
  fontFamily: 'Quicksand-Regular',
  fontSize: 14,
  marginStart: 'mini_xxs',
  paddingBottom: Platform.OS === 'ios' ? 'micro_s' : 'zero',
};

const messageHeight = {
  height: 16,
};

const messageVariants = {
  messageContainerVariants: {
    default: {
      ...container,
    },
    error: {
      ...container,
      ...messageHeight,
    },
  },
  messageTextVariants: {
    default: {
      ...text,
    },
    error: {
      ...text,
      color: 'error',
    },
  },
};

export default messageVariants;
