import type {
    LocationStatus,
    LocationType,
    LocationSummary
} from "../types/locations"


export const locationSummaryMock: LocationSummary[] = [
    {
        id: 'locals',
        title: 'Locais',
        value: 8,
        icon: 'locais',
        lineColor: 'linear-gradient(90deg, #002A64, #007C8C)',
        iconBackground: '#E1E8FD',
    },
    {
        id: 'actives',
        title: 'Ativos',
        value: 7,
        icon: 'ativos',
        lineColor: '#25B8A7',
        iconBackground: '#E1E8FD',
    },
    {
        id: 'equipments',
        title: 'Equipamentos',
        value: 76,
        icon: 'equipamentos',
        lineColor: '#007C8C',
        iconBackground: '#E1E8FD',
    },
    {
        id: 'inactives',
        title: 'Inativos',
        value: 1,
        icon: 'inativos',
        lineColor: '#6B7280',
        iconBackground: '#E1E8FD',
    }
]