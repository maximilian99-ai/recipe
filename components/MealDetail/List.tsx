import { View, Text, StyleSheet } from 'react-native';

interface ListProps {
  data: string[];
}

function List({ data }: ListProps) { /* List 커스텀 컴포넌트가 화면에 출력돼야할 데이터는 외부로부터 수신돼야하는데 이 데이터가 props를 통해 전달받고 배열 형태여야함 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((dataPoint: any) => ( // 1. (9:12)
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497'
  },
  itemText: {
    color: '#351401',
    textAlign: 'center'
  }
});