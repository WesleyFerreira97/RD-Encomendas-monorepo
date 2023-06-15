import { useEffect, useState } from "react";
import { citiesMinasGerais } from "../data/cities";
import { CityProps } from "../@types/cities";

type UseCityProps = {
    cityName: string;
}

export function useCity({ cityName }: UseCityProps) {
    const [selectedCity, setSelectedCity] = useState<string>(cityName);

    const filterCityByName = (name: string): CityProps => {
        const filtredCity = citiesMinasGerais.find(city => {
            return city.name === name;
        });

        if (filtredCity === undefined) return "Esta cidade não está disponível";

        return filtredCity;
    }

    const currentCity: CityProps = filterCityByName(selectedCity)

    return { currentCity, setSelectedCity }
}