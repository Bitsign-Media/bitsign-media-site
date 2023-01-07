import React from "react";
import ServiceItems from "../components/PageElements/Services/ServiceItems";
import "../styles/services.css";

export default function Services() {
  return (
    <div className="services">
      <h1 className="page-title">Services</h1>
      <ServiceItems />
    </div>
  );
}
