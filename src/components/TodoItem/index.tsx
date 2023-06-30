import React from 'react';
import { View } from 'react-native';

import Arrow from '../../../assets/arrow.svg';
import Trash from '../../../assets/trash.svg';
import { ITodo } from '../../../types';
import { useAppDispatch } from '../../hooks/redux';
import { DeleteToDo, DoneToDo } from '../../store/todoSlice';
import AppText from '../AppText';
import { RoundButton } from '../RoundButton';
import { styles } from './styles';

export const TodoItem: React.FC<{ todo: ITodo }> = ({ todo: { id, text, isDone } }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(DeleteToDo(id));
  };

  const handleDone = () => {
    dispatch(DoneToDo(id));
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{text}</AppText>
      <View style={styles.buttons}>
        <RoundButton onClick={handleDone} style={styles.button}>
          <View style={styles.circle}>{isDone && <Arrow width={20} height={20} />}</View>
        </RoundButton>
        <RoundButton onClick={handleDelete} style={styles.button}>
          <Trash width={20} height={20} />
        </RoundButton>
      </View>
    </View>
  );
};
