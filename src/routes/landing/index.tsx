import { titleText, page, smallTitle, headerContent } from './index.module.css';

export default function Landing() {
	return (
		<div className={page}>
			<header>
				<div className={headerContent}>
					<figure>
						<img src="https://avatars.githubusercontent.com/u/9036846" alt="Alex Jeffcott Avatar" />
						<figcaption>
							<svg
								width="480"
								height="320"
								viewBox="0 0 600 400"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
							>
								<defs>
									<linearGradient
										x1="29.268114%"
										y1="15.2524038%"
										x2="70.8889394%"
										y2="74.6384215%"
										id="linearGradient-1"
									>
										<stop stop-color="#D123C2" offset="0%"></stop>
										<stop stop-color="#640CB2" offset="100%"></stop>
									</linearGradient>
									<path id="topSemiCircle" d="M 120, 200 a 175,175 0 1,1 350,0" />
									<path id="bottomSemiCircle" d="M 100, 200 a 175,175 0 1,0 390,0" />
								</defs>

								<text dy="1" font-size="40" stroke="red" fill="white" textLength="0">
									<animate
										id="ff_bottomText_anim"
										fill="freeze"
										attributeName="textLength"
										from="0"
										to="560"
										dur="5s"
									/>
									<textPath
										startOffset="50"
										textLength="531"
										href="#bottomSemiCircle"
										aria-label="MAGAZINE"
									>
										<tspan>frontend developer</tspan>
										<animate
											id="chrome_bottomText_anim"
											fill="freeze"
											attributeName="textLength"
											from="0"
											to="550"
											dur="5s"
										/>
									</textPath>
								</text>
								<text dy="1" font-size="40" stroke="red" fill="white" textLength="531">
									<animate
										id="ff_topText_anim"
										fill="freeze"
										attributeName="textLength"
										from="0"
										to="531"
										dur="3s"
									/>
									<textPath
										textLength="531"
										startOffset="25"
										href="#topSemiCircle"
										aria-label="Smashing"
									>
										<tspan>Alex Jeffcott</tspan>
										<animate
											id="chrome_topText_anim"
											fill="freeze"
											attributeName="textLength"
											from="0"
											to="531"
											dur="3s"
										/>
									</textPath>
								</text>
							</svg>
						</figcaption>
					</figure>
					<div>
						<span className={smallTitle}>frontend developer</span>
						<h1 className={titleText}>Alex Jeffcott</h1>
						<button>contact me</button>
					</div>
				</div>
			</header>
			<main>
				<section>
					<h2>About Me</h2>
					<p>
						As a frontend developer with a special interest in automating quality assurance, web
						APIs and integrations (sdks and Chrome extensions), I have spent the last 6 years or so
						working with the wide variety of colleagues and techs needed to take a web application
						from local development to production.
					</p>
				</section>
				<hr />
				<section>
					<h2>What People Say About Me</h2>
					<article>
						<h3>
							Katarzyna: Data in User Experience Team at Trade Republic
							<span>Katarzyna worked with Alex on the same team</span>
						</h3>
						<p>Any team that has Alex onboard can consider themselves lucky.</p>
						<p>
							I have worked with Alex for nearly 2 years in Growth Team at AMBOSS. His user-centric
							mindset and passion for high-quality product had invaluable input to the successes of
							the team as well as the team dynamic itself.
						</p>
						<p>
							What impressed me the most is how growth-focused, agile and open-minded Alex is. He
							would always seek feedback and encourage discussions: from technical solutions,
							through processes to work culture.
						</p>
						<p>
							While being an engineer, he did not only do outstanding work in his area of
							profession. Alex took time to understand the user behavior, the nuances of the data
							world, which only accelerated his business understanding and impact.
						</p>
						<p>
							I would be very happy to work with Alex again and I whole heartily recommend this
							experience.
						</p>
					</article>
					<article>
						<h3>
							Timo: Engineering Manager at AMBOSS<span>Timo managed Alex directly</span>
						</h3>
						<p>
							Alex is an incredibly curious person; he enjoys deep-diving into new learning
							opportunities. He wields this curiosity as a tool to get involved in projects beyond
							the limits of his team.
						</p>
						<p>
							This contributes to his understanding of the business and stronger connections to the
							company he works at. His Very British Humour and eloquence often make him a great
							conversationalist and an enjoyable person to work with.
						</p>
						<p>
							As a Software Developer, he is very proficient in his craft and can quickly dissect
							problems and find solutions to them. He cares a lot about the quality of the code he
							interacts with and will work towards improving both readability and test coverage.
						</p>
						<p>
							He is one of the people to whom you can paint a picture of the problem that needs
							solving and he will figure out the details from there without requiring guidance, but
							he will also raise any issues or uncertainties if he encounters them.
						</p>
						<p>
							Alex has a strong drive to improve himself and he will seek out opportunities for this
							both on his own and from his manager.
						</p>
						<p>
							I have been both AlexU+2019s colleague and people manager and would be glad to be
							either again.
						</p>
					</article>
					<article>
						<h3>
							Robert: Product Manager<span>Robert managed Alex directly</span>
						</h3>
						<p>Alex is a chameleon that stands out.</p>
						<p>
							While Alex has a very solid skillset in web standards, core JavaScript, testing and
							automation, I think what impresses me most about him is his ability to flexibly adapt
							and grow.
						</p>
						<p>
							Over the course of our collaboration at AMBOSS, the company ran through different
							stages of engineering organization maturity.
						</p>
						<p>
							Alex was always a part of this development in seeing the demands at hand, and using
							his experience or expanding his skillset to help our teams grow and bridge gaps.
							Whether it was setting up testing for our deployment pipelines across multiple teams,
							developing MVPs for new products to help our company grow, or mentoring juniors and
							coaching peers.
						</p>
						<p>
							As a product manager I found his input to usability and accessibility invaluable. He
							always thought things through beyond requirements and feature briefs, encouraging a
							culture of open feedback and discussion.
						</p>
						<p>I would be excited to work with Alex again.</p>
					</article>
					<article>
						<h3>
							Rubén: Building engineering teams<span>Rubén managed Alex directly</span>
						</h3>
						<p>Alex is a passionate and nimble engineer that has a product-centric mindset.</p>
						<p>
							When we worked together, he frequently advocated for striking where there was the most
							potential value and constantly challenged our priorities to help keep us focused. He
							reached beyond the team to get more data about the market and our users, and didn't
							mind stepping out of his comfort-zone to work on unfamiliar technologies when
							required.
						</p>
						<p>
							Alex would be a great addition to any team that values customer-centricity, empowered
							engineering teams, and flexible product development.
						</p>
					</article>
					<article>
						<h3>
							Florian: Software Developer at AMBOSS
							<span>Florian worked with Alex on the same team</span>
						</h3>
						<p>
							AMBOSS values people who can get stuff done and Alex embodied that spirit like few
							other people. Even though he joined our company as a frontend developer, he quickly
							showed that he can easily get up to speed in very different environments and tech
							stacks and deliver features that really make a difference. Among the many improvements
							he spearheaded in the frontend chapter, the one that stands out the most is when he
							identified our tests to be bottleneck for developer productivity. He subsequently came
							up with a proposal on how to improve things and saw the whole thing through to the
							end. This included working with developers from various teams and departments and
							definitely improved our ability, as a company, to deliver quality work with
							confidence. And all of this was driven by a desire to do meaningful work and keep an
							eye on the cost/benefit ratio. I wouldn’t be surprised to learn that he’s product
							manager at night and developer by day.
						</p>
						<p>
							Another one of his qualities I always valued a lot is that he is not afraid to come up
							with solutions that don’t utilize mainstream technologies, since not everything needs
							to be hyper scalable right from the start. The tech landscape definitely needs more
							people like that!
						</p>
					</article>
					<article>
						<h3>
							Çağlar: Growth Product Manager at AMBOSS
							<span>Çağlar worked with Alex on the same team</span>
						</h3>
						<p>
							Software products are never complete and never perfect. When working with traditional
							teams, the product development process goes by the books, limiting agility and
							creativity due to the boundaries between different roles. Working with Alex is quite
							the opposite of that - where he’s agile and not limiting himself with the boundaries
							of roles, which helps the team to deliver better.
						</p>
						<p>
							AlexU+2019s good qualities are supporting a team a lot, both the discovery and
							delivery. His understanding of the user experience supports building new ideas, his
							skeptical approach to the ideas and data helps the team to focus on the right thing
							without leaving any details, and his experience helps deliver them properly.
						</p>
						<p>
							His can-do attitude, skeptical approach, technical courage, data understanding, and
							communication skills would be something every organization would look for.
						</p>
					</article>
					<article>
						<h3>
							Antonella: Design Lead at AMBOSS
							<span>Antonella worked with Alex on the same team</span>
						</h3>
						<p>
							Everyone would love to have a colleague like Alex, he is a dedicated person, and he
							tries to look at problems from all angles to see what is the best way to solve them.
							He takes ownership of the projects and can lead them. He works well with others and
							helps them, and tries to push others to become better. He knows how to talk and work
							together with others. He constantly looks for ways to improve and for opportunities to
							learn, and never settles for the status quo.
						</p>
					</article>
					<article>
						<h3>
							Jonathan: Engineering Leader, Technology Enthusiast, Chartered Engineer
							<span>Jonathan worked with Alex on the same team</span>
						</h3>
						<p>
							While at AMBOSS, I ran a fast-track project to develop and deploy an SDK to better
							handle frontend events across the platform. This was needed urgently in response to
							event-data quality issues, which were believed to be linked to inconsistent
							application of our privacy software. Alex was one of the leading contributors to the
							SDK, and led the implementation across the majority of our product. He acted as a
							reviewing peer for many of the other project contributors, and also was the technical
							focal point for the automated testing of the product post implementation.
						</p>
						<p>
							His positive attitude, sense of ownership and technical independence made him a really
							key success factor in the project, and I would be very glad to work with him again on
							future projects.
						</p>
					</article>
				</section>
				<hr />
				<section>
					<h2>show and tell</h2>
					<h3>An open source javascript library</h3>
					<p>
						I felt that there was no cohensive solution for the relatively common product desire to
						annotate text based on keywords, so I created one as a passion project.
					</p>
					<p>
						It is very much under development, but seeks to bring together fast keyword matching
						with DOM annotation.
					</p>
					<ul>
						<li>
							<a href="https://github.com/AlexJeffcott/adorn">
								https://github.com/AlexJeffcott/adorn
							</a>
						</li>
						<li>
							<a href="https://www.npmjs.com/package/@fairfox/adorn" rel="nofollow">
								https://www.npmjs.com/package/@fairfox/adorn
							</a>
						</li>
					</ul>
					<h3>A Medium article about e2e testing infrustracture</h3>
					<p>
						After creating the end-to-end testing infrustrcture for AMBOSS GmbH to share some of the
						knowledge gained from the experience.
					</p>
					<ul>
						<li>
							<a
								href="https://medium.com/amboss/value-and-quality-an-epic-story-of-end-to-end-testing-architecture-38a4bc47a2d4"
								rel="nofollow"
							>
								https://medium.com/amboss/value-and-quality-an-epic-story-of-end-to-end-testing-architecture-38a4bc47a2d4
							</a>
						</li>
					</ul>
				</section>
				<hr />
				<section>
					<h2>experience</h2>
					<article>
						<h3>
							Frontend Developer - AMBOSS GmbH<span>Jun 2019 to Jun 2022 (3 years)</span>
						</h3>
						<p>
							Alongside team-mates in the Growth team, I had the opportunity to create and own
							business-critical paths which were interacted with on average 3 million times a month,
							viz.
						</p>
						<ul>
							<li>
								auth pages at{' '}
								<a href="http://www.amboss.com/us/account/login" rel="nofollow">
									www.amboss.com/us/account/login
								</a>
							</li>
							<li>
								paywalls at{' '}
								<a href="http://www.amboss.com/us/knowledge/Diabetes_insipidus" rel="nofollow">
									www.amboss.com/us/knowledge/Diabetes_insipidus
								</a>
							</li>
							<li>AMBOSS Chrome extension</li>
							<li>AMBOSS Anki Addon</li>
							<li>Analytics SDK to centralise all tracking and consent</li>
							<li>e2e testing infrastructure</li>
						</ul>
					</article>
					<article>
						<h3>
							Frontend Developer and Co-Founder at Litem.co.uk<span>Jan 2016 to Jul 2020</span>
						</h3>
						<p>
							Litem.co.uk was a tool, that I built from concept to deployment, that assessed a
							personal injury claim for injured cyclists. It gave advice based on the details of the
							accident and then generated a letter to be sent to the defendant. It had one of the
							most accurate valuation tools available.
						</p>
						<p>
							Update in 2020 - I am very happy to announce that Litem was purchase by a London law
							firm specialising in legal tech who wish to integrate the logic, content and
							implementation into their suite of products.
						</p>
					</article>
					<article>
						<h3>
							React Developer at Bonial France<span>Mar 2019 to Jun 2019</span>
						</h3>
						<p>
							Contracted to refactor an internal React web app to provide greater sturdiness and
							scalability, and test coverage as well as extending UI features and improving UX in
							collaboration with stakeholders.
						</p>
						<p>Key Techs:</p>
						<ul>
							<li>React Hooks</li>
							<li>Typescript</li>
							<li>Ramda</li>
							<li>Jest with React-Test-Renderer and React-Testing-Library</li>
						</ul>
					</article>
					<article>
						<h3>
							React Software Developer at Medici Living Group<span>Aug 2018 to Mar 2019</span>
						</h3>
						<p>
							I worked at Medici Living on both frontend web (React and business facing) and mobile
							development (React Native and client facing) for their flagship Quarters project.
						</p>
					</article>
					<article>
						<h3>
							Junior Frontend Developer with React.js as a freelancer
							<span>Oct 2016 to Jan 2018</span>
						</h3>
						<p>
							Working with HTML, CSS, jQuery, Wordpress, Angular 1, React.js, Mobx, Redux,
							Styled-Components, SASS and Firebase to create websites and apps.
						</p>
						<ul>
							<li>React.js 16</li>
							<li>Styled-Components (CSS-in-JS)</li>
							<li>SASS</li>
							<li>Mobx (with and without decorators)</li>
							<li>Redux (with Thunk)</li>
							<li>Firebase (auth, database and hosting)</li>
							<li>Material-ui, Semantic-ui, Reactstrap and Bootstrap 4 for UI components</li>
							<li>Jest for testing</li>
							<li>Helmet.js for SEO</li>
							<li>React-GA for google analytics</li>
						</ul>
					</article>
				</section>
				<hr />
			</main>
			<aside>
				<section>
					<h3>Interests</h3>
					<p>
						<b>Quality Automation</b> - From static code analysis to end-to-end to contract testing
					</p>
					<p>
						<b>Build techs</b> - From static code analysis to end-to-end to contract testing
					</p>
				</section>
				<section>
					<h3>Career Traits</h3>
					<p>
						<b>Product Oriented</b> - I like the idea of product engineering
					</p>
					<p>
						<b>Find value and iterate</b> - I like the idea of product engineering
					</p>
					<p>
						<b>Start it then own it</b> - I like the idea of product engineering
					</p>
				</section>
				<section>
					<h3>Some details about working practices</h3>
					<details>
						<summary>What do you normally work on?</summary>
						<p>
							Delivering value directly through Growth experiments or indirectly through innovation
							initiatives and engineering enablement
						</p>
						<ul>
							<li>
								quick experiments to test against key growth metrics (mostly acquisition and
								engagement) at key stages in the user funnel such as optimising flows from marketing
								pages to sign up to using features that represent the key value propositions in the
								core application.
							</li>
							<li>
								solid experiences that must be intuitive, snappy and robust (sign up, login auth
								pages)
							</li>
							<li>
								innovative products that expand how users interact and experience a platform (Chrome
								extensions)
							</li>
							<li>halving the time to deploy the frontend by optimising Jenkins pipelines</li>
							<li>
								eliminating manual QA bottlenecks by building and championing automated testing
								infrustrature and culture.
							</li>
							<li>mentoring less experienced colleagues</li>
						</ul>
					</details>
					<details>
						<summary>What do you normally work with?</summary>
						<p>Here are the techs that I have been working with on a daily basis</p>
						<ul>
							<li>
								frontend U+2018frameworksU+2019
								<ul>
									<li>React</li>
									<li>Preact</li>
									<li>NextJS</li>
									<li>React-static</li>
									<li>web-components (without frameworks such as Stencil)</li>
								</ul>
							</li>
							<li>
								JS build techs
								<ul>
									<li>Webpack and Babel</li>
									<li>esBuild</li>
									<li>Rollup</li>
									<li>Vite</li>
								</ul>
							</li>
							<li>
								quality automation techs
								<ul>
									<li>Typescript</li>
									<li>Jest</li>
									<li>Mocha</li>
									<li>MSW</li>
									<li>Pact</li>
									<li>Cypress</li>
									<li>testing-library</li>
									<li>eslint</li>
									<li>Istanbul</li>
									<li>c8</li>
								</ul>
							</li>
							<li>
								ci/cd
								<ul>
									<li>Github Actions</li>
									<li>Jenkins with Docker (Google Container Registry and Github Registry)</li>
									<li>Netlify</li>
								</ul>
							</li>
							<li>
								AB experiment tooling
								<ul>
									<li>Optimizely</li>
									<li>Bunchbox</li>
								</ul>
							</li>
							<li>
								monitoring, tracking and observability
								<ul>
									<li>Datadog</li>
									<li>Segment</li>
									<li>Sentry</li>
								</ul>
							</li>
						</ul>
					</details>
					<details>
						<summary>Who do you normally work with?</summary>
						<p>
							In working on such a large problem space, it has been a privilege to work alongside
							and deeply with people from many different specialisations.
						</p>
						<ul>
							<li>platform engineers</li>
							<li>quality engineers</li>
							<li>backend engineers</li>
							<li>other frontend engineers</li>
							<li>ux designers</li>
							<li>data analysts</li>
							<li>product owners/managers</li>
							<li>copy editors</li>
							<li>Agile coaches</li>
							<li>marketeers</li>
							<li>B2B sales</li>
							<li>customer service</li>
							<li>department, org and C-level management</li>
						</ul>
					</details>
				</section>
			</aside>
			<footer>
				<h3>Get in touch</h3>
				<a>alexjeffcott@gmail.com</a>
				<a>linkedin</a>
				<a>github</a>
			</footer>
		</div>
	);
}
