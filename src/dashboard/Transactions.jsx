import React, { useEffect, useState } from "react";
import TnxList from "./components/content/transactions/TnxList";

const Transactions = () => {
  const transactionsData = [
    { id: 1, amount: 50, date: "2023-12-24", type: "debit" },
    { id: 2, amount: 75, date: "2023-12-24", type: "credit" },
    { id: 3, amount: 30, date: "2023-12-23", type: "debit" },
    { id: 4, amount: 30, date: "2023-12-23", type: "credit" },
    { id: 5, amount: 30, date: "2023-12-23", type: "credit" },
    { id: 6, amount: 30, date: "2023-12-22", type: "debit" },
    { id: 7, amount: 30, date: "2023-12-21", type: "credit" },
    // ... more transactions
  ];

  const [searchValue, setSearchValue] = useState("");
  const [transactions, settransactions] = useState(transactionsData);

  const search = () => {
    if (searchValue.trim() === "") {
      settransactions(transactionsData);
      return;
    }

    const res = transactions.filter((tnx) =>
      tnx.id.toString().includes(searchValue)
    );
    settransactions(res);
  };

  // search();

  // console.log(transactions);

  return (
    <div className="transactions-container">
      <h4>Transactions 🧾</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="input-group input-group-lg mb-3">
            <span className="input-group-text bg-white" id="basic-addon1">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search for transactions"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onKeyUp={search}
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>

      <TnxList transactions={transactions} />
    </div>
  );
};

export default Transactions;
