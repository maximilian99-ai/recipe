import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Affordability, Complexity } from '../models/meal';

interface MealDetailsProps {
  duration: number;
  complexity: Complexity;
  affordability: Affordability;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

function MealDetails({ duration, complexity, affordability, style, textStyle }: MealDetailsProps) { // 스타일을 연속적으로 적용하기 위해서 1. 화면 컴포넌트의 패러미터에 스타일 속성들을 추가(style와 textStyle을 props로 받음)
  return ( // 2. 기본 스타일은 배열에 두고 새로운 스타일은 배열에 요소로 추가해서 서로 합침(14:16, 19)
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }
});