import { getCountries } from "@/entities/country/services";
import {useQuery} from "vue-query/esm";

const countriesQueryName = 'countries';

export const useGetCountries = () =>
    useQuery(countriesQueryName, getCountries, {});