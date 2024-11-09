export default function StatisticLine(props){
    return(
        <tr>
            <td>{props.text} </td>
            <td>{props.value}</td>
            {props.text == 'positive' && <td>%</td>}
        </tr>
        
    )
}