<script>
	import PlantIcon from "./PlantIcon.svelte";
</script>


<div class="page h-screen flex flex-col">

	<div class="grow flex flex-col">
		<section id="intro" class="flex py-30 px-15">
			<div class="flex">
				<h1 class="justify-self-end text-7xl basis-7xl text-[#A27B5C]">
					Hi, I'm John Hernandez
				</h1>

				<div class="flex flex-col gap-1.5">
					<p class="text-[#A27B5C] text-lg text-justify">
						Welcome to my personal webpage!
						<span class="inline-block"><PlantIcon/></span>
					</p>
					<p class="text-[#3F4F44]">
						I'm a passionate Software Developer.
						I'm excited to share my skills and experience with you.
					</p>
				</div>
			</div>
		</section>

		<section id="skills" class="py-15">
			<h2 class="text-primary text-3xl font-bold mb-6 text-center">Skills Highlights</h2>
			<div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				<div class="bg-white rounded-lg shadow-md p-6">
					<h3 class="text-xl font-semibold mb-2">Leadership & Mentorship</h3>
					<p>Proven ability to lead and mentor development teams, fostering a positive and productive work environment. Experienced in cultivating code standards and best practices.</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6">
					<h3 class="text-xl font-semibold mb-2">Frontend Development</h3>
					<p>Proficient in modern frontend frameworks and technologies, including Angular, SvelteKit, and React. Experience building responsive and user-friendly interfaces.</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6">
					<h3 class="text-xl font-semibold mb-2">Backend Development</h3>
					<p>Skilled in backend development using C# and other relevant technologies. Experience designing and implementing robust and scalable server-side logic.</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6">
					<h3 class="text-xl font-semibold mb-2">Code Quality</h3>
					<p>Deeply value code quality and maintainability. Advocate for clean code principles, thorough testing, and continuous integration.</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6">
					<h3 class="text-xl font-semibold mb-2">AI Proficiency</h3>
					<p>Experienced in leveraging AI tools like ChatGPT and IBM Watson for various tasks, including natural language processing, code generation, and data analysis.</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6">
					<h3 class="text-xl font-semibold mb-2">Angular</h3>
					<p>Experienced in building complex web applications using the Angular framework.</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6">
					<h3 class="text-xl font-semibold mb-2">SvelteKit</h3>
					<p>Proficient in using SvelteKit for building performant and server-side rendered applications.</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6">
					<h3 class="text-xl font-semibold mb-2">React</h3>
					<p>Skilled in developing user interfaces with the React library.</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6">
					<h3 class="text-xl font-semibold mb-2">C#</h3>
					<p>Extensive experience in backend development using the C# language.</p>
				</div>
			</div>
		</section>
	</div>
</div>

