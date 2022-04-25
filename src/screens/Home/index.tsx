import { Text } from "native-base";
import { useProducts } from "../../hooks/useProducts";

const Home = () => {
	const { data } = useProducts();
	return data.products.map((item: any) => <Text>{item.title}</Text>);
};

export default Home;
