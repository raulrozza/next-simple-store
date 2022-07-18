interface BaseField {
    name: string;
    placeholder?: string;
}

export type IInput = BaseField;
export type ITextArea = BaseField;

export type Field = IInput | ITextArea;
