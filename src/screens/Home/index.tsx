import { FlatList, Text, View } from "native-base";
import Card from "../../components/Card";
import { useProducts } from "../../hooks/useProducts";
import styles from "./styles";

const Home = () => {
	const { data, isLoading } = useProducts();
	if (isLoading) {
		return (
			<View style={styles.loadingContainer}>
				<Text color={"primary.50"}>Loading...</Text>
			</View>
		);
	}

	return (
		<FlatList
			data={data?.products}
			renderItem={(data) => <Card product={data.item} />}
		/>
	);
};

export default Home;
