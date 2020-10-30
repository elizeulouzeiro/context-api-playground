import * as React from 'react'

import { ArrowLeftIcon, ArrowRightIcon } from '@primer/octicons-react'

import { IPagination } from 'models/pagination.model'
import * as PaginationHelpers from 'helpers/PaginationHelpers'

import * as S from './styles'

const Pagination: React.FC<IPagination> = ({
  page,
  perPage,
  totalItems,
  onChangePage
}) => {
  const totalPages = PaginationHelpers.getTotalPages(perPage, totalItems)

  const pages = [...Array(totalPages).keys()].map(i => i + 1)

  const { firstPage, lastPage } = PaginationHelpers.getFirstAndLastPage(pages)

  const displayablePages = PaginationHelpers.getDisplayablePages(page, pages)

  return (
    <S.Wrapper>
      <S.Control
        isVisible={page !== firstPage}
        onClick={() => onChangePage(page - 1)}
      >
        <ArrowLeftIcon />
      </S.Control>
      {displayablePages.map(item => (
        <S.Page
          key={item}
          isSelected={item === page}
          onClick={() => onChangePage(item)}
        >
          {item}
        </S.Page>
      ))}
      <S.Control
        isVisible={page !== lastPage}
        onClick={() => onChangePage(page + 1)}
      >
        <ArrowRightIcon />
      </S.Control>
    </S.Wrapper>
  )
}

export default Pagination
