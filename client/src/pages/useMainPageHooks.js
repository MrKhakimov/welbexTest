import {useCallback, useState} from "react";
import {getDataFunc} from "../utils/requests";

let PageSize = 5;
const postFilter = '/post/filter';

export const useMainPageHooks = () => {
    const [data, setData] = useState({
        data: [],
        pagination: {
            currentPage: 1,
            totalPages: 1,
            totalItems: 0,
            itemsInPages: 0
        },
    });
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState({
        title: '',
        count: 0,
        distance: 0,
        countType: 2,
        distanceType: 2,
    });

    const response = (query) => {
        window.history.pushState('', '', `${postFilter}?${query}`);

        getDataFunc(postFilter, query).then(result => {
            setLoading(false);
            setData(result)
            console.log('result', result)
        }).catch(e => {
            setLoading(false);
        })
    }

    const filterChange = useCallback((data) => {
        setLoading(true);

        const {title, distance, distanceType, count, countType} = data;

        const q = `page=1&name=${title}&distance=${distance ? distance : 0}&distance_type=${distanceType}&count=${count ? count : 0}&count_type=${countType}`

        setQuery(data);

        response(q)
    }, []);

    const onCurrenPageChange = useCallback((e) => {
        setCurrentPage(e)
        setLoading(true);

        const {title, distance, distanceType, count, countType} = query;

        const q = `page=${e}&name=${title}&distance=${distance ? distance : 0}&distance_type=${distanceType}&count=${count ? count : 0}&count_type=${countType}`

        response(q)
    }, [query, currentPage])

    return {
        data: data.data,
        loading,
        currentPage: currentPage,
        totalCount: data?.pagination?.totalPages,
        pageSize: PageSize,
        setCurrentPage: onCurrenPageChange,
        filterChange,
    }
}