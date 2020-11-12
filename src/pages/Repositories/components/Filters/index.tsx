import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'

import { useRepositories } from 'contexts/RepositoryContext'
import languages from 'pages/Repositories/utils/languages'

import * as S from './styles'

const Filters = () => {
  const { state, dispatch } = useRepositories()

  const { control, handleSubmit } = useForm({ defaultValues: state.filters })

  const onSubmit = data =>
    dispatch({
      type: 'SET_FILTERS',
      payload: { ...data, page: 1, perPage: 9 }
    })

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
            <option value="">Search by language...</option>
            {languages.map(language => (
              <option key={language.value} value={language.value}>
                {language.name}
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
