

import {useEffect, useState} from "react";
import Cookies from "js-cookie";

import Navbar from "../../components/Navbar";
import OverviewSection from "../../components/OverviewSection";
import ServiceSummary from "../../components/ServiceSummary";
import ReferralSection from "../../components/ReferralSection";
import ReferralsTable from "../../components/ReferralsTable";
import Footer from "../../components/Footer";

import "./index.css";

const Dashboard = () => {
  const [metrics, setMetrics] = useState([]);
  const [serviceSummary, setServiceSummary] = useState({});
  const [referralData, setReferralData] = useState({});
  const [referrals, setReferrals] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const token = Cookies.get("jwt_token");

        const response = await fetch(
          "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          const apiData = data.data || data;

          setMetrics(apiData.metrics || []);

          setServiceSummary(
            apiData.serviceSummary || {}
          );

          setReferralData(
            apiData.referral || {}
          );

          setReferrals(
            apiData.referrals || []
          );
        } else {
          setError(
          
            `${response.status} - ${
         data.message || "Failed to fetch data"
           }`
          );
        }
      } catch (error) {
        setError("Something went wrong");
      }

      setIsLoading(false);
    };

    getDashboardData();
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div
        role="alert"
        className="error-container"
      >
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="dashboard-bg">
      <Navbar />

      <div className="dashboard-content">
        <h1 className="dashboard-heading">
          Referral Dashboard
        </h1>

        <p className="dashboard-description">
          Track your referrals, earnings,
          and partner activity in one place.
        </p>

        <OverviewSection
          metrics={metrics}
        />

        <ServiceSummary
          summary={serviceSummary}
        />

        <ReferralSection
          referral={referralData}
        />

        <ReferralsTable
          referrals={referrals}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
