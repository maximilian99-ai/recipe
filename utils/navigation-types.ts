export type RootStackParamList = {
  Categories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}