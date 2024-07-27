type JobExperiencesType = {
	jobName: string;
	jobTitle: string;
	jobDates: string;
	jobDescription: string;
	jobLink?: string;
}[];

const JobExperiences: JobExperiencesType = [
	{
		jobName: "Bubble",
		jobTitle: "Software Engineer, Intern",
		jobDates: "Summer 2023 & 2024",
		jobDescription:
			"Bubble is a no-code web development platform. For my first summer at Bubble I worked on the Growth Team, acting as a full time engineer by completing sprint tickets and contributing to AGILE ceremonies. During my internship I ideated and executed a project to refresh new hire onboarding, used by all new hires at Bubble, and created a universal set of standards for writing and maintaining documentation. I also contributed to multiple successful experiments, including improving the editor UI and user journey. \n For my second summer at Bubble I worked on the Mobile Team. During my internship, I led the planning, shaping, and execution of a substantial three-month project using SolidJS and React Native. I also quickly formed cross-team relationships with design, product, and engineering peers to ensure smooth coordination and timely releases of new features.",
		jobLink: "https://bubble.io/",
	},
	{
		jobName: "Meta",
		jobTitle: "Software Engineer, Intern",
		jobDates: "Summer 2022",
		jobDescription:
			"I worked on the Service Efficiency & Capacity Tooling Team at Meta. During my time at Meta, I created two dynamic data visualization projects used by many engineers outside of the team. I also interviewed Meta engineers and gathered feedback in order to tailor projects to, and advocate for, their needs. I utilized this user feedback to update my project designs, and in the process of creating my project I wrote the second most lines of code of any engineer in the team",
		jobLink: "https://about.meta.com/",
	},
	{
		jobName: "Cadence Effects",
		jobTitle: "Software Engineer",
		jobDates: "July 2020 – August 2021",
		jobDescription:
			"Cadence Effects is a VFX company based in New Lebanon, NY. I Took a gap year to work as a full time software engineer at Cadence. During my gap year, I independently ideated and executed efficiency tools under the direction of the Head of Production. I also streamlined the production pipeline by creating file management tools which integrated with existing workflows, and automated video transferring tasks by creating tools that interacted with the company's web-based video storage platform. Finally, I created and maintained a company intranet",
		jobLink: "https://cadence-effects.com/",
	},
	{
		jobName: "Williams College",
		jobTitle: "CS TA",
		jobDates: "February 2022 – May 2024",
		jobDescription:
			"I have TA'ed for CS 136: Data Structures and Advanced Programming, and CS 371: Graphics. For these classes I helped explain complex programming topics to students and graded assignments.",
	},
	{
		jobName: "Plexus Notes",
		jobTitle: "Programming Consultant",
		jobDates: "November 2021 – February 2022",
		jobDescription:
			"Plexus is a smart note taking startup founded by a Williams College alumnus. I created a custom Chrome Extension for Plexus, and helped them plan their launch within the Williams College community. I also created a set of design notes and critiques for their original website and helped create new design ideas from these critiques. Plexus raised a $1.2m pre-seed backed by a set of investors, including Betaworks, Outlander, and Forum.",
		jobLink: "https://plexus.earth/",
	},
];

export default JobExperiences;
