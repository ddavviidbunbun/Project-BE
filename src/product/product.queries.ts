import prismaClient from "../utils/db";

const prisma = prismaClient;

export const findProducts = async () => {
    const products = await prisma.product.findMany({
        include: {},
    });
    return products;
};

export const findProductbyID = async (id: number) => {
    const product = await prisma.product.findUnique({
        where: {
            productID: id,
        },
        include: {},
    });
    return product;
};

export const createNewProduct = async (data: any) => {
};
