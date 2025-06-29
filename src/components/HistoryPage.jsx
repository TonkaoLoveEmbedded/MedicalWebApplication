import React,{useState} from 'react';
import './HistoryPage.css'
import TableRow from "./TableHistory.jsx";
import { image } from 'framer-motion/client';



function fetchonClick(id) {
  fetch(`http://localhost:4000/api/history/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log("Detail for ID", id, data);
      // หรือโชว์เป็น Modal หรือเปลี่ยนหน้าเลยก็ได้
    })
    .catch(err => {
      console.error("Fetch failed", err);
    });
}


export default function HistoryPage() {
    const [data, SetData] = useState([
        { id: 1, date: "2024-07-26", time: "10:30 AM", image:"", result: "Fracture detected in the radius bone 1"},
        { id: 2, date: "2024-07-26", time: "10:36 AM", image:"", result: "Fracture detected in the Ulnar bone"},
        { id: 3, date: "2024-07-27", time: "1:00 PM", image:"", result: "Normal detected in the radius bone"},
        { id: 4, date: "2024-07-27", time: "1:30 PM", image:"", result: "Normal detected in the radius bone"}
    ]);
    return (
            <main className="main-content">
            <header className="content-header">
            <h2>Detection History</h2>
            </header>

            <section className="table-wrapper">
            <table className="history-table">
                <thead>
                <tr>
                    <th className="col-id">ID</th>
                    <th className="col-date">Date</th>
                    <th className="col-time">Time</th>
                    <th className="col-image">Image</th>
                    <th className="col-result">Results</th>
                    <th className="col-action">Action</th> {/* ใหม่ */}
                </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <TableRow key={item.id}
                            id={item.id}
                            date={item.date}
                            time={item.time}
                            image={item.image}
                            result={item.result}
                            handleonClick={fetchonClick}
                        />
                        )
                    )
                }
                {/* …เพิ่มแถวอื่น ๆ ได้… */}
                </tbody>
            </table>
            </section>
        </main>
    )
}
