"use client";

import Link from "next/link";

import { GridPattern, generateGridPattern } from "./grid-pattern";
import { Photos } from "./photos";
import { SectionWrapper } from "./section";
import { InstagramIcon, LinkedInIcon } from "./social-icons";

const blocks = generateGridPattern(40, 10, 80);

export const HeroSection = () => {
	return (
		<div className="relative inset-0 h-screen overflow-hidden bg-background">
			<GridPattern
				offsetX={0}
				offsetY={0}
				size={64}
				className="absolute -inset-x-0.5 -top-1/4 h-[150%] w-full skew-y-12 stroke-primary/10 stroke-[2] [mask-image:radial-gradient(#274e32,transparent_70%)]"
			>
				{blocks.map(([row, column], index) => (
					<GridPattern.Block
						v-for="([row, column], index) in blocks"
						key={index}
						row={row}
						column={column}
						className="fill-primary/5 transition duration-500 hover:fill-primary"
					/>
				))}
			</GridPattern>
			<div className="flex h-full flex-col items-center justify-center pt-12 md:items-center xl:pt-40">
				<SectionWrapper>
					{/* <div className="relative h-24 w-24 overflow-hidden rounded-full">
						<Image
							src={avatars}
							alt=""
							className="absolute inset-0 h-full w-full rounded-lg object-cover"
						/>
					</div> */}
					<div className="max-w-2xl">
						<h1 className="text-3xl font-bold tracking-tight text-primary sm:text-5xl md:text-4xl lg:text-5xl">
							Hallo, mein Name ist Kascha
						</h1>
						<p className="pt-4 text-zinc-950 md:text-lg lg:text-xl">
							Ich bin Architekturfotografin. Jeder Innenraum hat seine Einzigartigkeit, die ich
							durch meine Kamera festhalte und erzähle.
						</p>
						<br />
						<p className="md:text-lg lg:text-xl">
							In meiner Arbeit bemühe ich mich, jedes Detail zu beachten, weil:
						</p>
						<strong className="block pt-4 text-center font-headings text-2xl text-primary underline xl:pt-2 xl:text-left xl:text-3xl">
							{`"der Teufel steckt im Detail"`}
						</strong>
					</div>
					<div className="mt-6 flex justify-center gap-6 md:justify-start">
						<SocialLink
							href="https://www.instagram.com/knoworyta_photo/"
							aria-label="Follow on Instagram"
							icon={InstagramIcon}
						/>
						<SocialLink
							href="https://www.linkedin.com/in/katarzyna-noworyta-a7719a1a3/"
							aria-label="Follow on LinkedIn"
							icon={LinkedInIcon}
						/>
					</div>
				</SectionWrapper>
				<Photos />
			</div>
		</div>
	);
};

function SocialLink({
	icon: Icon,
	...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
	icon: React.ComponentType<{ className?: string }>;
}) {
	return (
		<Link className="group -m-1 p-1" {...props}>
			<Icon className="h-6 w-6 fill-primary transition group-hover:fill-zinc-700" />
		</Link>
	);
}
