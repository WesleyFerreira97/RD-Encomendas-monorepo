const citiesMinasGerais = [
    {
        name: "Belo Horizonte",
        servicesIncluded: "Coleta e Entrega",
        serviceCharge: 120
    },
    {
        name: "Uberlândia",
        servicesIncluded: "Apenas Entrega",
        serviceCharge: 90
    },
    {
        name: "Contagem",
        servicesIncluded: "Coleta e Entrega",
        serviceCharge: 90
    },
    {
        name: "Juiz de Fora",
        servicesIncluded: "Apenas Entrega",
        serviceCharge: 90
    },
    {
        name: "Betim",
        servicesIncluded: "Coleta e Entrega",
        serviceCharge: 90
    },
    {
        name: "Montes Claros",
        servicesIncluded: "Apenas Entrega",
        serviceCharge: 90
    },
    {
        name: "Ribeirão das Neves",
        servicesIncluded: "Coleta e Entrega",
        serviceCharge: 90
    },
    {
        name: "Uberaba",
        servicesIncluded: "Apenas Entrega",
        serviceCharge: 90
    },
    {
        name: "Governador Valadares",
        servicesIncluded: "Coleta e Entrega",
        serviceCharge: 90
    },
    {
        name: "Ipatinga",
        servicesIncluded: "Apenas Entrega",
        serviceCharge: 90
    },
    {
        name: "Sete Lagoas",
        servicesIncluded: "Coleta e Entrega",
        serviceCharge: 90
    },
    {
        name: "Divinópolis",
        servicesIncluded: "Apenas Entrega",
        serviceCharge: 90
    },
    {
        name: "Santa Luzia",
        servicesIncluded: "Coleta e Entrega",
        serviceCharge: 90
    },
    {
        name: "Ibirité",
        servicesIncluded: "Apenas Entrega",
        serviceCharge: 90
    },
    {
        name: "Patos de Minas",
        servicesIncluded: "Coleta e Entrega",
        serviceCharge: 90
    }
];

type PriceByWightRange = {
    [key: string]: {
        minWeight: string,
        maxWeight: string,
        price: number
    }
}

const weightRanges = [
    { minWeight: 1, maxWeight: 10 },
    { minWeight: 11, maxWeight: 20 },
    { minWeight: 21, maxWeight: 30 },
    { minWeight: 31, maxWeight: 40 },
    { minWeight: 41, maxWeight: 50 },
    { minWeight: 51, maxWeight: 51 },
]

/**
 * Calculates Freight
 * @param {number[]} values - Prices 
 * @returns {number} Return object with prices
 */
function priceByWeight(values: number[]): PriceByWightRange {
    const final: PriceByWightRange = {};

    console.log("");
    console.log("");
    console.log("");

    for (let i = 0; i < weightRanges.length; i++) {
        final[i] = {
            minWeight: weightRanges[i].minWeight.toString(),
            maxWeight: weightRanges[i].maxWeight.toString(),
            price: values[i],
        };
    }

    return final;
}

const priceByServiceCharge = {
    120: priceByWeight([130, 140, 150, 160, 170, 180]),
    100: priceByWeight([110, 120, 130, 140, 150, 160]),
    80: priceByWeight([100, 110, 120, 130, 140, 150]),
    60: priceByWeight([90, 100, 110, 120, 130, 140]),
}

export { citiesMinasGerais, priceByServiceCharge }