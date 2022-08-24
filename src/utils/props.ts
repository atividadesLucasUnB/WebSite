export interface ProjectProps {
    key: string;
    slug: string;
    name: string;
    isDone: Boolean;
    resumedName: string;
    emojiName: string;
    createdAt: Date;
}
export interface ButtonsDownloadProps {
    props:{
        otherOs: string;
        linuxUrl?: string | null | undefined;
        windowsUrl?: string | null | undefined;
    }
}
export interface LessonProps {
    key: string;
    slug: string;
    name: string;
    resumedName: string;
    emojiName: string;
    createdAt: Date;
}
export interface TecnologiesProps {
    name: string;
    slug: string;
    emojiName: string;
}