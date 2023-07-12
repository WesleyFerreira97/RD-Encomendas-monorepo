import React, { useState } from 'react';
import { View } from 'react-native';

type FreightProps = {
    notePrice: string;
    weight: string;
    serviceChargeRange: any;
}

type FreightValuesProps = {
    totalFreight: string;
    taxByValue: string;
    weightPrice: string;
}

export function useCalcFreight() {
    const [calcValues, setCalcValues] = useState<FreightProps | {}>({});
    const [freightValues, setFreightValues] = useState<any>({});

    const percentageByPrice = (price: number) => {
        // add 1% for each KG
        const percentage = (price / 100) * 1;
        return percentage;
    }

    const calcByBusinessRule = ({ weight, notePrice, currentServiceChargeRange }: any) => {
        const taxByValue = percentageByPrice(notePrice);

        // If weight 0 reset totalFreight
        if (weight === 0 || notePrice === 0) setTotalFreight(0);

        if (weight >= 51) {
            const kgPrice = currentServiceChargeRange[5].price;
            const clearenceFee = 37;
            const totalFreight = (kgPrice * weight) + clearenceFee + taxByValue;

            setTotalFreight(totalFreight.toFixed(2));
        }

        Object.keys(currentServiceChargeRange).forEach((key) => {
            const { maxWeight, minWeight, price } = currentServiceChargeRange[key];

            if (weight >= minWeight && weight <= maxWeight) {
                const totalFreight = taxByValue + price;
                setTotalFreight(totalFreight.toFixed(2));
            }
        })
    }

}