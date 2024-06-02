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

interface CourseModel {
    title: string,
    year: string,
    links: object
}

interface NoteModel {
    title: string,
    status: string,
    author: string,
    links: object
}

interface ServiceItemModel {
    name: string,
    link?: string,
    note?: string
}

interface ServiceModel {
    pc: ServiceItemModel[],
    reviewer: ServiceItemModel[],
    awards: ServiceItemModel[]
}

interface PublicationModel {
    title: string
    bibtex: string
}

export type {PreprintModel, TalkModel, NoteModel, ServiceModel, CourseModel, PublicationModel}
