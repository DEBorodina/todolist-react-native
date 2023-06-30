import React from 'react';
import { Modal, Pressable } from 'react-native';

import { styles } from './styles';
import { ModalProps } from './types';

export const MyModal: React.FC<ModalProps> = ({ children, onBlur }) => {
  return (
    <Modal visible={true} transparent={true} animationType="fade">
      <Pressable onPress={onBlur} style={styles.modal}>
        {children}
      </Pressable>
    </Modal>
  );
};
