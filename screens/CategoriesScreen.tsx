import { FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import { RootStackParamList } from '../utils/navigation-types';
import Category from '../models/category';

type CategoriesScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Categories'>;
};

function CategoriesScreen({ navigation }: CategoriesScreenProps) {
  function renderCategoryItem(itemData: { item: Category }) {
    function pressHandler() { // 3. pressHandler 함수를 정의하여 onPress 이벤트를 처리
      navigation.navigate('MealsOverview', { // 4. navigation.navigate 함수를 사용하여 MealsOverview 스크린으로 이동
        categoryId: itemData.item.id // 다음 화면으로 이동할 때 categoryId 를 전달
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler} // 2. CategoryGridTile 컴포넌트에 pressHandler 함수를 전달하여 onPress prop으로 바인딩
      />
    );
  }

  return (
    <FlatList /* 스크롤 기능이 있고, 카테고리 항목이 많이 있거나 얼마나 많은 항목이 포함될지 알 수 없을 때 사용하는 컴포넌트 */
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;