interface PreprintModel {
    doi: string,
    author: string,
    date: string,
    title: string,
    links: object
}

interface TalkModel {
    info: string,
    presenter: string,
    date: string,
    title: string,
    links?: object
}

interface NoteModel {
    title: string,
    status: string,
    author: string,
    links: object
}

interface ServiceModel {
    name: string,
    role: string,
    note?: string
}

interface PublicationModel {
    title: string
    bibtex: string
}

export type {PreprintModel, TalkModel, NoteModel, ServiceModel, PublicationModel}
