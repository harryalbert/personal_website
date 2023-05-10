// OffsetText.tsx
import {JSX} from "solid-js";

interface Props {
	text: string;
	link: string;
}

export default function LinkOffsetText(props: Props): JSX.Element {
	return (
		<span class="relative inline-block mr-5">
			<h1 class="relative z-20 font-mulish text-base tracking-wide">
				<a href={props.link} target="_blank">
					{props.text}
				</a>
			</h1>
			<span class="bg-violet-300 absolute top-3.5 w-full h-1/5 z-10"></span>
		</span>
	);
}
