import React, { useState } from 'react';
import { Pressable, TextInput } from 'react-native';

import Cross from '../../../assets/cross.svg';
import { useAppDispatch } from '../../hooks/redux';
import { AddToDo } from '../../store/todoSlice';
import AddButton from '../AddButton';
import AppText from '../AppText';
import { MyModal as Modal } from '../Modal';
import { RoundButton } from '../RoundButton';
import { styles } from './styles';
import { AddToDoFormProps } from './types';

export const AddTodoForm: React.FC<AddToDoFormProps> = ({ close }) => {
  const [todo, setTodo] = useState('');

  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (todo) {
      dispatch(AddToDo(todo));
      close();
    }
  };

  return (
    <Modal onBlur={close}>
      <Pressable style={styles.form}>
        <RoundButton onClick={close} style={styles.cross}>
          <Cross width={20} height={20} />
        </RoundButton>
        <AppText style={styles.title}>Add todo</AppText>
        <TextInput
          multiline={true}
          numberOfLines={5}
          style={styles.textInput}
          onChangeText={setTodo}
          value={todo}
          placeholder="New todo"
          placeholderTextColor={'#dadada'}
        />
        <AddButton onClick={handleAdd}>Add</AddButton>
      </Pressable>
    </Modal>
  );
};
