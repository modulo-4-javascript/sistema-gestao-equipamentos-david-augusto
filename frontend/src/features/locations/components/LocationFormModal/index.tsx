import { Form, Input, Select } from 'antd'
import { useEffect } from 'react'
import {
  getLocationStatusLabel,
  getLocationTypeLabel,
  type Location,
  type LocationStatus,
  type LocationType,
} from '../../types/location'
import { FormGrid, FormModal, FullField } from './styles'

export type LocationFormMode = 'create' | 'edit'

export interface LocationFormValues {
  code: string
  name: string
  type: LocationType
  building?: string
  floor?: string
  room?: string
  description?: string
  status?: LocationStatus
}

interface LocationFormModalProps {
  Location?: Location
  confirmLoading?: boolean
  mode: LocationFormMode
  open: boolean
  statusOptions: LocationStatus[]
  typeOptions: LocationType[]
  locationOptions: { id: string | number; label: string }[]
  onCancel: () => void
  onSubmit: (values: LocationFormValues) => void
}

const emptyLocationForm: Partial<LocationFormValues> = {
  name: '',
  type: undefined,
  building: '',
  floor: '',
  room: '',
  description: ''
}

export function LocationFormModal({
  Location,
  confirmLoading,
  mode,
  open,
  statusOptions,
  typeOptions,
  locationOptions = [],
  onCancel,
  onSubmit,
}: LocationFormModalProps) {
  const [form] = Form.useForm()
  const isEditing = mode === 'edit'

  useEffect(() => {
    if (open) {
      form.resetFields()
      form.setFieldsValue(
        Location
          ? {
              name: Location.name,
              type: Location.type,
              status: Location.status,
            }
          : emptyLocationForm,
      )
    }
  }, [Location, form, open])

  function handleSubmit() {
    form
      .validateFields()
      .then((values: LocationFormValues) => {
        // Fluxo da aula: formulário -> payload -> service -> API -> atualização da tela.
        onSubmit(values)
      })
      .catch(() => undefined)
  }

  return (
    <FormModal
      centered
      destroyOnHidden
      open={open}
      title={isEditing ? "Editar local" : "Novo local"}
      okText="Salvar"
      cancelText="Cancelar"
      confirmLoading={confirmLoading}
      width={800}
      styles={{
        mask: { backdropFilter: "blur(2px)", background: "rgb(0 0 0 / 45%)" },
      }}
      onCancel={onCancel}
      onOk={handleSubmit}
    >
      <Form
        form={form}
        key={`${mode}-${Location?.id ?? "empty"}`}
        layout="vertical"
        initialValues={emptyLocationForm}
        requiredMark={false}
      >
        <FormGrid>
          <Form.Item
            label="Nome *"
            name="name"
            rules={[
              { required: true, message: "Informe o nome do local." },
            ]}
          >
            <Input placeholder="Ex: Lab 01" />
          </Form.Item>

          <Form.Item label="Tipo" name="type">
            <Select
              placeholder="Selecione o tipo..."
              options={typeOptions.map((type) => ({
                label: getLocationTypeLabel(type),
                value: type,
              }))}
            />
          </Form.Item>

          <Form.Item label="Predio" name="building">
            <Input placeholder="Main Building" />
          </Form.Item>

          <Form.Item label="Código" name="code">
            <Input placeholder="Ex: LAB-01" />
          </Form.Item>

          <Form.Item label="Andar" name="floor">
            <Select
              allowClear
              placeholder="Selecione o Andar"
              options={locationOptions.map((location) => ({
                label: location.label,
                value: location.id,
              }))}
            />
          </Form.Item>

          <Form.Item label="Status" name="status">
            <Select
              placeholder="Selecione o status..."
              options={statusOptions.map((status) => ({
                label: getLocationStatusLabel(status),
                value: status,
              }))}
            />
          </Form.Item>

          <FullField>
            <Form.Item label="Observações" name="notes">
              <Input.TextArea placeholder="Informações adicionais sobre o local..." />
            </Form.Item>
          </FullField>
        </FormGrid>
      </Form>
    </FormModal>
  )
}
