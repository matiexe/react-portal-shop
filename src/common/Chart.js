import { Chart as ChartJS, CategoryScale,LinearScale, 
BarElement, Tittle,Tooltip, Legend } from "react-chartjs-2";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale,LinearScale.BarElement,Tittle,Tooltip,Legend)

export const Chart=({ charData}) =>{
    <>
        <Bar
            data={charData}
            options={{
                title : {
                    display:true,
                    text:'Category',
                    fontSize:20
                },
                Legend:{
                    display:true,
                    position:'right'
                },
            }}
        />
    </>
}