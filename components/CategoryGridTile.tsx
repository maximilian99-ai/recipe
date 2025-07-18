import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

interface CategoryGridTileProps {
  title: string;
  color: string;
  onPress: () => void;
}

function CategoryGridTile({ title, color, onPress }: CategoryGridTileProps) {
  return (
    <View style={styles.gridItem}>
      <Pressable /* 그리드 타일을 눌러서 새 페이지로 이동하기 위해서 사용하는 컴포넌트 */
        android_ripple={{ color: '#ccc' }} // 안드로이드에서 누를 때 물결 효과를 주기 위해서 사용한 스타일
        style={({ pressed }: { pressed: boolean }) => [ // 특정 항목을 눌렀을 때 스타일을 적용하기 위해 스타일 속성 값을 조건에 따라 반환하는 함수
          styles.button, // 버튼 스타일
          pressed ? styles.buttonPressed : null // 버튼의 눌림 상태에 따라 스타일을 적용
        ]}
        onPress={onPress} /* 두 화면 사이를 내비게이션을 통해 이동하려면 1. 부모 컴포넌트로부터 전달받은 prop을 바인딩 */
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white', // 그림자 효과를 위해 배경 속성을 추가
    shadowColor: 'black', /* 41줄까지 iOS에서 그림자 효과를 위해 추가한 rn 고유의 스타일 속성 */
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible' // OS별로 스타일 설정을 위해서 Platform api를 사용
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});