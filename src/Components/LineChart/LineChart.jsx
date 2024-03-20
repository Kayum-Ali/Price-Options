import { LineChart as LChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const LineChart = () => {
    const students = [
        { "id": 1, "name": "Alice", "math": 85, "physicsMarks": 78, "chemistryMarks": 82 },
        { "id": 2, "name": "Bob", "math": 70, "physicsMarks": 72, "chemistryMarks": 65 },
        { "id": 3, "name": "Charlie", "math": 65, "physicsMarks": 68, "chemistryMarks": 70 },
        { "id": 4, "name": "David", "math": 90, "physicsMarks": 88, "chemistryMarks": 92 },
        { "id": 5, "name": "Eva", "math": 75, "physicsMarks": 80, "chemistryMarks": 78 },
        { "id": 6, "name": "Frank", "math": 80, "physicsMarks": 75, "chemistryMarks": 85 },
        { "id": 7, "name": "Grace", "math": 95, "physicsMarks": 92, "chemistryMarks": 96 },
        { "id": 8, "name": "Helen", "math": 60, "physicsMarks": 65, "chemistryMarks": 58 },
        { "id": 9, "name": "Ian", "math": 85, "physicsMarks": 78, "chemistryMarks": 80 },
        { "id": 10, "name": "Jane", "math": 72, "physicsMarks": 75, "chemistryMarks": 70 }
    ]
    return (
        <div className='container mx-auto flex flex-col md:flex-row  gap-10 mt-10'>
            
            
            <LChart width={500}  height={400} data={students} className='flex-grow '>
            <XAxis dataKey="name"/>
            <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='green'></Line>
            </LChart>

            <BarChart width={600} height={300} data={students} className='flex-grow mt-24'>
                <XAxis dataKey={`name`} stroke='#8884d8'></XAxis>
                <YAxis></YAxis>
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }}></Tooltip>
                <Legend width={100} wrapperStyle={{top: 40, right:20, backgroundColor: '#f5f5f5', border: '2px solid'}}></Legend>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="math" fill="#8884d8" barSize={30} />


            </BarChart>

        

        </div>
    );
};

export default LineChart;