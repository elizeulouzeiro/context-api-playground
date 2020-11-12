import React, { useState, useEffect, useCallback } from 'react'

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

  const getAllIndexes = useCallback(() => {
    return Array.from(Array(totalPages + 1).keys()).slice(1)
  }, [totalItems])

  const [startOfRange, endOfRange] = PaginationHelpers.getRangeIndexes(
    page,
    totalPages
  )

  const range = getAllIndexes().slice(startOfRange, endOfRange)

  const hasNextCondition = PaginationHelpers.hasNextRange(2, page, totalPages)

  const hasPreviousCondition = PaginationHelpers.hasPreviousRange(1, page)

  return (
    <S.Wrapper>
      <S.Control
        isVisible={hasPreviousCondition}
        onClick={() => onChangePage(page - 1)}
      >
        <ArrowLeftIcon />
      </S.Control>
      {range.map(item => (
        <S.Page
          key={item}
          isSelected={item === page}
          onClick={() => onChangePage(item)}
        >
          {item}
        </S.Page>
      ))}
      <S.Control
        isVisible={hasNextCondition}
        onClick={() => onChangePage(page + 1)}
      >
        <ArrowRightIcon />
      </S.Control>
    </S.Wrapper>
  )
}

export default Pagination
