import {For, createSignal, onCleanup, onMount} from "solid-js";
import ConciseExperienceTab from "~/components/ConciseExperienceTab";
import ExperienceTab from "~/components/ExperienceTab";
import LinkOffsetText from "~/components/LinkOffsetText";
import MinorOffsetText from "~/components/MinorOffsetText";
import OffsetButton from "~/components/OffsetButton";
import OffsetText from "~/components/TitleOffsetText";

const jobExperiences = [
	{
		jobName: "Meta",
		jobTitle: "SWE Intern",
		jobDates: "05/2022 - 8/2022",
		jobDescription:
			"During my internship I created two full-scale projects, learned multiple new frameworks and programming languages, and wrote the second most lines of code in my entire team. I spent the majority of my time at Meta working on the web codebase. My work mainly involved React and GraphQl, as well as the use of many internal tools specific to Meta.",
	},
	{
		jobName: "Cadence Effects",
		jobTitle: "SWE Intern",
		jobDates: "07/2020 - 8/2021",
		jobDescription:
			"At Cadence I independently created many production and file management tools under the direction of the Head of Production. These tools, which I created using Python, integrated with existing workflow to streamline the production pipeline and improve file management efficiency. I also created a company intranet using node.js and python.",
	},
];
const conciseJobExperiences = [
	{
		jobName: "Williams College",
		jobTitle: "CS TA",
		jobDates: "02/2022 - 05/2023",
	},
	{
		jobName: "Plexus",
		jobTitle: "Programming Consultant",
		jobDates: "11/2021 - 02/2022",
	},
];

export default function Home() {
	const [windowWidth, setWindowWidth] = createSignal<number>(641);
	const isMobile = () => windowWidth() <= 640;

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};
	onMount(() => {
		setWindowWidth(window.innerWidth);

		window.addEventListener("resize", handleResize);
		onCleanup(() => window.removeEventListener("resize", handleResize));
	});

	return (
		<div class="font-mulish text-black">
			<div class="bg-indigo-50 m-2 px-10 py-2 ">
				<div class="flex justify-start mb-16">
					<LinkOffsetText
						text={"linkedin"}
						link={"https://www.linkedin.com/in/harry-albert/"}
					/>
					<LinkOffsetText
						text={"github"}
						link={"https://github.com/harryalbert/"}
					/>
				</div>
				<h1
					class={`font-fatface ${
						isMobile() ? "text-3xl" : "text-4xl"
					} tracking-wide`}
				>
					Hi <OffsetText text={"I'm Harry,"} isMobile={isMobile()} />{" "}
					<br />
					Student &{" "}
					<OffsetText
						text={"Software Engineer"}
						isMobile={isMobile()}
					/>
				</h1>

				<h2 class="mt-10 w-3/5">
					I am a student at Williams College majoring in Computer
					Science and Philosophy, and will be graduating in 2025. I am
					also a Neo Scholar and a former intern at Meta. This summer
					I will be interning at Bubble in NYC.
				</h2>

				<div class="my-10">
					<OffsetButton
						text={"View My Resume"}
						onClick={() =>
							window.open(
								"https://docs.google.com/document/d/15fBfxPwQn3QLyHhpzfUlZ3BqqN9IacEPcBfZqfHSUe0/edit?usp=sharing",
								"_blank"
							)
						}
					/>
				</div>
			</div>

			<div
				class={`bg-white m-2 px-10 py-10 grid ${
					isMobile() ? "grid-cols-1" : "grid-cols-2"
				}`}
			>
				<h1 class="font-fatface text-3xl tracking-wide">
					Languages & Technologies
				</h1>

				<h2 class="text-sm">
					<MinorOffsetText text={"Languages: "} /> Javascript,
					Typescript, HTML + CSS, Solidity, Python, C, Java, Hack/PHP,
					Assembly
					<br />
					<br />
					<MinorOffsetText text={"Technologies: "} /> React, SolidJS,
					Next.js, Tailwind, GraphQL, ChatGPT API, Relay, Web3, ERC
					721, Hardhat, Express.js, Firebase, MongoDB Atlas, AWS
				</h2>
			</div>

			<div class="bg-indigo-50 m-2 p-1">
				<h1 class="font-fatface text-[28px] tracking-wide mx-2">
					Experience
				</h1>
				<For each={jobExperiences}>
					{(job) => (
						<ExperienceTab
							jobName={job.jobName}
							jobTitle={job.jobTitle}
							jobDates={job.jobDates}
							jobDescription={job.jobDescription}
							mobile={isMobile()}
						/>
					)}
				</For>
				<For each={conciseJobExperiences}>
					{(job) => (
						<ConciseExperienceTab
							jobName={job.jobName}
							jobTitle={job.jobTitle}
							jobDates={job.jobDates}
							mobile={isMobile()}
						/>
					)}
				</For>
			</div>

			<div
				class={`bg-white m-2 px-10 py-10 grid ${
					isMobile() ? "grid-cols-1" : "grid-cols-2"
				}`}
			>
				<h1 class="font-fatface text-3xl tracking-wide">Contact Me</h1>

				<h2 class="text-sm">
					Please feel free to reach out to me, even if it's just to
					chat! My number is
					<LinkOffsetText
						smallMargin
						text={"(413)770-6129"}
						link={"tel:4137706129"}
					/>
					and my email is
					<LinkOffsetText
						smallMargin
						text={"harryalbert364@gmail.com"}
						link={"mailto:harryalbert364@gmail.com"}
					/>
				</h2>
			</div>
		</div>
	);
}
