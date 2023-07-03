import type { Component, JSX } from 'solid-js';

interface Properties {
    autocomplete?: string;
    class?: string;
    id?: string;
    label?: string;
    name: string;
    oninput?: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent>;
    placeholder?: string;
    value?: any;
}

export const Input: Component<Properties> = ({
    autocomplete,
    class: className,
    id,
    label,
    name,
    oninput,
    placeholder
}) => {
    return (
        <div class={className}>
            {label && (
                <label
                    class=""
                    for={id || name}
                >
                    {label}
                </label>
            )}

            <input
                autocomplete={autocomplete}
                class="p-4 text-black w-full focus-visible:outline-none"
                id={id || name}
                name={name}
                oninput={oninput}
                placeholder={placeholder}
            />
        </div>
    );
};
