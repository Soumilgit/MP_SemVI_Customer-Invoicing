import { useState, useContext } from 'react';
import ActionLink from '../components/ActionLink';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CalendarOutlined, FundOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';

import DataContext from '../context/DataContext';

const Home = () => {

  const { invoices } = useContext(DataContext);

  // Function to get the name of the month
  const getMonthName = (monthNumber) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[monthNumber];
  };

  // Function to get the last 5 months
  const getLastFiveMonths = () => {
    const today = new Date();
    const months = [];
    for (let i = 4; i >= 0; i--) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      months.push({
        month: date.getMonth(),
        year: date.getFullYear()
      });
    }
    return months;
  };

  // Calculate numbers for stats
  const totalInvoices = invoices.length;
  const paidInvoices = invoices.filter(invoice => invoice.Status == true).length;
  const unpaidInvoices = invoices.filter(invoice => invoice.Status == false).length;


  const countInvoicesByMonthYear = (targetMonth, targetYear) => {
    const matchingInvoices = invoices.filter((invoice) => {
      const invoiceDate = new Date(invoice.Date);

      // Check if the month and year of the invoice match the target month and year
      return (
        invoiceDate.getMonth() + 1 === targetMonth && // 0+1
        invoiceDate.getFullYear() === targetYear
      );
    });

    return matchingInvoices.length;
  };


  const numberOfMatchingInvoices = countInvoicesByMonthYear(1, 2024);
  const lastFiveMonths = getLastFiveMonths();
  const labels = lastFiveMonths.map(({ month, year }) => `${getMonthName(month)} - ${year}`);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Invoice Stats",
        backgroundColor: "rgba(6, 182, 212, 0.2)", // Light Cyan background
        borderColor: "rgba(6, 182, 212, 1)", // Cyan line color
        borderWidth: 2,
        pointBackgroundColor: "rgba(6, 182, 212, 1)", // Cyan points
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        data: lastFiveMonths.map(({ month, year }) => countInvoicesByMonthYear(month + 1, year)),
      },
    ],
  };
  
  return (
    <section className="w-full rounded-2xl bg-slate-50 shadow-md px-6 py-6 mt-5">
      <Helmet>
        <title>Stats - Invoicely</title>
      </Helmet>
  
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Dashboard Overview</h1>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-600 rounded-2xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-2">
            <FundOutlined className="text-white text-xl" />
            <h2 className="text-white text-lg font-semibold">Total Invoices</h2>
          </div>
          <p className="text-white text-4xl font-bold">{totalInvoices}</p>
        </div>
  
        <div className="bg-cyan-600 rounded-2xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-2">
            <FundOutlined className="text-white text-xl" />
            <h2 className="text-white text-lg font-semibold">Paid Invoices</h2>
          </div>
          <p className="text-white text-4xl font-bold">{paidInvoices}</p>
        </div>
  
        <div className="bg-violet-600 rounded-2xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-2">
            <FundOutlined className="text-white text-xl" />
            <h2 className="text-white text-lg font-semibold">Unpaid Invoices</h2>
          </div>
          <p className="text-white text-4xl font-bold">{unpaidInvoices}</p>
        </div>
      </div>
  
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <div className="w-full md:w-2/3 bg-white border border-slate-200 rounded-2xl p-5 shadow">
          <h3 className="text-xl font-semibold text-slate-700 mb-4">Invoice Trend (Last 5 Months)</h3>
          <Line data={data} />
        </div>
  
        <div className="w-full md:w-1/3 bg-white border border-slate-200 rounded-2xl p-5 shadow">
          <h3 className="text-xl font-semibold text-slate-700 mb-4">Monthly Breakdown</h3>
          <ul>
            {lastFiveMonths.map(({ month, year }) => {
              const numberOfMatchingInvoices = countInvoicesByMonthYear(month + 1, year);
              return (
                <li
                  key={`${year}-${month}`}
                  className="flex justify-between items-center py-3 px-3 mb-2 rounded-md bg-teal-100 hover:bg-teal-200 transition"
                >
                  <span className="text-slate-800 font-medium">{`${getMonthName(month)} - ${year}`}</span>
                  <span className="text-slate-900 font-bold">{numberOfMatchingInvoices}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
  
}  
  
export default Home
