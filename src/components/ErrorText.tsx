type Props = {
    error: any
}

const ErrorText = ({ error }: Props) => {
    const e = error ? error.toString() : "";
    return (
        <small className="text-sm text-red-600 dark:text-[#ff0000]">{e}</small>
    )
}

export default ErrorText