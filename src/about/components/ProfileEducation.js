import React from "react";

import classes from "./ProfileEducation.module.css";
import Certificate from "./Certificate";
import { certificateData } from "../../shared/data/certificate";

const ProfileEducation = (props) => {
  const renderCertificates = () => {
    return certificateData.map((certificate) => {
      return (
        <div className="col-lg-4 col-sm-6" key={certificate.id}>
          <Certificate
            year={certificate.year}
            name={certificate.name}
            academy={certificate.academy}
          />
        </div>
      );
    });
  };

  return (
    <div id="certificates" className={classes.ProfileEducation}>
      <h5 className="section-heading">Certificates</h5>
      <div className={classes.ProfileCertificate}>
        <div className="row">{renderCertificates()}</div>
      </div>
    </div>
  );
};

export default ProfileEducation;
