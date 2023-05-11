// OffsetText.tsx
import {JSX, createEffect, createSignal, onMount} from "solid-js";
import MinorOffsetText from "./MinorOffsetText";

interface Props {
	jobName: string;
	jobTitle: string;
	jobDates: string;
	jobDescription: string;
}

export default function ExperienceTab(props: Props): JSX.Element {
	let descriptionRef: HTMLDivElement | undefined = undefined;
	const [mouseOver, setMouseOver] = createSignal<boolean>(false);
	const [expanded, setExpanded] = createSignal<boolean>(false);
	const [descriptionHeight, setDescriptionHeight] =
		createSignal<string>("0px");

	createEffect(() => {
		const scrollHeight = descriptionRef?.scrollHeight;
		setDescriptionHeight(expanded() ? `${scrollHeight}px` : "0px");
		console.log(descriptionHeight());
	});

	onMount(() => {
		const scrollHeight = descriptionRef?.scrollHeight;
		setDescriptionHeight(expanded() ? `${scrollHeight}px` : "0px");
	});

	return (
		<div
			class={`font-mulish m-2 p-1 border-[1px] border-indigo-50 transition-all duration-100 ease-in cursor-pointer ${
				mouseOver() && "bg-indigo-50"
			}`}
			onMouseEnter={() => setMouseOver(true)}
			onMouseLeave={() => setMouseOver(false)}
			onClick={() => setExpanded(!expanded())}
		>
			<div class="flex justify-between items-center">
				<div class="flex justify-start flex-row">
					<MinorOffsetText text={props.jobName} />
					<h1>, {props.jobTitle}</h1>
				</div>
				<div class="flex flex-row items-center">
					<h1 class="mr-1">{props.jobDates}</h1>
					<svg
						fill="currentColor"
						stroke-width="0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1024 1024"
						height="1em"
						width="1em"
						style="overflow: visible;"
					>
						<path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
					</svg>
				</div>
			</div>
			<div
				class={`transition-all duration-100 ease-in overflow-hidden text-sm ${
					expanded() && "mt-2"
				}`}
				style={`max-height: ${descriptionHeight()}`}
				ref={descriptionRef}
			>
				<h1>{props.jobDescription}</h1>
			</div>
		</div>
	);
}
