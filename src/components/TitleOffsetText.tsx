// OffsetText.tsx
import {JSX} from "solid-js";

interface Props {
	text: string;
	isMobile?: boolean;
}

export default function OffsetText(props: Props): JSX.Element {
	return (
		<span class="relative inline-block">
			<h1
				class={`relative ${
					props.isMobile ? "text-3xl" : "text-4xl"
				} z-20 font-fatface tracking-wide`}
			>
				{props.text}
			</h1>
			<span class="bg-gradient-to-r from-violet-300 to-blue-300 absolute top-6 w-full h-2/5 z-10"></span>
		</span>
	);
}
