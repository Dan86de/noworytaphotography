import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionWrapper {
	children: ReactNode | ReactNode[];
	className?: string;
}

export const SectionWrapper = ({ children, className }: SectionWrapper) => {
	return (
		<div className={cn("relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
			{children}
		</div>
	);
};

interface SectionWrapperRounded {
	children: ReactNode | ReactNode[];
	className?: string;
}

export function SectionWrapperRounded({ children, className }: SectionWrapperRounded) {
	return (
		<div className={cn("py-8 lg:py-16", className)}>
			<div className="bg-background/2.5 relative py-8 md:rounded-3xl lg:rounded-[3rem] xl:py-16">
				<div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>

				<div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 gap-2 rounded-full bg-background p-1.5">
					<div className="h-1.5 w-8 rounded-lg bg-primary"></div>
					<div className="h-1.5 w-8 rounded-lg bg-primary"></div>
					<div className="h-1.5 w-8 rounded-lg bg-primary"></div>
				</div>

				<div className="absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>

				<div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 gap-2 rounded-full bg-background p-1.5">
					<div className="h-1.5 w-8 rounded-lg bg-primary"></div>
					<div className="h-1.5 w-8 rounded-lg bg-primary"></div>
					<div className="h-1.5 w-8 rounded-lg bg-primary"></div>
				</div>

				<SectionWrapper>{children}</SectionWrapper>
			</div>
		</div>
	);
}

export function SectionTitle({
	children,
	className,
}: {
	children: ReactNode | ReactNode[];
	className?: string;
}) {
	return (
		<h2
			className={cn(
				"text-center font-headings text-2xl font-light leading-[1.125] text-primary md:text-4xl lg:text-5xl",
				className,
			)}
		>
			{children}
		</h2>
	);
}
