import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import { Search } from './pages';

export const App: Component = () => {
    return (
        <>
            <Routes>
                <Route path="/" component={Search} />
            </Routes>
        </>
    );
};
