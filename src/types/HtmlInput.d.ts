type HtmlInputChangeProps<T> = {
    target: {
        value: T,
    }
}

type HtmlInputProps = {
    type: 'select' | 'text';
    onChange?: (T : HtmlInputChangeProps) => void;
    value?: string;
    id?: string;
}

export { HtmlInputProps, HtmlInputChangeProps };