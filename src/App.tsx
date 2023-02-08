import { useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip,
  ChartData,
  ChartOptions
} from 'chart.js'
import { Line, getElementAtEvent } from 'react-chartjs-2'
import annotationPlugin, {
  LineAnnotationOptions
} from 'chartjs-plugin-annotation'
import Data from './data/defaultData.json'

import Nav from './components/Nav'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
)

const annotation1: LineAnnotationOptions = {
  borderColor: 'black',
  borderWidth: 3,
  label: {
    display: true,
    content: 'test',
    position: 'start'
  },
  scaleID: 'x',
  value: '01/02/2023'
}

const annotation2: LineAnnotationOptions = {
  borderColor: 'purple',
  borderWidth: 3,
  label: {
    display: true,
    content: 'test 2',
    position: 'center'
  },
  scaleID: 'y',
  value: 200
}

const options: ChartOptions<'line'> = {
  maintainAspectRatio: false,
  plugins: {
    annotation: {
      annotations: {
        annotation1,
        annotation2
      }
    }
  }
}

const data: ChartData<'line'> = {
  labels: Data.map((row) => row.Date),
  datasets: [
    {
      label: 'Revenue in $',
      data: Data.map((row) => Number(row.Revenue.replace(/\$/g, ''))),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
}

function App() {
  const chartRef = useRef()
  const onClick = (event: any) => {
    console.log(getElementAtEvent(chartRef.current as any, event))
  }

  return (
    <>
      <Nav />
      <main>
        <div style={{ width: '100vw', height: '900px' }}>
          <Line
            width={100}
            height={50}
            ref={chartRef}
            data={data}
            options={options}
            onClick={onClick}
          />
        </div>
      </main>
    </>
  )
}

export default App
