

import {Link, useLocation} from "react-router-dom";
import Navbar from "../../components/Navbar";

import "./index.css";

const ReferralDetails = () => {
  const location = useLocation();

  const referral = location.state;

  if (!referral) {
    return (
      <>
        <Navbar />

        <div className="not-found-container">
          <h1>Referral not found</h1>

          <Link to="/">
            Back to dashboard
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="details-page">
        <Link
          to="/"
          className="back-link"
        >
          ← Back to dashboard
        </Link>

        <h1 className="page-heading">
          Referral Details
        </h1>

        <p className="page-description">
          Full information for this referral partner.
        </p>

        <div className="details-card">
          <div className="card-top">
            <h2 className="partner-name">
              {referral.name}
            </h2>

            <span className="service-badge">
              {referral.serviceName}
            </span>
          </div>

          <hr className="divider" />

          <div className="detail-row">
            <p className="label">REFERRAL ID</p>

            <p className="value">{referral.id}</p>
          </div>

          <div className="detail-row">
            <p className="label">NAME</p>

            <p className="value">{referral.name}</p>
          </div>

          <div className="detail-row">
            <p className="label">SERVICE NAME</p>

            <p className="value">
              {referral.serviceName}
            </p>
          </div>

          <div className="detail-row">
            <p className="label">DATE</p>

            <p className="value">
              {referral.date.replaceAll("-", "/")}
            </p>
          </div>

          <div className="detail-row no-border">
            <p className="label">PROFIT</p>

            <p className="value">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(referral.profit)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralDetails;