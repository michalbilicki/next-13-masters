import { type ProductListItemProps } from "@/components/molecules/ProductListItem";
import { ProductList } from "@/components/organisms/ProductList";

const products: ProductListItemProps[] = [
	{
		id: 1,
		name: "Product 1",
		category: "Category 1",
		price: 100,
		image: {
			src: "https://picsum.photos/300/300",
			alt: "Product 1 alternative text",
		},
	},
	{
		id: 2,
		name: "Product 2",
		category: "Category 1",
		price: 2137,
		image: {
			src: "https://picsum.photos/300/300",
			alt: "Product 2 alternative text",
		},
	},
	{
		id: 3,
		name: "Product 3",
		category: "Category 2",
		price: 1999,
		image: {
			src: "https://picsum.photos/300/300",
			alt: "Product 3 alternative text",
		},
	},
	{
		id: 4,
		name: "Product 4",
		category: "Category 2",
		price: 899,
		image: {
			src: "https://picsum.photos/300/300",
			alt: "Product 4 alternative text",
		},
	},
];

export default function ProductsPage() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-between bg-slate-100 p-24">
			<ProductList products={products} />
		</main>
	);
}
