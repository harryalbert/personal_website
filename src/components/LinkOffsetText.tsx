// OffsetText.tsx
import {JSX} from "solid-js";

interface Props {
	text: string;
	link: string;
	smallMargin?: boolean;
	noMargin?: boolean;
}

export default function LinkOffsetText(props: Props): JSX.Element {
	return (
		<span
			class={`relative inline-block ${
				props.noMargin ? "m-0" : props.smallMargin ? "m-1" : "mr-5"
			}`}
		>
			<a href={props.link} target="_blank">
				<h1 class="flex flex-row items-center relative z-20 font-mulish text-base tracking-wide">
					{props.text}
					<svg
						fill="currentColor"
						stroke-width="0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						height=".9em"
						width=".9em"
						style="overflow: visible;"
						class="ml-1"
					>
						<path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
						<path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
					</svg>
				</h1>
			</a>
			<span class="bg-gradient-to-r from-violet-200 to-blue-200 absolute top-3.5 w-full h-1/5 z-10"></span>
		</span>
	);
}
