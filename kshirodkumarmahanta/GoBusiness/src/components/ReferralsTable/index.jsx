import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const ReferralsTable = ({ referrals }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const filteredData = referrals
    .filter((item) => {
      const searchText = search.toLowerCase();

      return (
        item.name.toLowerCase().includes(searchText) ||
        item.serviceName.toLowerCase().includes(searchText)
      );
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentRows = filteredData.slice(startIndex, endIndex);

  const formatDate = (date) => date.replaceAll("-", "/");

  const formatProfit = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  const handleRowClick = (item) => {
    setLoading(true);

    setTimeout(() => {
      navigate(`/referral/${item.id}`, {
        state: item,
      });
    }, 300);
  };

  return (
    <div className="table-container">
      <h2 className="table-title">All referrals</h2>

      <div className="table-controls">
        <div className="search-box">
          <label htmlFor="search">
           Search
        </label>

          <input
            id="search"
            aria-label="Search referrals"
            type="search"
            placeholder="Name or service…"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="sort-box">
          <label htmlFor="sort">
        Sort by date
        </label>

          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Newest first</option>
            <option value="asc">Oldest first</option>
          </select>
        </div>
      </div>

      {/* TABLE WRAPPER */}
      <div className="table-wrapper">
        {loading ? (
          <div className="loading-center">Loading...</div>
        ) : (
          <table className="referral-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>SERVICE</th>
                <th>DATE</th>
                <th>PROFIT</th>
              </tr>
            </thead>

            <tbody>
              {currentRows.length === 0 ? (
                <tr>
                  <td colSpan="4" className="no-data">
                    No matching entries
                  </td>
                </tr>
              ) : (
                currentRows.map((item) => (
                  <tr key={item.id} onClick={() => handleRowClick(item)}>
                    <td>{item.name}</td>
                    <td>{item.serviceName}</td>
                    <td>{formatDate(item.date)}</td>
                    <td className="profit">{formatProfit(item.profit)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      <div className="pagination">
        <p>
          Showing {startIndex + 1}–{Math.min(endIndex, filteredData.length)} of{" "}
          {filteredData.length} entries
        </p>

        <div className="page-buttons">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active-page" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralsTable;
