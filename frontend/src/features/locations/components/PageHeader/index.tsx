import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { BrandButton, Container, Description, Title } from "./styles";


interface PageHeaderProps{
    onCreateLocal: () => void
}

export function PageHeader({onCreateLocal}: PageHeaderProps){
    return (
        <Container>
            <div>
                <Title>Locais</Title>
                <Description>Cadastre salas, laboratórios e áreas onde os equipamentos ficam</Description>
            </div>

            <BrandButton
                type="primary"
                icon={<AddCircleOutlineOutlined fontSize="small"/>}
                onClick={onCreateLocal}
            >
                Novo Local
            </BrandButton>
        </Container>
    )
}