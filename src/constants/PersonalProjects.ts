type PersonalProjectsType = {
	projectName: string;
	projectDescription: string;
	projectLink?: string;
	projectImage?: string;
}[];

const PersonalProjects: PersonalProjectsType = [
	{
		projectName: "Design Justice Assistant",
		projectDescription:
			"I created a website for an AI design justice assistant that helps users consider the impact of their projects on different communities and encourages engagement with stakeholders.",
		projectLink: "https://design-justice-assistant.vercel.app/",
		projectImage: "/DesignJusticeAssistant.png",
	},
	{
		projectName: "Booktrak",
		projectDescription:
			"I designed and created Booktrak, a platform for Williams students to buy and sell used books linked to specific classes.",
		projectLink:
			"https://drive.google.com/file/d/1y5jxcYpGfvBr2p4P4GuF56aErHf5KXS2/view",
	},
	{
		projectName: "ML Lung Cancer Prediction Tool",
		projectDescription:
			"I developed a neural-network model to predict lung cancer risk based on self-diagnosable conditions and published an interactive website for easy user access.",
		projectLink: "https://lung-cancer-risk-assessment-tool.vercel.app/",
		projectImage: "/MLLungCancerPredictionTool.png",
	},
	{
		projectName: "GPT-Crossword",
		projectDescription:
			"I created an AI powered crossword solving assistant that can give you hints or answers to your toughest crossword clues.",
		projectLink: "https://gpt-six-mu.vercel.app/",
		projectImage: "/GPTCrossword.png",
	},
	{
		projectName: "CAREER Programming Language",
		projectDescription:
			"I created CAREER (Comprehensive Automated Resume & Employment Experience Renderer), a programming language that takes in basic text and outputs a beautifully formatted resume. My resume was created using CAREER",
	},
	{
		projectName: "Devitas",
		projectDescription:
			"During my gap year before starting college, I created Devitas — a free, easy-to-use website builder geared toward students applying for college, jobs, and internships. I independently implemented a full-stack web application for Devitas using Node.js, JavaScript, and HTML.",
		projectImage: "/Devitas.png",
	},
];

export default PersonalProjects;
