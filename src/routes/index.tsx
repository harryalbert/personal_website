import {For, createSignal, onCleanup, onMount} from "solid-js";
import ExperienceTab from "~/components/ExperienceTab";
import LinkOffsetText from "~/components/LinkOffsetText";
import MinorOffsetText from "~/components/MinorOffsetText";
import OffsetButton from "~/components/OffsetButton";
import PersonalProjectsTab from "~/components/PersonalProjectTab";
import OffsetText from "~/components/TitleOffsetText";
import JobExperiences from "~/constants/JobExperiences";
import PersonalProjects from "~/constants/PersonalProjects";

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
					(Summer 2022) and{" "}
					<LinkOffsetText
						text={"Bubble"}
						link={"https://bubble.io/"}
						smallMargin
					/>{" "}
					(Summer 2023). This Summer I have returned to Bubble for a
					second internship.
				</h2>

				<div class="my-10">
					<OffsetButton
						text={"Download My Resume"}
						onClick={() => window.open("/resume.pdf", "_blank")}
					/>
				</div>
			</div>

			<div
				class={`bg-white m-2 px-10 py-10 grid ${
					isMobile() ? "grid-cols-1" : "grid-cols-2"
				}`}
			>
				<h1 class="font-fatface text-3xl tracking-wide">
					Languages, Technologies & Interests
				</h1>

				<h2 class="text-sm">
					<MinorOffsetText text={"Languages: "} />
					Javascript/Typescript/Node.js, Python, HTML/CSS, Java, C,
					F#, Solidity, Assembly
					<br />
					<br />
					<MinorOffsetText text={"Technologies: "} /> React, SolidJS,
					React Native, Next.js, Express.js, Tailwind, Scikit-Learn,
					PyTorch, Firebase, MongoDB Atlas, AWS
					<br />
					<br />
					<MinorOffsetText text={"Interests: "} /> Web Development,
					Mobile Development, LLMs, Web3, Smart Contract Tech, Full
					Stack Development, Data Visualization, Computer Graphics,
					UI/UX Design, and more!
				</h2>
			</div>

			<div class="bg-indigo-50 m-2 p-1">
				<h1 class="font-fatface text-[28px] tracking-wide mx-2">
					Experience
				</h1>
				<For each={JobExperiences}>
					{(job) => (
						<ExperienceTab
							jobName={job.jobName}
							jobTitle={job.jobTitle}
							jobDates={job.jobDates}
							jobDescription={job.jobDescription}
							jobLink={job.jobLink ?? undefined}
							mobile={isMobile()}
						/>
					)}
				</For>
			</div>

			<div class="bg-white m-2 p-1">
				<h1 class="font-fatface text-[28px] tracking-wide mx-2">
					Personal Projects
				</h1>
				<For each={PersonalProjects}>
					{(project) => (
						<PersonalProjectsTab
							projectName={project.projectName}
							projectDescription={project.projectDescription}
							projectLink={project.projectLink ?? undefined}
							projectImage={project.projectImage ?? undefined}
							mobile={isMobile()}
						/>
					)}
				</For>
			</div>

			<div
				class={`bg-indigo-50 m-2 px-10 py-10 grid ${
					isMobile() ? "grid-cols-1" : "grid-cols-2"
				}`}
			>
				<h1 class="font-fatface text-3xl tracking-wide">Contact Me</h1>

				<h2 class="text-sm">
					If you want to reach out my number is
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
					. I'm always down to talking about interesting projects and
					ideas!
				</h2>
			</div>
		</div>
	);
}
