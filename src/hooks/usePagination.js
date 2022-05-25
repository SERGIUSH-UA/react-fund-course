import {useMemo} from "react";

export const usePagination = (totalPage) => {

    return useMemo(() => {
        let pagesArray = [];
        for (let i = 0; i < totalPage; i++) {
            pagesArray.push(i + 1);
        }
        return pagesArray;
    }, [totalPage]);

}