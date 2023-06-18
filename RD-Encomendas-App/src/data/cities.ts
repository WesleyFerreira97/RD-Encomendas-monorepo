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


type PriceByDistanceProps = {
    d10a20: number,
    d20a30: number,
}

/**
 * Calculates Freight
 * @param {number} number - Prices 
 * @returns {number} Return object with prices
 */
function priceByDistance(values: PriceByDistanceProps) {
    Object.keys(values).map(() => {
        return values
    })
}

const priceByServiceCharge = {
    120: priceByDistance({ 130, 140, 150, 160, 170, 180}),
}

export { citiesMinasGerais }