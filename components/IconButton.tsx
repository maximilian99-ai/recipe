import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
}

function IconButton({ icon, color, onPress }: IconButtonProps) {
  return ( // 2. (16)
    <Pressable
      onPress={onPress}
      style={({ pressed }: { pressed: boolean }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  }
});