/**
 * Data fetching helpers
 *
 * Resolve paths against PUBLIC_URL so the app also works when served from a
 * sub-path, and reject on non-2xx responses. Without the status check a missing
 * file is served as the 404 page, and parsing that HTML as JSON throws an
 * unhandled rejection that leaves the section silently empty.
 */

const resolve = (path: string) => `${process.env.PUBLIC_URL}/${path}`;

const request = async (path: string) => {
    const url = resolve(path);
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
    }
    return res;
}

/**
 * Fetch and parse a JSON document
 *
 * @param path relative to the public directory
 */
const fetchJSON = async <T>(path: string): Promise<T> => {
    return (await request(path)).json() as Promise<T>;
}

/**
 * Fetch a plain text document
 *
 * @param path relative to the public directory
 */
const fetchText = async (path: string): Promise<string> => {
    return (await request(path)).text();
}

export {fetchJSON, fetchText, resolve};
