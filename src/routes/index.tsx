import LinkOffsetText from "~/components/LinkOffsetText";
import MinorOffsetText from "~/components/MinorOffsetText";
import OffsetButton from "~/components/OffsetButton";
import OffsetText from "~/components/TitleOffsetText";

export default function Home() {
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
				<h1 class="font-fatface text-4xl tracking-wide">
					Hi <OffsetText text={"I'm Harry,"} /> <br />
					<OffsetText text={"Software Engineer"} /> & Student
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

			<div class="m-2 px-10 py-10 grid grid-cols-2">
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

			<div class="bg-indigo-50 m-2 px-10 py-10 grid grid-cols-2">
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
