import React, { useState } from 'react';
import { View } from 'react-native';

type FreightProps = {
    notePrice: number;
    weight: number;
    currentServiceChargeRange: any;
}

type FreightValuesProps = {
    clearenceFee?: number;
    taxByValue: number;
    weightPrice: number;
    totalFreight: number;
}

type ReturnCalcFreight = {
    freightValues: FreightValuesProps;
    setCalcValues: (props: FreightProps) => void;
};

export function useCalcFreight(): ReturnCalcFreight {
    const defaultFreightProps = {
        clearenceFee: 0,
        taxByValue: 0,
        weightPrice: 0,
        totalFreight: 0,
    }
    const [freightValues, setFreightValues] = useState<FreightValuesProps>(defaultFreightProps);

    const percentageByPrice = (price: number) => {
        // add 1% for each KG
        const percentage = (price / 100) * 1;
        return percentage;
    }

    const calcByBusinessRule = ({ weight, notePrice, currentServiceChargeRange }: FreightProps): FreightValuesProps => {
        const taxByValue = percentageByPrice(notePrice);

        let finalValues = {
            ...defaultFreightProps,
            taxByValue,
        };

        // if (weight === 0 || notePrice === 0) finalValues;

        if (weight >= 51) {
            const kgPrice = currentServiceChargeRange[5].price;
            const clearenceFee = 37;
            const weightPrice = kgPrice * weight;
            const totalFreight = weightPrice + clearenceFee + taxByValue;

            return finalValues = { ...finalValues, ...{ weightPrice, clearenceFee, totalFreight } };
        }

        Object.keys(currentServiceChargeRange).forEach((key) => {
            const { maxWeight, minWeight, price } = currentServiceChargeRange[key];

            if (weight >= minWeight && weight <= maxWeight) {
                const totalFreight = taxByValue + price;

                return finalValues = { ...finalValues, ...{ weightPrice: price, totalFreight } };
            }
        });

        return finalValues;
    }

    const setCalcValues = (props: FreightProps) => {
        const finalValues = calcByBusinessRule(props);

        setFreightValues(finalValues);
    }

    return { freightValues, setCalcValues };
}
