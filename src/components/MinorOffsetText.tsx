// OffsetText.tsx
import {JSX} from "solid-js";

interface Props {
	text: string;
}

export default function MinorOffsetText(props: Props): JSX.Element {
	return (
		<span class="relative inline-block">
			<h1 class="relative z-20 font-mulish text-base tracking-wide">
				{props.text}
			</h1>
			<span class="bg-gradient-to-r from-violet-200 to-blue-200 absolute top-3.5 w-full h-1/5 z-10"></span>
		</span>
	);
}
