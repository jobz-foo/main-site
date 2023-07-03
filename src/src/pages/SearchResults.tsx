import type { Component } from 'solid-js';

interface Properties {
    class?: string;
}

export const SearchResults: Component<Properties> = ({ class: className }) => {
    return (
        <>
            search results
        </>
    );
};
