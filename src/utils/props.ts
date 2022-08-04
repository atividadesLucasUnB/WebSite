export interface ProjectProps {
    key: string;
    slug: string;
    name: string;
    isDone: Boolean;
    resumedName: string;
    emojiName: string;
    createdAt: Date;
}

export interface TecnologiesProps {
    name: string;
    emojiName: string;
}