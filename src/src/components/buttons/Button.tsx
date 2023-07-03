import { joinCss } from 'common-js-ts-tools';
import type { Component, JSXElement } from 'solid-js';

type ButtonColor = 'amber' | 'blue' | 'cyan' | 'emerald' | 'gray' | 'green'
    | 'indigo' | 'neutral' | 'orange' | 'red' | 'rose' | 'sky' | 'slate'
    | 'stone' | 'yellow';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Properties {
    class?: string;
    children?: JSXElement;
    color: ButtonColor;
    size?: ButtonSize;
    type?: 'button' | 'reset' | 'submit';
}

function getColor(color: ButtonColor) {
    switch (color) {
        case 'indigo': return 'text-white bg-indigo-500 hover:bg-indigo-600';
        case 'orange': return 'text-white bg-orange-500 hover:bg-orange-600';
    }
}

function getSize(size: ButtonSize) {
    switch (size) {
        case 'xs': return 'px-2 py-1 text-xs';
        case 'sm': return 'px-2 py-1 text-sm';
        case 'md': return 'px-4 py-2 text-sm';
        case 'lg': return 'px-4 py-2 text-base';
        case 'xl': return 'px-6 py-3 text-base';
    }
}

export const Button: Component<Properties> = ({
    class: className,
    children,
    color = 'orange',
    size = 'md',
    type
}) => {
    return (
        <button
            class={joinCss(
                'transition duration-150 font-semibold',
                getColor(color),
                getSize(size),
                className
            )}
            type={type}
        >
            {children}
        </button>
    );
};
