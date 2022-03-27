interface Publication {
    title: string
    author: string[],
    year: string,
    links: string[]
}

interface Journal extends Publication {
    journal: string,
    volume: string,
    number: string,
    article_number: string
}

interface Conference extends Publication {
    conference: string,
    pages: string,
    date: string,
    organization: string
}

export type {Journal, Conference}