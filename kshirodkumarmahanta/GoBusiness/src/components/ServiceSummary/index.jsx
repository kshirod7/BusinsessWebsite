import "./index.css";

const ServiceSummary = () => {
  return (

    <section
  className="service-summary-container"
  aria-label="Service summary"
>
    
      <h2 className="section-heading">
        Service summary
      </h2>

      <div className="summary-grid">
        <div className="summary-card">
          <p className="summary-label">
            SERVICE
          </p>

          <h3 className="summary-value service-text">
            some service
          </h3>
        </div>

        <div className="summary-card">
          <p className="summary-label">
            YOUR REFERRALS
          </p>

          <h3 className="summary-value">
            0 + 0
          </h3>
        </div>

        <div className="summary-card">
          <p className="summary-label">
            ACTIVE REFERRALS
          </p>

          <h3 className="summary-value">
            0 + 0
          </h3>
        </div>

        <div className="summary-card">
          <p className="summary-label">
            TOTAL REF. EARNINGS
          </p>

          <h3 className="summary-value">
            $0.00
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;