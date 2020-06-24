export interface Props {
    name: string
    number: number
    open?: () => void
    close? : () => void
}