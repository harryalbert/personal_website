// OffsetText.tsx
import {JSX} from "solid-js";

interface Props {
	text: string;
}

export default function OffsetText(props: Props): JSX.Element {
	return (
		<span class="relative inline-block">
			<h1 class="relative z-20 font-fatface text-4xl tracking-wide">
				{props.text}
			</h1>
			<span class="bg-violet-400 absolute top-6 w-full h-2/5 z-10"></span>
		</span>
	);
}
