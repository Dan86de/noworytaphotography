import Image from "next/image";

import image1 from "@/images/example1.webp";
import image2 from "@/images/example2.webp";
import image3 from "@/images/example3.webp";
import image4 from "@/images/example4.webp";
import image5 from "@/images/example5.webp";
import { cn } from "@/lib/utils";

export const Photos = () => {
	const rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
				{[image1, image2, image3, image4, image5].map((image, imageIndex) => (
					<div
						key={image.src}
						className={cn(
							"relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
							rotations[imageIndex % rotations.length],
						)}
					>
						<Image
							src={image}
							alt=""
							sizes="(min-width: 640px) 18rem, 11rem"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
};
