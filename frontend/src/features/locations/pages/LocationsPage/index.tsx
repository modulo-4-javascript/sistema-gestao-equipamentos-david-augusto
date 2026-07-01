import { message } from 'antd'
import { AppLayout } from '../../../../app/layout/AppLayout'
import { Container} from './styles'
import {
  locationSummaryMock
} from "../../mocks/locations.mock"
import { SummaryCards } from "../../components/SummaryCards"
import { PageHeader } from '../../components/PageHeader'

export function LocationsPage() {
  const [messageApi, contextHolder] = message.useMessage()

  function handleCreateEquipment(){
    messageApi.info("Criar Local")
  }

  return (
    <AppLayout currentPage="Localizações">
      {contextHolder}
      <Container>
        
        <PageHeader onCreateLocal={handleCreateEquipment}/>

        <SummaryCards summaries={locationSummaryMock} />
      </Container>
    </AppLayout>
  )
}
