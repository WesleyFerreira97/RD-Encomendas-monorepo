import React, { useState } from 'react';
import { View } from 'react-native';

type FreightProps = {
    notePrice: number;
    weight: number;
    currentServiceChargeRange: any;
}

type FreightValuesProps = {
    totalFreight: string;
    taxByValue: string;
    weightPrice: string;
}

type ReturnCalcFreight = {
    freightValues: FreightValuesProps;
    setCalcValues: React.Dispatch<React.SetStateAction<FreightProps | null>>;
};

export function useCalcFreight(): ReturnCalcFreight {
    const [calcValues, setCalcValues] = useState<FreightProps | null>(null);
    const [freightValues, setFreightValues] = useState<any>({});

    const percentageByPrice = (price: number) => {
        // add 1% for each KG
        const percentage = (price / 100) * 1;
        return percentage;
    }

    const calcByBusinessRule = ({ weight, notePrice, currentServiceChargeRange }: FreightProps) => {
        const taxByValue = percentageByPrice(notePrice);
        let finalValues = " default values";

        // if (weight === 0 || notePrice === 0) finalValues = "0";

        // if (weight >= 51) {
        //     const kgPrice = currentServiceChargeRange[5].price;
        //     const clearenceFee = 37;
        //     const totalFreight = (kgPrice * weight) + clearenceFee + taxByValue;

        //     return finalValues = totalFreight.toFixed(2);
        // }

        // Object.keys(currentServiceChargeRange).forEach((key) => {
        //     const { maxWeight, minWeight, price } = currentServiceChargeRange[key];

        //     if (weight >= minWeight && weight <= maxWeight) {
        //         const totalFreight = taxByValue + price;

        //         return finalValues = totalFreight.toFixed(2);
        //     }
        // });

        return finalValues;
    }

    let ex = "";

    if (calcValues != null) {
        ex = calcByBusinessRule(calcValues);

        console.log(ex, " example ");
    }
    setFreightValues(ex)

    return { freightValues, setCalcValues };
}