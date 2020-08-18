import React from "react";
import Graph from "./Components/Graphs/Graph";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
/* import React, { PureComponent, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from "recharts";
import base from "../../config/FbConfig";

const dats = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Graph(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = base
      .firestore()
      .collection("Placement")
      .doc("VCE")
      .collection("Year")
      .doc("fourth")
      .collection("Branch")
      .doc("ECE")
      .collection("Section")
      .doc("A")
      .collection("Name")
      .get()
      .then(function (doc) {
        const newData = doc.docs.map((dora) => ({
          id: dora.id,
          ...dora.data(),
        }));
        setData(newData);
      });
    return () => unsubscribe();
  }, []);
  const dat = [];
  dat.push(
    ...data.map((der) => ({
      name: der.id,
      Aptitude: parseInt(der.aptitude),
      English: parseInt(der.english),
      coading: parseInt(der.coading),
      logic: parseInt(der.logical),
    }))
  );

  console.log(dat);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BarChart
        width={1000}
        height={300}
        data={dat}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Aptitude" stackId="a" fill="#8884d8" />
        <Bar dataKey="logic" stackId="a" fill="#82ca9d" />
        <Bar dataKey="uv" fill="#ffc658" />
        <Bar dataKey="coading" stackId="b" fill="#ffc658" />
        <Bar dataKey="English" stackId="b" fill="#000000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
      </BarChart>
    </div>
  );
} */
