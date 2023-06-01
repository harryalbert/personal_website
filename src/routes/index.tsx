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
			"At Meta, I created two full-scale projects, learned multiple new frameworks and programming languages, and contributed the second most lines of code in my entire team. My work at Meta mainly involved working within the web codebase to create data visualizations using React and GraphQl.",
	},
	{
		jobName: "Cadence Effects",
		jobTitle: "SWE Intern",
		jobDates: "07/2020 - 8/2021",
		jobDescription:
			"At Cadence, I used Python to independently create many production and file management tools under the direction of the Head of Production. These tools integrated with existing workflow to streamline the production pipeline and improve file management efficiency. I also created a company intranet using node.js and python.",
	},
	{
		jobName: "Williams College",
		jobTitle: "CS TA",
		jobDates: "02/2022 - 05/2023",
		jobDescription:
			"I have TA'ed for CS 136: Data Structures and Advanced Programming, and CS 371: Graphics. For these classes I helped explain complex programming topics to students and graded assignments.",
	},
	{
		jobName: "Plexus",
		jobTitle: "Programming Consultant",
		jobDates: "11/2021 - 02/2022",
		jobDescription:
			"I created a custom Chrome Extension for Plexus, and helped them plan their launch within the Williams College community. I also created a set of design notes and critiques for their original website and helped create new design ideas from these critiques. Plexus raised a $1.2m pre-seed backed by a set of investors, including Betaworks, Outlander, and Forum.",
	},
];

type conciseJobExperience = {
	jobName: string;
	jobTitle: string;
	jobDates: string;
};
const conciseJobExperiences: Array<conciseJobExperience> = [];

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
					Science and Philosophy (expected graduation: 2025). I am
					also a{" "}
					<LinkOffsetText
						text={"Neo Scholar"}
						link={"https://neo.com/"}
						smallMargin
					/>{" "}
					and a former intern at{" "}
					<LinkOffsetText
						text={"Meta"}
						link={"https://about.meta.com/"}
						smallMargin
					/>{" "}
					(Summer 2022). This summer I will be interning at{" "}
					<LinkOffsetText
						text={"Bubble"}
						link={"https://bubble.io/"}
						smallMargin
					/>{" "}
					and based in NYC
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
					If you would like to reach out to me my number is
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
					. I am always open to talking about interesting projects and
					ideas.
				</h2>
			</div>
		</div>
	);
}
