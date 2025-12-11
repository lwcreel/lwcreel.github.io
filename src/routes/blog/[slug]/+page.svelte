<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="grid">
	<h1 class="text-3xl font-mono font-medium text-center p-4">{data.post.title}</h1>
	{@html data.post.content}

	<button class="justify-center font-mono mx-auto hover:outline-dotted p-4">
		<a href="/blog">Back</a>
	</button>
</div>
