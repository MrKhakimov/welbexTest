import {Table} from "../components/Table";
import {Pagination} from "../components/Pagination";
import React from "react";
import {useMainPageHooks} from "./useMainPageHooks";
import {Filter} from "../components/Filter";

export const MainPage = () => {
    const {data, loading, currentPage, setCurrentPage, pageSize, totalCount, filterChange} = useMainPageHooks();

    return (
        <>
            <Filter filterChange={filterChange} />

            <Table data={data} loading={loading} />
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}