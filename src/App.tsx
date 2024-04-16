import { StyleSheet, Text, View } from 'react-native';
import { Toasts } from '@backpackapp-io/react-native-toast';
import TestButton from './components/TestButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
	return (
		<SafeAreaProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<View style={styles.container}>
					<TestButton />
					<Toasts />
				</View>
			</GestureHandlerRootView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
