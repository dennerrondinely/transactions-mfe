import TransactionItem from '../components/TransactionItem';
import { globalStyles } from '../styles/globalStyles';
import { FlatList, Text, View } from 'react-native';

const transactions = [];

export default function Transactions() {
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
