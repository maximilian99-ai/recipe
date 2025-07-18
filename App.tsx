import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { RootStackParamList } from './utils/navigation-types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories'
            }}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            // options={({ route, navigation }) => { /* 내비게이션 옵션을 동적으로 설정하는 예시로 화면간 데이터를 전달하는 과정을 보여줌 */
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}