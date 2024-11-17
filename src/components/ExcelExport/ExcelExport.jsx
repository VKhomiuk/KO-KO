import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import styles from "../../pages/Home/Home.module.css";

const ExcelExport = ({ data, fileName }) => {
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
        saveAs(blob, `${fileName}.xlsx`);
    };

    return (
        <div className={styles.addRoomWrapper}>
            <button onClick={exportToExcel} className={styles.addRoomButton}>
                <span className={styles.addRoomText}>Export to Excel</span>
            </button>
        </div>
    )
}

export default ExcelExport;
