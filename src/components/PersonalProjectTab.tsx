// OffsetText.tsx
import {JSX, Show, createEffect, createSignal, onMount} from "solid-js";
import MinorOffsetText from "./MinorOffsetText";
import LinkOffsetText from "./LinkOffsetText";

interface Props {
	projectName: string;
	projectDescription: string;
	projectLink?: string;
	projectImage?: string;
	mobile?: boolean;
}

export default function PersonalProjectsTab(props: Props): JSX.Element {
	let descriptionRef: HTMLDivElement | undefined;
	const [mouseOver, setMouseOver] = createSignal<boolean>(false);
	const [expanded, setExpanded] = createSignal<boolean>(false);
	const [descriptionHeight, setDescriptionHeight] =
		createSignal<string>("0px");

	createEffect(() => {
		const scrollHeight = descriptionRef?.scrollHeight;
		setDescriptionHeight(expanded() ? `${scrollHeight}px` : "0px");
	});

	onMount(() => {
		const scrollHeight = descriptionRef?.scrollHeight;
		setDescriptionHeight(expanded() ? `${scrollHeight}px` : "0px");
	});

	return (
		<div
			class={`font-mulish m-2 p-1 border-[1px] border-indigo-50 transition-all duration-100 ease-in cursor-pointer ${
				(mouseOver() || expanded()) && "bg-indigo-50"
			}`}
			onMouseEnter={() => setMouseOver(true)}
			onMouseLeave={() => setMouseOver(false)}
			onClick={() => {
				if (expanded()) {
					setMouseOver(false);
				}
				setExpanded(!expanded());
			}}
		>
			<div class="flex">
				<div class="flex flex-grow justify-start">
					<div onClick={(event) => event.stopPropagation()}>
						{props.projectLink ? (
							<LinkOffsetText
								text={props.projectName}
								link={props.projectLink}
								noMargin
							/>
						) : (
							<MinorOffsetText text={props.projectName} />
						)}
					</div>
				</div>
				<div class="flex flex-shrink-0 items-center">
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
				class={`${
					props.mobile || !props.projectImage
						? "flex flex-col justify-center"
						: "grid grid-cols-2"
				} transition-all duration-200 ease-in overflow-hidden text-base w-full ${
					expanded() && "mt-2"
				}`}
				style={`max-height: ${
					descriptionHeight() == "0px" ? "0px" : "1000px"
				}`}
				ref={descriptionRef}
			>
				<h1
					class={
						!props.mobile
							? "flex flex-col justify-center items-start text-left"
							: ""
					}
				>
					{props.projectDescription}
				</h1>
				<Show when={props.projectImage}>
					<div class="w-full flex justify-center items-center mt-2">
						<img
							src={props.projectImage}
							class={`w-full`}
							alt={`image of ${props.projectName}`}
						></img>
					</div>
				</Show>
			</div>
		</div>
	);
}
