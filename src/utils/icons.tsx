import * as Icon from 'phosphor-react'

interface iconHandlerProps {
    emojiName: string;
    size: number;
}
export function iconHandler(props: iconHandlerProps) {
    switch (props.emojiName) {
        case "leaf":
            return <Icon.Leaf  size={props.size}/>
        case "atom":
            return <Icon.Atom size={props.size}/>
        case "fileJs":
            return <Icon.FileJs size={props.size}/>
        case "fileTs":
            return <Icon.FileTs size={props.size}/>
        case "fileTsx":
            return <Icon.FileTsx size={props.size}/>
        case "copyright":
            return <Icon.Copyright size={props.size}/>
        default: 
            return <Icon.CheckCircle size={props.size} />
    }
}