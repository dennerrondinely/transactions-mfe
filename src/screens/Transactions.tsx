import TransactionItem, {
  TransactionItemProps,
} from '../components/TransactionItem';
import { globalStyles } from '../styles/globalStyles';
import { FlatList, Text, View } from 'react-native';
// @ts-ignore webpack-ignore
import { useMoneyStore } from 'Store/Store';

// export const transactions: TransactionItemProps[] = [
//   {
//     category: 'income',
//     date: '2025-08-21',
//     description: 'Salário mensal',
//     value: 4500.0,
//   },
//   {
//     category: 'food',
//     date: '2025-08-20',
//     description: 'Almoço no restaurante',
//     value: 45.9,
//   },
//   {
//     category: 'house',
//     date: '2025-08-19',
//     description: 'Conta de luz',
//     value: 230.0,
//   },
//   {
//     category: 'education',
//     date: '2025-08-18',
//     description: 'Curso online',
//     value: 150.0,
//   },
//   {
//     category: 'travel',
//     date: '2025-08-17',
//     description: 'Passagem de ônibus',
//     value: 85.0,
//   },
//   {
//     category: 'income',
//     date: '2025-08-16',
//     description: 'Freelance de design',
//     value: 800.0,
//   },
//   {
//     category: 'food',
//     date: '2025-08-15',
//     description: 'Compra no mercado',
//     value: 320.0,
//   },
//   {
//     category: 'house',
//     date: '2025-08-14',
//     description: 'Aluguel do mês',
//     value: 1200.0,
//   },
//   {
//     category: 'education',
//     date: '2025-08-13',
//     description: 'Livro didático',
//     value: 90.0,
//   },
//   {
//     category: 'travel',
//     date: '2025-08-12',
//     description: 'Reserva de hotel',
//     value: 480.0,
//   },
//   {
//     category: 'income',
//     date: '2025-08-11',
//     description: 'Venda de produto',
//     value: 250.0,
//   },
//   {
//     category: 'food',
//     date: '2025-08-10',
//     description: 'Jantar delivery',
//     value: 72.5,
//   },
//   {
//     category: 'house',
//     date: '2025-08-09',
//     description: 'Manutenção elétrica',
//     value: 150.0,
//   },
//   {
//     category: 'education',
//     date: '2025-08-08',
//     description: 'Mensalidade faculdade',
//     value: 890.0,
//   },
//   {
//     category: 'travel',
//     date: '2025-08-07',
//     description: 'Combustível para viagem',
//     value: 220.0,
//   },
//   {
//     category: 'income',
//     date: '2025-08-06',
//     description: 'Comissão de vendas',
//     value: 1200.0,
//   },
//   {
//     category: 'food',
//     date: '2025-08-05',
//     description: 'Café da manhã',
//     value: 18.0,
//   },
//   {
//     category: 'house',
//     date: '2025-08-04',
//     description: 'Conta de água',
//     value: 80.0,
//   },
//   {
//     category: 'education',
//     date: '2025-08-03',
//     description: 'Material escolar',
//     value: 60.0,
//   },
//   {
//     category: 'travel',
//     date: '2025-08-02',
//     description: 'Aluguel de carro',
//     value: 300.0,
//   },
// ];
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
