import { StyleProp } from "react-native";

export {Styles}

const Styles: Record<string, StyleProp<any>> = {
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
} as const