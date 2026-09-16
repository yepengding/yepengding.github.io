import {render, screen} from '@testing-library/react';
import App from './App';
import './i18n';

// Component data is fetched from public/data at runtime; serve minimal fixtures.
const fixtures: { [key: string]: any } = {
    'data/current_work.json': [{title: 'A Current Project', links: {Site: 'https://example.org'}}],
    'data/talks.json': [{info: 'A Venue', presenter: 'Ding, Yepeng', date: '2025', title: 'A Talk'}],
    'data/service.json': {editor: [{name: 'A Journal', link: 'https://example.org'}], pc: [{name: 'A Conference'}]},
    'data/funding.json': [{id: 'fund_early', name: 'A Grant', funder: 'A Funder'}],
    'data/courses.json': [{id: 'c1', name: 'A Course', years: '2025'}],
    'data/reports.json': [{title: 'A Report', date: '2025', author: 'Ding, Yepeng', links: {}}],
    'data/notes.json': [{title: 'A Note', status: 'draft', author: 'Ding, Yepeng', links: {}}],
    'data/publication_links.json': {},
};

const bib = `@inproceedings{test2025,
	title = {A Conference Paper},
	booktitle = {A Proceedings},
	author = {Ding, Yepeng},
	year = {2025},
}`;

beforeEach(() => {
    global.fetch = jest.fn((input: any) => {
        const url = String(input);
        const key = Object.keys(fixtures).find(k => url.endsWith(k));
        if (key) {
            return Promise.resolve({ok: true, status: 200, json: () => Promise.resolve(fixtures[key])});
        }
        if (url.endsWith('data/publications.bib')) {
            return Promise.resolve({ok: true, status: 200, text: () => Promise.resolve(bib)});
        }
        return Promise.resolve({ok: false, status: 404, statusText: 'Not Found'});
    }) as any;
});

afterEach(() => jest.resetAllMocks());

test('renders the name as the single top-level heading', async () => {
    render(<App/>);
    const h1s = await screen.findAllByRole('heading', {level: 1});
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent(/Yepeng/);
    expect(h1s[0]).toHaveTextContent(/Ding/);
});

test('renders each content section as a second-level heading', async () => {
    render(<App/>);
    for (const name of [/About/, /Publications/, /Talks/, /Service/, /Education/, /Courses/, /Patents/]) {
        expect(await screen.findByRole('heading', {level: 2, name})).toBeInTheDocument();
    }
});

test('renders fetched publication data', async () => {
    render(<App/>);
    expect(await screen.findByText('A Conference Paper')).toBeInTheDocument();
});

test('exposes the navigation menu toggle to assistive technology', async () => {
    render(<App/>);
    const burger = await screen.findByRole('button', {name: /menu/i});
    expect(burger).toHaveAttribute('aria-expanded', 'false');
    expect(burger).toHaveAttribute('aria-controls', 'navbar-menu');
});

test('offers the cite action as a real button', async () => {
    render(<App/>);
    const cite = await screen.findAllByRole('button', {name: /cite/i});
    expect(cite).toHaveLength(1);
    expect(cite[0].tagName).toBe('BUTTON');
});
