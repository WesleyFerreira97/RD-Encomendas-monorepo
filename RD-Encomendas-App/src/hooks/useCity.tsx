import { useEffect, useState } from "react";
import { citiesMinasGerais } from "../data/cities";
import { CityProps } from "../@types/cities";

type UseCityProps = {
    cityName: string;
}

export function useCity({ cityName }: UseCityProps) {
    const [selectedCity, setSelectedCity] = useState<string>(cityName);
    const [currentCity, setCurrentCity] = useState<CityProps>(citiesMinasGerais[0]);

    useEffect(() => {
        const filtredCityByName = citiesMinasGerais.filter(city => {
            return city.name === selectedCity;
        });

        setCurrentCity(filtredCityByName[0]);
    }, [selectedCity])

    return { currentCity, setSelectedCity }
}