interface BaseField {
    type: string;
    name: string;
    placeholder?: string;
    disabled?: boolean;
}

export interface IInput extends BaseField {
    type: 'text';
}
export interface ITextArea extends BaseField {
    type: 'textarea';
}

export interface ISelect extends BaseField {
    type: 'select';
    options: Array<{
        value: any;
        label: string;
    }>;
}

export type IField = IInput | ITextArea | ISelect;
