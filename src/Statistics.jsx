import StatisticLine from "./StatisticLine"

export default function Statistics({good, neutral, bad, average, positive}){
    return(
        <table>
            <tbody>
                <StatisticLine text='good' value={good} />
                <StatisticLine text='neutral' value={neutral} />
                <StatisticLine text='bad' value={bad} />     
                <StatisticLine text='average' value={average} />
                <StatisticLine text='positive' value={positive} />
            </tbody>
            
        </table>
    )
    
}