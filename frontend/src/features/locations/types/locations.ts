export type LocationStatus = 'Ativo' | 'Inativo'

export type LocationType = 
    | 'Laboratório' 
    | 'Escritório'
    | 'Depósito'
    | 'Manutenção'
    | 'Rede'

export type SummaryIconName = 'locais' | 'ativos' | 'equipamentos' | 'inativos'

export interface LocationSummary {
    id: string
    title: string
    value: number
    icon: SummaryIconName
    lineColor: string
    iconBackground: string
}
