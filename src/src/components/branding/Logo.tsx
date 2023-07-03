import { Heading, HeadingSize } from '@/components';
import type { Component } from 'solid-js';
import { joinCss } from 'common-js-ts-tools';

interface Properties {
    class?: string;
    size: HeadingSize | 'display' | 'inline';
}

export const Logo: Component<Properties> = ({ class: className, size }) => {
    const headingSize = size === 'display' || size === 'inline' ? '1' : size;

    return (
        <Heading
            size={headingSize}
            class={joinCss(
                size === 'display' ? 'text-9xl' : undefined,
                className
            )}
        >
            Jobz
        </Heading>
    );
};
