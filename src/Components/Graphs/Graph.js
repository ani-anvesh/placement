import React, { PureComponent, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
} from "recharts";
import node from "./node.json";
import base from "../../config/FbConfig";

export default function Graph(props) {
  /* useEffect(() => {
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
  const dat = []; */
  /* dat.push(
    ...data.map((der) => ({
      name: der.id,
      Aptitude: parseInt(der.aptitude),
      English: parseInt(der.english),
      coading: parseInt(der.coading),
      logic: parseInt(der.logical),
    }))
  ); */

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${payload.name} : ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = React.useState(0);
  const onPieEnter = (datas, index) => {
    setActiveIndex(index);
  };
  var data = {};
  var datas = [];
  var denim = null;
  console.log(node);
  if (
    props.college == null &&
    props.year == null &&
    props.branch == null &&
    props.section == null
  ) {
    data = {
      VCE: { apti: [], logi: [], coad: [], eng: [] },
      VEC: { apti: [], logi: [], coad: [], eng: [] },
    };
    Object.values(node.College.VCE.Year).map((ani) => {
      Object.values(ani.Branch).map((che) => {
        Object.values(che.Section).map((cha) => {
          Object.values(cha).map((aki) => {
            data.VCE.eng.push(aki.english);
            data.VCE.logi.push(aki.logical);
            data.VCE.apti.push(aki.aptitude);
            data.VCE.coad.push(aki.coading);
          });
        });
      });
    });
    Object.values(node.College.VEC.Year).map((ani) => {
      Object.values(ani.Branch).map((che) => {
        Object.values(che.Section).map((cha) => {
          Object.values(cha).map((aki) => {
            data.VEC.eng.push(aki.english);
            data.VEC.logi.push(aki.logical);
            data.VEC.apti.push(aki.aptitude);
            data.VEC.coad.push(aki.coading);
          });
        });
      });
    });
    const english = data.VCE.eng.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const coading = data.VCE.coad.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const aptitude = data.VCE.apti.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const logic = data.VCE.logi.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const englishA = data.VEC.eng.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const coadingA = data.VEC.coad.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const aptitudeA = data.VEC.apti.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const logicA = data.VEC.logi.map(Number).reduce(function (a, b) {
      return a + b;
    });
    datas = [
      {
        name: "VCE",
        value: parseInt(
          aptitude / data.VCE.apti.length +
            english / data.VCE.eng.length +
            coading / data.VCE.coad.length +
            logic / data.VCE.logi.length
        ),
      },
      {
        name: "VCE",
        value: parseInt(
          aptitudeA / data.VCE.apti.length +
            englishA / data.VCE.eng.length +
            coadingA / data.VCE.coad.length +
            logicA / data.VCE.logi.length
        ),
      },
    ];
    data = [
      {
        name: "VCE",
        aptitude: parseInt(aptitude / data.VCE.apti.length),
        english: parseInt(english / data.VCE.eng.length),
        coading: parseInt(coading / data.VCE.coad.length),
        logical: parseInt(logic / data.VCE.logi.length),
      },
      {
        name: "VEC",
        aptitude: parseInt(aptitudeA / data.VEC.apti.length),
        english: parseInt(englishA / data.VEC.eng.length),
        coading: parseInt(coadingA / data.VEC.coad.length),
        logical: parseInt(logicA / data.VEC.logi.length),
      },
    ];
  } else if (
    props.college !== null &&
    props.year == null &&
    props.branch == null &&
    props.section == null
  ) {
    data = {
      Third: { apti: [], logi: [], coad: [], eng: [] },
      Fourth: { apti: [], logi: [], coad: [], eng: [] },
    };
    Object.values(node.College[props.college].Year.Third.Branch).map((ani) => {
      Object.values(ani.Section).map((cha) => {
        Object.values(cha).map((aki) => {
          data.Third.eng.push(aki.english);
          data.Third.logi.push(aki.logical);
          data.Third.apti.push(aki.aptitude);
          data.Third.coad.push(aki.coading);
        });
      });
    });
    Object.values(node.College[props.college].Year.Fourth.Branch).map((ani) => {
      Object.values(ani.Section).map((cha) => {
        Object.values(cha).map((aki) => {
          data.Fourth.eng.push(aki.english);
          data.Fourth.logi.push(aki.logical);
          data.Fourth.apti.push(aki.aptitude);
          data.Fourth.coad.push(aki.coading);
        });
      });
    });
    const english = data.Third.eng.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const coading = data.Third.coad.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const aptitude = data.Third.apti.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const logic = data.Third.logi.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const englishA = data.Fourth.eng.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const coadingA = data.Fourth.coad.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const aptitudeA = data.Fourth.apti.map(Number).reduce(function (a, b) {
      return a + b;
    });
    const logicA = data.Fourth.logi.map(Number).reduce(function (a, b) {
      return a + b;
    });
    datas = [
      {
        name: "Third",
        value: parseInt(
          aptitude / data.Third.apti.length +
            english / data.Third.eng.length +
            coading / data.Third.coad.length +
            logic / data.Third.logi.length
        ),
      },
      {
        name: "Fouth",
        value: parseInt(
          aptitudeA / data.Fourth.apti.length +
            englishA / data.Fourth.eng.length +
            coadingA / data.Fourth.coad.length +
            logicA / data.Fourth.logi.length
        ),
      },
    ];
    data = [
      {
        name: "Third",
        aptitude: parseInt(aptitude / data.Third.apti.length),
        english: parseInt(english / data.Third.eng.length),
        coading: parseInt(coading / data.Third.coad.length),
        logical: parseInt(logic / data.Third.logi.length),
      },
      {
        name: "Fourth",
        aptitude: parseInt(aptitudeA / data.Fourth.apti.length),
        english: parseInt(englishA / data.Fourth.eng.length),
        coading: parseInt(coadingA / data.Fourth.coad.length),
        logical: parseInt(logicA / data.Fourth.logi.length),
      },
    ];
  } else if (
    props.college !== null &&
    props.year !== null &&
    props.branch == null &&
    props.section == null
  ) {
    data = {
      [props.college]: {
        Branch: {
          ECE: { apti: [], logi: [], coad: [], eng: [] },
          CSE: { apti: [], logi: [], coad: [], eng: [] },
          EEE: { apti: [], logi: [], coad: [], eng: [] },
        },
      },
    };

    ["ECE", "CSE", "EEE"].map((den) => {
      Object.values(
        node.College[props.college].Year[props.year].Branch[den].Section
      ).map((ani) => {
        Object.values(ani).map((aki) => {
          data[props.college].Branch[den].eng.push(aki.english);
          data[props.college].Branch[den].logi.push(aki.logical);
          data[props.college].Branch[den].apti.push(aki.aptitude);
          data[props.college].Branch[den].coad.push(aki.coading);
        });
      });
    });

    ["ECE", "CSE", "EEE"].map((den) => {
      [data[props.college].Branch[den]].map((dude) => {
        const english = dude.eng.map(Number).reduce(function (a, b) {
          return a + b;
        });
        const coading = dude.coad.map(Number).reduce(function (a, b) {
          return a + b;
        });
        const aptitude = dude.apti.map(Number).reduce(function (a, b) {
          return a + b;
        });
        const logic = dude.logi.map(Number).reduce(function (a, b) {
          return a + b;
        });
        denim = data[props.college].Branch[den].apti.length;

        data[props.college].Branch[den].eng = english;
        data[props.college].Branch[den].logi = coading;
        data[props.college].Branch[den].apti = aptitude;
        data[props.college].Branch[den].coad = logic;
      });
    });
    ["ECE", "CSE", "EEE"].map((den) => {
      datas.push({
        name: den,
        value: parseInt(
          data[props.college].Branch[den].eng / denim +
            data[props.college].Branch[den].logi / denim +
            data[props.college].Branch[den].apti / denim +
            data[props.college].Branch[den].coad / denim
        ),
      });
    });
    console.log(datas);
    data = [
      {
        name: "ECE",
        aptitude: parseInt(data[props.college].Branch.ECE.apti / denim),
        english: parseInt(data[props.college].Branch.ECE.logi / denim),
        coading: parseInt(data[props.college].Branch.ECE.coad / denim),
        logical: parseInt(data[props.college].Branch.ECE.eng / denim),
      },
      {
        name: "CSE",
        aptitude: parseInt(data[props.college].Branch.CSE.apti / denim),
        english: parseInt(data[props.college].Branch.CSE.logi / denim),
        coading: parseInt(data[props.college].Branch.CSE.coad / denim),
        logical: parseInt(data[props.college].Branch.CSE.eng / denim),
      },
      {
        name: "EEE",
        aptitude: parseInt(data[props.college].Branch.EEE.apti / denim),
        english: parseInt(data[props.college].Branch.EEE.logi / denim),
        coading: parseInt(data[props.college].Branch.EEE.coad / denim),
        logical: parseInt(data[props.college].Branch.EEE.eng / denim),
      },
    ];
  } else if (
    props.college !== null &&
    props.year !== null &&
    props.branch !== null &&
    props.section == null
  ) {
    data = {
      [props.college]: {
        Branch: {
          [props.branch]: {
            Section: {
              A: { apti: [], logi: [], coad: [], eng: [] },
              B: { apti: [], logi: [], coad: [], eng: [] },
              C: { apti: [], logi: [], coad: [], eng: [] },
            },
          },
        },
      },
    };
    ["A", "B", "C"].map((ben) => {
      Object.values(
        node.College[props.college].Year[props.year].Branch[props.branch]
          .Section[ben]
      ).map((aki) => {
        data[props.college].Branch[props.branch].Section[ben].eng.push(
          aki.english
        );
        data[props.college].Branch[props.branch].Section[ben].logi.push(
          aki.logical
        );
        data[props.college].Branch[props.branch].Section[ben].apti.push(
          aki.aptitude
        );
        data[props.college].Branch[props.branch].Section[ben].coad.push(
          aki.coading
        );
      });
    });
    console.log(data);

    ["A", "B", "C"].map((ben) => {
      [data[props.college].Branch[props.branch].Section[ben]].map((dude) => {
        const english = dude.eng.map(Number).reduce(function (a, b) {
          return a + b;
        });
        const coading = dude.coad.map(Number).reduce(function (a, b) {
          return a + b;
        });
        const aptitude = dude.apti.map(Number).reduce(function (a, b) {
          return a + b;
        });
        const logic = dude.logi.map(Number).reduce(function (a, b) {
          return a + b;
        });
        const denim =
          data[props.college].Branch[props.branch].Section[ben].eng.length;
        data[props.college].Branch[props.branch].Section[ben].eng =
          english / denim;
        data[props.college].Branch[props.branch].Section[ben].logi =
          coading / denim;
        data[props.college].Branch[props.branch].Section[ben].apti =
          aptitude / denim;
        data[props.college].Branch[props.branch].Section[ben].coad =
          logic / denim;
      });
    });
    data = [
      {
        name: "A",
        aptitude: parseInt(
          data[props.college].Branch[props.branch].Section.A.apti
        ),
        english: parseInt(
          data[props.college].Branch[props.branch].Section.A.logi
        ),
        coading: parseInt(
          data[props.college].Branch[props.branch].Section.A.coad
        ),
        logical: parseInt(
          data[props.college].Branch[props.branch].Section.A.eng
        ),
      },
      {
        name: "B",
        aptitude: parseInt(
          data[props.college].Branch[props.branch].Section.B.apti
        ),
        english: parseInt(
          data[props.college].Branch[props.branch].Section.B.logi
        ),
        coading: parseInt(
          data[props.college].Branch[props.branch].Section.B.coad
        ),
        logical: parseInt(
          data[props.college].Branch[props.branch].Section.B.eng
        ),
      },
      {
        name: "C",
        aptitude: parseInt(
          data[props.college].Branch[props.branch].Section.C.apti
        ),
        english: parseInt(
          data[props.college].Branch[props.branch].Section.C.logi
        ),
        coading: parseInt(
          data[props.college].Branch[props.branch].Section.C.coad
        ),
        logical: parseInt(
          data[props.college].Branch[props.branch].Section.C.eng
        ),
      },
    ];
    console.log(data);
  } else if (
    props.college !== null &&
    props.year !== null &&
    props.branch !== null &&
    props.section !== null
  ) {
    data = {
      [props.college]: {
        Branch: {
          [props.branch]: {
            Section: {
              [props.section]: [],
            },
          },
        },
      },
    };
    Object.values(
      node.College[props.college].Year[props.year].Branch[props.branch].Section[
        props.section
      ]
    ).map((aki) => {
      console.log(aki);
      data[props.college].Branch[props.branch].Section[props.section].push(aki);
    });
    console.log(data);
    data = data[props.college].Branch[props.branch].Section[props.section];
    console.log(data);
  } else {
    data = [];
  }
  /* console.log(datas);
  console.log(data); */
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return props.show == "yes" ? (
    props.college !== null &&
    props.year !== null &&
    props.branch !== null &&
    props.section !== null ? (
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
          barSize={63}
        >
          <CartesianGrid strokeDasharray="34 34" />
          <XAxis dataKey="name" dy={9} />
          <YAxis type="number" domain={[0, 60]} />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="aptitude"
            stroke="#8884d8"
            strokeWidth={2.5}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="english"
            stroke="#82ca9d"
            strokeWidth={2.5}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="coading"
            stroke="#000000"
            strokeWidth={2.5}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="logical"
            stroke="#ffc658"
            strokeWidth={2.5}
            activeDot={{ r: 8 }}
          />
          <Brush startIndex={0} endIndex={7} />
        </LineChart>
      </ResponsiveContainer>
    ) : (
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
          barSize={63}
        >
          <CartesianGrid strokeDasharray="34 34" />
          <XAxis dataKey="name" dy={9} />
          <YAxis type="number" domain={[0, 60]} />
          <Tooltip />

          <Bar
            type="monotone"
            dataKey="aptitude"
            fill="#000000"
            activeBar={{ r: 8 }}
          />
          <Bar type="monotone" dataKey="english" fill="#00C49F" />
          <Bar type="monotone" dataKey="coading" fill="#FFBB28" />
          <Bar type="monotone" dataKey="logical" fill="#ff8042" />
        </BarChart>
      </ResponsiveContainer>
    )
  ) : (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={datas}
          cx={200}
          cy={200}
          innerRadius={81}
          outerRadius={120}
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {datas.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
