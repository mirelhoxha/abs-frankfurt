import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FaStop } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Day shifts', 'Night shifts', 'Early shifts', 'Late shifts', 'Bouns'],
    datasets: [
        {
            label: '# of Votes',
            data: [25, 14, 11, 25, 25],
            backgroundColor: [
                'rgba(255, 223, 107, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(121, 156, 173, 1)',
                'rgba(121, 128, 173, 1)',
                'rgba(76, 91, 237, 1)',
            ],
            borderColor: [
                'rgba(255, 223, 107, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(121, 156, 173, 1)',
                'rgba(121, 128, 173, 1)',
                'rgba(76, 91, 237, 1)',
            ],

            borderWidth: 2,
            // aspectRatio: 2,
        },
    ],
};

function Chart() {
    const options = {
        plugins: {
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        }
    }
    return (
        <div className=''>
            <Doughnut
                data={data}
                options={options} />
            {/* <ul> */}
            <div className='graph'>
                <ul className=''>
                    {data.labels.map((val, key) => {
                        return (
                            <li key={key}>
                                <div className='displayFlex'>
                                    <div className='marginRight10'
                                        style={{ color: data.datasets[0].backgroundColor[key] }}>
                                        <FaStop />
                                    </div>
                                    <div className='width'>{val}</div>
                                    <h5 className='marginLeft10'>{data.datasets[0].data[key]}</h5>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}
export default Chart;
