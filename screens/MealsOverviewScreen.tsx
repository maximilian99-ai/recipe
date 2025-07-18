import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { RootStackParamList } from '../utils/navigation-types';
import Meal from '../models/meal';

type MealsOverviewScreenProps = {
  route: RouteProp<RootStackParamList, 'MealsOverview'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'MealsOverview'>;
};

function MealsOverviewScreen({ route, navigation }: MealsOverviewScreenProps) { // 화면 컴포넌트는 react navigation 으로 { route, navigation } 패러미터를 자동으로 받음
  const catId = route.params.categoryId; // route.params 에서 categoryId 를 추출하여 현재 카테고리 ID를 가져옴

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )?.title || '';

    navigation.setOptions({ // 이 메서드는 객체를 옵션으로 설정
      title: categoryTitle
    });
  }, [catId, navigation]);

  function renderMealItem(itemData: { item: Meal }) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});