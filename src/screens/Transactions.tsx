import TransactionItem from '../components/TransactionItem';
import { globalStyles } from '../styles/globalStyles';
import { FlatList, Text, View } from 'react-native';
// @ts-ignore webpack-ignore
import { useMoneyStore } from 'Store/Store';

export default function Transactions() {
  const { transactions } = useMoneyStore();

  return (
    <View style={globalStyles.screenContainer}>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem {...item} />}
        ListEmptyComponent={
          <Text style={globalStyles.secondaryText}>
            Ainda não há nenhum item!
          </Text>
        }
        style={globalStyles.content}
      />
    </View>
  );
}
