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
    otherOs: string;
    linuxUrl?: string;
    windowsUrl?: string;
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
    emojiName: string;
}