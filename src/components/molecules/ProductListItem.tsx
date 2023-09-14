import { CoverImage } from "../atoms/CoverImage";
import { ProductDetails } from "../atoms/ProductDetails";

export type ProductListItemProps = {
	id: number;
	name: string;
	price: number;
	category: string;
	image: {
		src: string;
		alt: string;
	};
};

export function ProductListItem({ name, price, category, image }: ProductListItemProps) {
	return (
		<div className="flex cursor-pointer flex-col p-4 shadow-lg [&>img]:hover:scale-105">
			<CoverImage src={image.src} alt={image.alt} height={300} width={300} className="p-4" />
			<ProductDetails name={name} price={price} category={category} />
		</div>
	);
}
