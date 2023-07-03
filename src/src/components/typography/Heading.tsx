import { joinCss } from 'common-js-ts-tools';
import type { Component, JSXElement } from 'solid-js';

export type HeadingSize = '1' | '2' | '3' | '4' | '5' | '6';

interface Properties {
    children?: JSXElement;
    class?: string;
    size: HeadingSize;
}

function getSize(size: HeadingSize) {
    switch (size) {
        case '1': return 'text-6xl';
        case '2': return 'text-5xl';
        case '3': return 'text-4xl';
        case '4': return 'text-3xl';
        case '5': return 'text-2xl';
        case '6': return 'text-xl';
    }
}

export const Heading: Component<Properties> = ({ children, class: className, size }) => {
    const css = joinCss(
        'font-bold font-pridi',
        getSize(size),
        className
    );

    switch (size) {
        case '1': return <h1 class={css}>{children}</h1>;
        case '2': return <h1 class={css}>{children}</h1>;
        case '3': return <h1 class={css}>{children}</h1>;
        case '4': return <h1 class={css}>{children}</h1>;
        case '5': return <h1 class={css}>{children}</h1>;
        case '6': return <h1 class={css}>{children}</h1>;
    }

    return null;
};
