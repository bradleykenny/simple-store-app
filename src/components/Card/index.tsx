import { Image, Text, View } from "native-base";
import { Product } from "../../models/product";
import styles from "./styles";

interface Props {
	product: Product;
}

const Card = (props: Props) => {
	const { product } = props;
	return (
		<View style={styles.cardContainer}>
			<Text>{product.title}</Text>
			<Image
				source={{ uri: product.images[product.images.length - 1] }}
				alt="Some picture"
				size={"sm"}
			/>
		</View>
	);
};

export default Card;
