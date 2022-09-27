import React from 'react';
class CovidCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }
    componentDidMount() {
        fetch("https://data.covid19india.org/v4/min/timeseries.min.json")
        .then(res => res.json())
        .then(
            (cards) => {
                this.setState({ cards: cards });
            },
            (error) => {
                alert(error);
            }
        )
    }
 
    render() {
        return (<table cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>State</th>
                    <th>Dates</th>
                    <th>Delta</th>
                    <th>Tested</th>
                    <th>Recovered</th>
                    <th>Vaccinated</th>
                    <th>Deceased</th>
                </tr>
            </thead>
 
            <tbody>
                {this.state.cards.map(card =>
                    <tr key={card.State}>
                        <td>{card.State}</td>
                        <td>{card.Dates}</td>
                        <td>{card.Delta}</td>
                        <td>{card.Tested}</td>
                        <td>{card.Recovered}</td>
                        <td>{card.Vaccinated}</td>
                        <td>{card.Deceased}</td>
                    </tr>
                )}
            </tbody>
        </table>);
    }
}
export default CovidCards