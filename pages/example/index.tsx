import React, { useState, useEffect } from 'react'
import { Doughnut, Line } from 'react-chartjs-2'

import CTA from 'example/components/CTA'
import InfoCard from 'example/components/Cards/InfoCard'
import ChartCard from 'example/components/Chart/ChartCard'
import ChartLegend from 'example/components/Chart/ChartLegend'
import PageTitle from 'example/components/Typography/PageTitle'
import RoundIcon from 'example/components/RoundIcon'
import Layout from 'example/containers/Layout'
import response, { ITableData } from 'utils/demo/tableData'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from 'icons'

import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@roketid/windmill-react-ui'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from 'utils/demo/chartsData'

import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

function Dashboard() {
  Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  const [page, setPage] = useState(1)
  const [data, setData] = useState<ITableData[]>([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p: number) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  return (
    <Layout>
      <PageTitle>Application Failover Console Dashboard</PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-8">

        <div >Apigee North Central</div>

        <InfoCard title="External RMP" value="50%" >
          {/* @ts-ignore */}
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />

        </InfoCard>

        <InfoCard title="Internal RMP VPN" value="0%">
          {/* @ts-ignore */}
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Internal RMP" value="20%">
          {/* @ts-ignore */}
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Postgress DB" value="50%">
          {/* @ts-ignore */}
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Qpid DB" value="100%">
          {/* @ts-ignore */}
          <RoundIcon
              icon={ChatIcon}
              iconColorClass="text-teal-500 dark:text-teal-100"
              bgColorClass="bg-teal-100 dark:bg-teal-500"
              className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Zookeeper Cassandra-DB Follower Observer" value="50%">
          {/* @ts-ignore */}
          <RoundIcon
              icon={ChatIcon}
              iconColorClass="text-teal-500 dark:text-teal-100"
              bgColorClass="bg-teal-100 dark:bg-teal-500"
              className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Apigee Mgmt" value="50%">
          {/* @ts-ignore */}
          <RoundIcon
              icon={ChatIcon}
              iconColorClass="text-teal-500 dark:text-teal-100"
              bgColorClass="bg-teal-100 dark:bg-teal-500"
              className="mr-4"
          />
        </InfoCard>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-8">

        <div >Apigee South Central</div>

        <InfoCard title="External RMP" value="50%">
          {/* @ts-ignore */}
          <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-4"
          />

        </InfoCard>

        <InfoCard title="Internal RMP VPN" value="100%">
          {/* @ts-ignore */}
          <RoundIcon
              icon={MoneyIcon}
              iconColorClass="text-blue-500 dark:text-blue-100"
              bgColorClass="bg-blue-100 dark:bg-blue-500"
              className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Internal RMP" value="80%">
          {/* @ts-ignore */}
          <RoundIcon
              icon={CartIcon}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Postgress DB" value="50%">
          {/* @ts-ignore */}
          <RoundIcon
              icon={ChatIcon}
              iconColorClass="text-teal-500 dark:text-teal-100"
              bgColorClass="bg-teal-100 dark:bg-teal-500"
              className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Qpid DB" value="0%" errorText="Offline">
          {/* @ts-ignore */}
          <RoundIcon
              icon={ChatIcon}
              iconColorClass="text-yellow-900 dark:text-yellow-100"
              bgColorClass="bg-yellow-100 dark:bg-yellow-900"
              className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Zookeeper Cassandra-DB Follower Observer" value="50%">
          {/* @ts-ignore */}
          <RoundIcon
              icon={ChatIcon}
              iconColorClass="text-teal-500 dark:text-teal-100"
              bgColorClass="bg-teal-100 dark:bg-teal-500"
              className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Apigee Mgmt" value="50%">
          {/* @ts-ignore */}
          <RoundIcon
              icon={ChatIcon}
              iconColorClass="text-teal-500 dark:text-teal-100"
              bgColorClass="bg-teal-100 dark:bg-teal-500"
              className="mr-4"
          />
        </InfoCard>
      </div>

      <PageTitle>Critical API Clients</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-8">
        <ChartCard title="SPDC">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Genesys">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Provider Portal">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Member Portal">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Availity">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="PWS">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Beacon">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Other">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        {/*<ChartCard title="Traffic">*/}
        {/*  <Line {...lineOptions} />*/}
        {/*  <ChartLegend legends={lineLegends} />*/}
        {/*</ChartCard>*/}
      </div>

      <PageTitle>Critical Internal Endpoints</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-8">
        <ChartCard title="QNXT">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="EditEcs">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="PEGA UM">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="PEGA A&G">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="CCA">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="HEDIS QDRM">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

      </div>
    </Layout>
  )
}

export default Dashboard
