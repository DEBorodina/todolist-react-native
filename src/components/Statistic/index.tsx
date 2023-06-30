import React, { useMemo } from 'react';
import { View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

import { useAppSelector } from '../../hooks/redux';
import AppText from '../AppText';
import { chartConfig, styles } from './styles';

const Statistic = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const todosAmount = todos.length;

  const doneTodosAmount = todos.filter(({ isDone }) => isDone).length;

  const data = useMemo(
    () => ({ data: [doneTodosAmount / (todosAmount || 1)] }),
    [todosAmount, doneTodosAmount]
  );

  if (!todosAmount) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ProgressChart
        data={data}
        width={120}
        height={120}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={true}
      />
      <AppText style={styles.text}>
        <>
          {doneTodosAmount}/{todosAmount}
        </>
      </AppText>
    </View>
  );
};

export default Statistic;
