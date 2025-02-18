<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
</script>

<div class="h-screen flex flex-col">
    <Header/>

    <div class="grow">
        <slot></slot>
    </div>

    <footer class="justify-self-end flex flex-col p-4 py-10 text-center gap-4 bg-[#A27B5C]">
        <div>
            <h2 class="text-amber-50 text-3xl font-bold">Let's Connect!</h2>
            <p class="text-amber-50 text-lg">I'm always open to discussing new opportunities and collaborations.</p>
        </div>
        <div>
            <a href="mailto:your.email@example.com" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">Contact Me</a>
        </div>
        <p class="text-amber-50">John Hernandez</p>
    </footer>
</div>
