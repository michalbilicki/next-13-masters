import Image from "next/image";
import { cn } from "@/lib/utils";

type CoverImageProps = {
	src: string;
	alt: string;
	height?: number;
	width?: number;
	className?: string;
};

export function CoverImage({ src, alt, height, width, className }: CoverImageProps) {
	return (
		<Image
			src={src}
			alt={alt}
			height={height ?? 300}
			width={width ?? 300}
			className={cn("p-4", className)}
		/>
	);
}
