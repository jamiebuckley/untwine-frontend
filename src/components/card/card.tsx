interface CardProps extends React.HTMLProps<HTMLDivElement> {

}

export default function Card(props: CardProps) {
    return (
        <div className={`rounded overflow-hidden shadow-md ${props.className}`}>
            {props.children}
        </div>
    )
}