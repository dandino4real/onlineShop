import React, { useEffect, useState } from "react";
import axios from "axios";
import { setHeaders, url } from "../../features/api";
import { Row, Col } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {

  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      try {
        const res = await axios.get(`${url}/orders/week-sales`, setHeaders());
        res.data.sort((a, b) => b._id - a._id);

        const newData = res.data.map((item) => {
          const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

          return {
            day: DAYS[item._id - 1],
            amount: item.total / 100,
          };
        });
      

        setSales(newData);
        setLoading(false)
        
 
      } catch (err) {
        console.log(err.message);
        setLoading(false)
      }
    }

    fetchData()
  }, []);

  const data = [
    {
      day: "Mon",
      amount: 4000,
    },
    {
      day: "Tue",
      amount: 3000,
    },
  ];

  return (
    <>
    {loading ? <p>Loading Chart ...</p> : 
    <Row style={{ height: "400px", border: "1px solid gray" }} className="rounded py-2">
      <h4 className="my-2">Last 7 days Earnings (US $)</h4>
      <Col>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={300}
            height={220}
            data={sales}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
    }
    </>
  );
};

export default Charts;
