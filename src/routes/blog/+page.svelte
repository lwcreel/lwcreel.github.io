<script lang="ts">
	import type { PageProps } from './$types';
	import { setContext } from 'svelte';
	import Post from '$lib/types/Post';

	let { data }: PageProps = $props();
	let pageNumber: number = $state(0);
	let allPosts: Post[] = $state(data.posts);
	let pages: number = Math.ceil(allPosts.length / 5);

	setContext('allPosts', () => allPosts);

	let postList: Post[] = $derived(allPosts.slice(pageNumber * 5, pageNumber * 5 + 5));
</script>

<div class="flex mx-auto w-1/2 grid grid-rows-5 text-white">
	{#each postList as post}
		<div>
			<ul class="list-inside space-y-2 p-2 font-mono">
				<li class="font-mono text-lg p-1 whitespace-nowrap">
					~$ echo <a class="font-mono text-xl hover:outline-dotted p-1" href="/blog/{post.title}">
						{post.title}
						.....
						{post.date.toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</a>
				</li>
			</ul>
		</div>
	{/each}
</div>
<div class="flex grid justify-center sticky bottom-0">
	<button
		hidden={pageNumber <= 0}
		class="font-mono col-1 mx-auto hover:outline-dotted p-4"
		onclick={() => (pageNumber > 0 ? pageNumber-- : 0)}>Prev</button
	>
	<button
		hidden={pageNumber >= pages - 1}
		class="font-mono col-2 mx-auto hover:outline-dotted p-4"
		onclick={() => (pageNumber < pages ? pageNumber++ : pages)}
	>
		Next
	</button>
</div>
