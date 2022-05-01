import { Heading, Image, View } from "native-base";
import { Product } from "../../models/product";
import styles from "./styles";

interface Props {
	product: Product;
}

const Card = (props: Props) => {
	const { product } = props;
	const imageSize = 20;
	return (
		<View style={styles.cardContainer}>
			<Image
				style={styles.image}
				source={{ uri: product.images[product.images.length - 1] }}
				alt="Some picture"
				height={imageSize}
				width={imageSize}
			/>
			<Heading color={"primary.50"}>{product.title}</Heading>
		</View>
	);
};

export default Card;
