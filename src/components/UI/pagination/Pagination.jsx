import React from 'react';

const Pagination = ({pagesArray, currentPage, changePage}) => {
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span onClick={() => changePage(p)} key={p} className={p === currentPage ? 'page__btn page__current' : 'page__btn'}> {p}</span>
            )}
        </div>
    );
};

export default Pagination;
