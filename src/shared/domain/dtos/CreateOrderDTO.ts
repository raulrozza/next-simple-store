export type ICreateProductOrderDTO = {
    productId: string;
    quantity: number;
};

export type ICreateOrderDTO = {
    customerId: string;
    products: ICreateProductOrderDTO[];
    installments: number;
};
