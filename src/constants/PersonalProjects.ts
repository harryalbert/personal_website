type PersonalProjectsType = {
	projectName: string;
	projectDescription: string;
	projectLink?: string;
	projectImage: string;
}[];

const PersonalProjects: PersonalProjectsType = [
	{
		projectName: "AI Lung Cancer Prediction Tool",
		projectDescription:
			"I created a neural network to predict lung cancer based on several easily self-diagnosable conditions. In conjuction with the creation of this model, I published a website where users can interact with the model. I did this in an effort to democratize access and allow users to play with the model.",
		projectLink: "https://lung-cancer-risk-assessment-tool.vercel.app/",
		projectImage: "/MLLungCancerPredictionTool.png",
	},
	{
		projectName: "GPT-Crossword",
		projectDescription:
			"I Used the ChatGPT API to create an AI powered crossword solving assistant which can give you either hints (if you just want a push in the right direction) or answers to your toughest crossword clues.",
		projectLink: "https://gpt-six-mu.vercel.app/",
		projectImage: "/GPTCrossword.png",
	},
	{
		projectName: "Devitas",
		projectDescription:
			"During my gap year before starting college, I created Devitas — a free, easy-to-use website builder geared toward students applying for college, jobs, and internships. I independently implemented a full-stack web application for Devitas using Node.js, JavaScript, and HTML.",
		projectImage: "/Devitas.png",
	},
];

export default PersonalProjects;
