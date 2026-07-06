import { useCallback, useEffect, useState } from 'react'
import {
  locationService,
  type GetLocationListParams,
} from '../services/locationService'
import type { Location, PaginatedResult } from '../types/location'
import type { RequestState } from '../../../shared/hooks/requestState'
import { getRequestErrorMessage } from '../../../shared/http/getRequestErrorMessage'

// Hook da listagem: guarda dados, loading e erro, e recarrega quando os filtros mudam.
export function useLocationEquipments(
  params: GetLocationListParams,
): RequestState<PaginatedResult<Location>> {
  const { page, pageSize, search, status, type } = params
  const [data, setData] = useState<PaginatedResult<Location>>()
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  // Função que chama o service e atualiza o estado usado pela tabela.
  const loadLocationList = useCallback(async () => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      const result = await locationService.getLocationList({
        page,
        pageSize,
        search,
        status,
        type,
      })
      setData(result)
    } catch (error) {
      setErrorMessage(getRequestErrorMessage(error))
    } finally {
      setIsLoading(false)
    }
  }, [page, pageSize, search, status, type])

  // Quando filtros ou paginação mudam, buscamos a lista novamente.
  useEffect(() => {
    void Promise.resolve().then(loadLocationList)
  }, [loadLocationList])

  return {
    data,
    isLoading,
    errorMessage,
    reload: loadLocationList,
  }
}
