import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPoinstValue = props.dataPoints.map((data) => data.value)
    const totalMax = Math.max(...dataPoinstValue)

    return (
        <div className="chart">
            {props.dataPoints.map((el) => (
                <ChartBar
                maxValue={totalMax}
                value={el.value}
                label={el.label}
                key={el.label}/>
            ))}
        </div>
    )
}

export default Chart 