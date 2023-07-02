import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import { joinCss } from "~/utilities/css.ts";

export default function App({ Component, ...state }: AppProps) {
    const baseCss = 'flex flex-col flex-grow min-h-full';

    console.log(state);

    return (
        <html class={baseCss}>
            <Head>
                <title>Jobz</title>
            </Head>
            <body class={joinCss(baseCss, 'bg-stone-800 text-white')}>
                <Component />
            </body>
        </html>
    );
}
