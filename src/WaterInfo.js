import React from "react";
import PropTypes from "prop-types";

function WaterInfo({ SITE_ID, MSR_DATE, MSR_TIME, W_TEMP }) {
    return <h4>{SITE_ID}</h4>
}

WaterInfo.propTypes = {
    SITE_ID: PropTypes.string.isRequired,
    MSR_DATE: PropTypes.string.isRequired,
    MSR_TIME: PropTypes.string.isRequired,
    W_TEMP: PropTypes.string.isRequired
}

export default WaterInfo;