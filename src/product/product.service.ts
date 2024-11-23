import {
    createNewProduct,
    findProductbyID,
    findProducts,
} from "./product.queries";

export const getAllProducts = async () => {
    const products = await findProducts();
    return products;
};

export const getProductByID = async (id: number) => {
    const product = await findProductbyID(id);
    return product;
};

export const updateProduct = async () => {};

export const alterProduct = async () => {};

export const deleteProductByID = async (id: number) => {
    //await queryDeleteProductbyId(id);
};

export const createProduct = async (data: any) => {
    const create = await createNewProduct(data);
    return create;
};
