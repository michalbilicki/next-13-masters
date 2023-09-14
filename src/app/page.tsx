import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-between bg-slate-100 p-24">
			<Link href="/products" className="text-black">
				Go to products list
			</Link>
		</main>
	);
}
