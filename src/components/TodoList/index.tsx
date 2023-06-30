import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { useAppSelector } from '../../hooks/redux';
import { TodoItem } from '../TodoItem';
import { styles } from './styles';

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={[styles.container]}
        data={todos}
        renderItem={({ item }) => <TodoItem todo={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};
