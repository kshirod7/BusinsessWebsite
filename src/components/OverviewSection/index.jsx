import {
  FaDollarSign,
  FaCreditCard,
  FaLink,
  FaHourglassHalf,
  FaPercentage,
  FaCoins,
  FaUsers,
  FaExchangeAlt,
} from "react-icons/fa";

import "./index.css";

const icons = [
  <FaDollarSign />,
  <FaCreditCard />,
  <FaLink />,
  <FaHourglassHalf />,
  <FaPercentage />,
  <FaCoins />,
  <FaUsers />,
  <FaExchangeAlt />,
];

const OverviewSection = ({metrics}) => {
  return (

    <section
  className="overview-section"
  role="region"
  aria-label="Overview metrics"
>
    <div className="overview-container">
      <h2 className="overview-heading">
        Overview
      </h2>

      <div className="overview-grid">
        {metrics.map((item, index) => (
          <div
            key={item.id}
            className="overview-card"
          >
            <div className="icon-box">
              {icons[index]}
            </div>

            <h2 className="overview-value">
              {item.value}
            </h2>

            <p className="overview-label">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>

    </section>
  );
};

export default OverviewSection;