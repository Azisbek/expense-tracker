import './ChartBar.css'

const ChartBar = (props) => {

    let barFillHeigth = '0%'

    if (props.maxValue > 0) {
        barFillHeigth = Math.round((props.value / props.maxValue) * 100) + '%'
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: barFillHeigth }}></div>
            </div>
            <label className='chart-bar__label'>{props.label}</label>
        </div>
    )
}


export default ChartBar