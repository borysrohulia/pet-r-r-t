import React from 'react';
import { IPaginationInfo } from '../../../types/pagination';
import { paginationArray } from '../../../utils/paginationArray';
import cl from './Pagination.module.css';

// interface IUpdatePage {
//   (page: string): string;
// }

interface PaginationProps {
  pagination: IPaginationInfo;
  updatePage: any;
}

export const Pagination: React.FC<PaginationProps> = ({pagination, updatePage}) => {

  const disabledPrev = pagination.page === '1'
  const disabledNext = pagination.page === pagination.totalPages

  const prevPage = (): void => {
    const p: string = (Number(pagination.page) - 1).toString()
    updatePage(p)
  }

  const nextPage = (): void => {
    const p: string = (Number(pagination.page) + 1).toString()
    updatePage(p)
  }

  const setPage = (p: string): void => {
    if (p !== '...') {
      updatePage(p)
    } else {
      return
    }
  }

  const buttonArray: string[] = paginationArray(pagination.totalPages, pagination.page)

  return (
    <div className={cl.pagination}>
      <button className={cl.pagBtn} disabled={disabledPrev} onClick={() => prevPage()}>Prev</button>
      {
        buttonArray.map(btn => 
          <button className={cl.pagBtn} disabled={btn === pagination.page} onClick={() => setPage(btn)}>{btn}</button>
        )
      }
      <button className={cl.pagBtn} disabled={disabledNext} onClick={() => nextPage()}>Next</button>
    </div>
  );
}
