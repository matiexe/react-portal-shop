 import endPoints from '@services/api';
 import useFetch from '@hooks/useFetch'; 
 import { Chart }from '@common/Chart';
 
  export default function Dashboard() {
    const products = useFetch(endPoints.products.paginate(15,15));
    const categoryNames = products?.map((product) => product.category);
    const categoryCount = categoryNames?.map((category)=>category.name);
    const countOccurrences = (arr) => arr.reduce((prev,curr)=>((prev[curr] = ++prev[curr]|| 1),prev),{});
    console.log(categoryNames)
    console.log(categoryCount)
    const data ={
      datasets:[{
        label:'Categories',
        data:countOccurrences(categoryCount),
        borderWidth:2,
        backgroundColor:['#ffbb11','#C0C0C0','#50AF95','#f3ba2f','#2a71d0']
      }]
    }
    return (
      <>
      <Chart className="mb-8 mt-2" charData={data}/>
        
      </>
    );
  }