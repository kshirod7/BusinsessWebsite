import "./index.css";

const ReferralSection = () => {
  return (
    <section
  className="referral-section"
  aria-label="Share referral"
>
    <div className="referral-container">
      <h2 className="section-heading">
        Refer friends and earn more
      </h2>

      <div className="referral-grid">
        <div className="referral-field">
          <label>
            YOUR REFERRAL LINK
          </label>

          <div className="copy-row">
            <input
              type="text"
              value="https://gobusiness.com/?referral=ABCXYZ"
              readOnly
            />

            <button>
              Copy
            </button>
          </div>
        </div>

        <div className="referral-field">
          <label>
            YOUR REFERRAL CODE
          </label>

          <div className="copy-row">
            <input
              type="text"
              value="ABCXYZ"
              readOnly
            />

            <button>
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ReferralSection;