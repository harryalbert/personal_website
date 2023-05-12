// OffsetText.tsx
import {JSX, createSignal} from "solid-js";
import MinorOffsetText from "./MinorOffsetText";

interface Props {
	jobName: string;
	jobTitle: string;
	jobDates: string;
}

export default function ConciseExperienceTab(props: Props): JSX.Element {
	const [mouseOver, setMouseOver] = createSignal<boolean>(false);

	return (
		<div
			class={`font-mulish m-2 p-1 border-[1px] border-white transition-all duration-100 ease-in ${
				mouseOver() && "bg-white"
			}`}
			onMouseEnter={() => setMouseOver(true)}
			onMouseLeave={() => setMouseOver(false)}
		>
			<div class="flex justify-between items-center">
				<div class="flex justify-start flex-row">
					<MinorOffsetText text={props.jobName} />
					<h1>, {props.jobTitle}</h1>
				</div>
				<div class="flex flex-row items-center mr-4">
					<h1 class="mr-1">{props.jobDates}</h1>
				</div>
			</div>
		</div>
	);
}
