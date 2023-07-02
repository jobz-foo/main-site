import { useSignal } from "@preact/signals";

export default function Home() {
    const count = useSignal(3);

    return (
        <div class="m-auto">
            <h1 class="mb-1">Search Jobz</h1>

            <form>
                <input name="search" class="p-4 text-black" />
            </form>
        </div>
    );
}
