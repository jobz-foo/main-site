import { Button, Heading, Input, Logo } from '@/components';
import type { Component } from 'solid-js';

interface Properties {
}

export const Search: Component<Properties> = ({  }) => {
    return (
        <form class="m-auto">
            <Logo size="display" />

            <div class="flex">
                <Input name="search" class="w-[75vw] md:w-[50vw]" placeholder="Search for a job" />

                <Button color="orange" size="xl" class="uppercase">Search</Button>
            </div>
        </form>
    );
};
