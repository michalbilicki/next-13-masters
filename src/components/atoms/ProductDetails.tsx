type ProductDetailsProps = {
	name: string;
	price: number;
	category: string;
};

export function ProductDetails({ name, price, category }: ProductDetailsProps) {
	return (
		<div className="px-4">
			<div className="flex flex-row justify-between">
				<h3 className="text-black">{name}</h3>
				<span className="text-black">
					{Intl.NumberFormat("en-us", { style: "currency", currency: "USD" }).format(price / 100)}
				</span>
			</div>
			<span className="text-gray-700">{category}</span>
		</div>
	);
}
