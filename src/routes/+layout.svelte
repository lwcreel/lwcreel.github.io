<script>
	import "./layout.css";
	import "../app.css";
	import favicon from "$lib/assets/favicon.ico";
	import portrait from "$lib/assets/profile.jpg";
	import { page } from "$app/state";
	import { asset } from "$app/paths";

	let { children } = $props();
	const regExp = new RegExp("^/(resume|blog/.*)$");
</script>

<div class="flex flex-col m-auto h-screen bg-black text-white">
	<header class="sticky top-0 outline-dashed">
		<nav class="flex items-center justify-between p-4">
			<div class="text-lg font-semibold">
				<img src={favicon} alt="Logo" />
			</div>
			<ul class="flex space-x-12">
				<li class="hover:outline-dotted p-4">
					<a href={asset("/")}>Home</a>
				</li>
				<li class="hover:outline-dotted p-4">
					<a href={asset("/blog")}>Blog</a>
				</li>
				<li class="hover:outline-dotted p-4">
					<a href={asset("/resume")}>Resume</a>
				</li>
			</ul>
		</nav>
	</header>
	<main class="flex-1 overflow-y-auto items-center justify-between p-4">
		<img
			class="mx-auto w-1/6.5 h-1/3 p-4 rounded-full"
			src={portrait}
			alt="Portrait of Landon Creel"
			hidden={regExp.test(page.url.pathname)}
		/>
		{@render children()}
	</main>
	<footer class="sticky bottom-0 outline-dashed">
		<nav class="flex items-center justify-between p-4">
			<ul class="mx-auto flex items-center space-x-6">
				<li class="hover:outline-dotted p-4">
					<a href="https://github.com/lwcreel"
						>GitHub</a
					>
				</li>
				<li class="hover:outline-dotted p-4">
					<a
						href="https://www.linkedin.com/in/landon-creel-149859177"
						>LinkedIn</a
					>
				</li>
				<li class="hover:outline-dotted p-4">
					<a
						href="mailto:landon.creel+web@protonmail.com"
						>Email</a
					>
				</li>
			</ul>
		</nav>
	</footer>
</div>
