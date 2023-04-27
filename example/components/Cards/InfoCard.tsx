import { ReactSVGElement } from 'react'
import {Card, CardBody, Text} from '@roketid/windmill-react-ui'

interface IInfoCard{
  title: string
  value: string
  children?: ReactSVGElement
    errorText?: string
}

function InfoCard({ title, value, children, errorText }: IInfoCard) {
//               bgColorClass="bg-teal-100 dark:bg-teal-500"
  return (
    <Card  >
      <CardBody className="flex items-center border-gray-300 hover:border-gray-500               bgColorClass=bg-teal-100 dark:bg-teal-500"
      >
        {children}
          <Text>{errorText}</Text>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{value}</p>
        </div>
      </CardBody>
    </Card>
  )
}

export default InfoCard
