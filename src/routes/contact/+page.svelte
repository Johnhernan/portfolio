<script>
    import { enhance } from '$app/forms';

    let email = '';
    let subject = '';
    let body = '';
    let error = null;
    let success = null;

    async function handleSubmit(event) {
        const { data, form } = await enhance(event);

        if (data.success) {
            success = 'Email sent successfully!';
            error = null;
            email = '';
            subject = '';
            body = '';
            form.reset(); // Clear the form
        } else {
            error = data.error || 'Failed to send email. Please check your inputs.';
            success = null;
        }
    }
</script>

<div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Contact</h1>

    {#if error}
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">{error}</span>
        </div>
    {/if}

    {#if success}
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
            <strong class="font-bold">Success!</strong>
            <span class="block sm:inline">{success}</span>
        </div>
    {/if}

    <form method="POST" use:handleSubmit class="space-y-4">
        <div>
            <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" bind:value={email} required
                   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   placeholder="Your email address">
        </div>

        <div>
            <label for="subject" class="block text-gray-700 font-bold mb-2">Subject:</label>
            <input type="text" id="subject" name="subject" bind:value={subject} required
                   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   placeholder="Email subject">
        </div>

        <div>
            <label for="body" class="block text-gray-700 font-bold mb-2">Message:</label>
            <textarea id="body" name="body" bind:value={body} required
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                      placeholder="Your message"></textarea>
        </div>

        <div>
            <button type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Send
            </button>
        </div>
    </form>
</div>