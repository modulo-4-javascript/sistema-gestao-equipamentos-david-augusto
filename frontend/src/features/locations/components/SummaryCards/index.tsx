import { 
    PinDropOutlined,
    BuildOutlined,
    CheckCircleOutlineOutlined,
    BlockOutlined
 } from "@mui/icons-material";
import type { LocationSummary, SummaryIconName } from "../../types/locations";
import {
    CardContent,
    CardHeader,
    Grid,
    IconBox,
    Label,
    SummaryCard,
    Value
}from './styles'

interface SummaryCardsProps{
    summaries: LocationSummary[]
}

function renderSummaryIcon(icon: SummaryIconName){
    if (icon === 'ativos'){
        return <CheckCircleOutlineOutlined fontSize="small"/>
    }

    if (icon === 'equipamentos'){
        return <BuildOutlined fontSize="small"/>
    }

    if (icon === 'inativos'){
        return <BlockOutlined fontSize="small"/>
    }

    return <PinDropOutlined fontSize="small"/>
}

export function SummaryCards({ summaries }: SummaryCardsProps){
    return (
        <Grid aria-label="Resumo dos locais">
            {summaries.map((summary) => (
                <SummaryCard
                    key={summary.id}
                    $lineColor={summary.lineColor}
                    styles={{body: {padding: 25}}}
                >
                    <CardContent>
                        <CardHeader>
                            <Label>{summary.title}</Label>
                            <IconBox $iconBackground={summary.iconBackground}>
                                {renderSummaryIcon(summary.icon)}
                            </IconBox>
                        </CardHeader>

                        <Value>{summary.value}</Value>
                    </CardContent>
                </SummaryCard>
            ))}
        </Grid>
    )
}