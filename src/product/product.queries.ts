import prismaClient from "../utils/db";

const prisma = prismaClient;

export const findProducts = async () => {
    const products = await prisma.product.findMany({
        include: {
            category: true,
            color: true,
            manufacture: true,
            volume: true,
        },
    });
    return products;
};

export const findProductbyID = async (id: number) => {
    const product = await prisma.product.findUnique({
        where: {
            productID: id,
        },
        include: {
            category: true,
            color: true,
            manufacture: true,
            volume: true,
        },
    });
    return product;
};

export const createNewProduct = async (data: any) => {
    const product = await prisma.product.create({
        data: {
            category: {
                create: {
                    materialTypes: data.category.materialTypes,
                    culture: data.category.culture,
                    userCategory: data.category.userCategory,
                },
            },
            color: {
                create: {
                    color: data.color.color,
                },
            },
            manufacture: {
                create: {
                    manufacturer: data.manufacture.manufacturer,
                    description: data.manufacture.description,
                },
            },
            volume: {
                create: {
                    height: data.volume.height,
                    length: data.volume.length,
                    width: data.volume.width,
                },
            },
        },
    });
    return product;
};

// export const queryDeleteProductbyId = async (id: number) => {
//     //Delete record category, color, volume, manufacture juga
//     const product = await findProductbyID(id);
//     if (!product) {
//         return;
//     }
//     await prisma.product.deleteMany({
//         where: {
//             productID: id,
//         },
//     });
// };
