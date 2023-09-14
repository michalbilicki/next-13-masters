import { ProductListItem, type ProductListItemProps } from "../molecules/ProductListItem";

type ProductListProps = {
	products: ProductListItemProps[];
};

export function ProductList({ products }: ProductListProps) {
	return (
		<ul className="flex flex-row gap-4" data-testid="products-list">
			{products.map((product) => (
				<ProductListItem key={product.id} {...product} />
			))}
		</ul>
	);
}
