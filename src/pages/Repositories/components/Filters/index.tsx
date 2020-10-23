import React, { useCallback } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { useRepositories } from 'contexts/RepositoryContext'

import { languages } from './static-data'
import * as S from './styles'

const Filters = () => {
  const { state, dispatch } = useRepositories()

  const { control, handleSubmit } = useForm({ defaultValues: state.filters })

  const onSubmit = useCallback(
    data => dispatch({ type: 'SET_FILTERS', payload: data }),
    []
  )

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={<S.Input placeholder="Search by a topic..." />}
        name="topic"
        control={control}
      />
      <Controller
        as={
          <S.Select>
            <option value="">Select a language</option>
            {languages.map(language => (
              <option key={language.value} value={language.value}>
                {language.label}
              </option>
            ))}
          </S.Select>
        }
        name="language"
        control={control}
      />
      <S.Button type="submit">Search</S.Button>
    </S.Form>
  )
}

export default Filters
