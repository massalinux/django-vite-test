import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress';
import axios from 'axios';
import Layout from './components/Layout';

const pages = import.meta.glob('../pages/*.jsx')

document.addEventListener('DOMContentLoaded', () => {
    // const csrfToken = document.querySelector('meta[name=csrf-token]').content;
    // axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;


    InertiaProgress.init();

    createInertiaApp({
        // resolve: async name => {
        //     const page = (await pages[`./pages/${name}.jsx`]()).default;
        //     page.layout = page.layout || Layout
        //
        //     return page
        // },
        resolve: name => import(`./pages/${name}.jsx`),
        setup({ el, App, props }) {
            render(<App {...props} />, el)
        },
    }).catch(err => console.error(err))
});
