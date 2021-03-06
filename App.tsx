import { NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./src/screens/Home";
import theme from "./src/theme";

export default function App() {
	const queryClient = new QueryClient();
	return (
		<NativeBaseProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Home />
			</QueryClientProvider>
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
