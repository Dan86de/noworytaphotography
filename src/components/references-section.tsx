import Image from "next/image";

import dci_logo from "@/logos/DCI.webp";
import efferz_logo from "@/logos/efferz_immo.webp";
import luna_logo from "@/logos/luna.webp";
import siepmann_logo from "@/logos/siepmann.webp";

import { SectionTitle, SectionWrapperRounded } from "./section";

const items = [
	{
		name: "Can Selma",
		title: "Immobilienberaterin, DC Immobilien",
		image: dci_logo,
		body: "Neben der einwandfreien fachlichen Qualifikation zeichnet sich Frau Noworyta durch Optimismus, Freundlichkeit und Teamfahigkeit aus.",
	},
	{
		name: "Maria Teresa Konig",
		title: "Home Staging Advanced Professional (DGHR)",
		image: luna_logo,
		body: "Aufgrund der vielen positiven Erfahrungen mochte ich hiermit uneingeschrankt eine Empfehlung fur Ihr Fotos aussprechen!",
	},
	{
		name: "Susanne Schmitz",
		title: "Immobilien Maklerin",
		image: efferz_logo,
		body: "Top Zusammenarbeit. Sie ist absolut professionell und hundertprozentig, wenn es um Ihre Arbeit geht.",
	},
	{
		name: "Uwe Siepmann",
		title: "Geschäftsführer / Zimmerermeister",
		image: siepmann_logo,
		body: "Sie zeugen gleichermaBen von Detailverliebtheit und dem Blick furs Wesentliche. Innen- und AuBenaufnahmen sind von Uberragender Qualitat.",
	},
];

export const ReferencesSection = () => {
	return (
		<div id="references">
			<SectionWrapperRounded>
				<SectionTitle>{"Referenzen"}</SectionTitle>
			</SectionWrapperRounded>
			<div className="relative flex  items-center" id="references">
				<div className="max-w-screen relative flex overflow-hidden pb-16">
					<div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
						{[...items, ...items].map((item, index) => (
							<div key={index} className="h-full px-2.5">
								<div className="border-primary/15 flex h-full w-[24rem] flex-col justify-between rounded-2xl border bg-background/5 px-8 py-6">
									<div className="pb-4 text-xl font-light text-primary">{item.body}</div>

									<div className="mt-auto flex items-center gap-4">
										<div className="relative h-10 w-10 overflow-hidden rounded-full">
											<Image
												src={item.image}
												className="rounded-ful inset-0 h-10 w-10 scale-105"
												alt={item.title}
												width={36}
												height={36}
											/>
										</div>

										<div className="flex flex-col text-sm">
											<div className="text-lg font-semibold tracking-wider text-primary">
												{item.name}
											</div>

											<div className="text-primary/75">{item.title}</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
