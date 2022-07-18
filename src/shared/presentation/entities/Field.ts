interface BaseField {
    type: string;
    name: string;
    placeholder?: string;
}

export interface IInput extends BaseField {
    type: 'text';
}
export interface ITextArea extends BaseField {
    type: 'textarea';
}

export type IField = IInput | ITextArea;
