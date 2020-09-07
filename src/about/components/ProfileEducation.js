import React, { useContext } from "react";

import classes from "./ProfileEducation.module.css";
import Certificate from "./Certificate";
import { CertificateContext } from "../../shared/context/certificate-context";

const ProfileEducation = (props) => {
  const { certificates } = useContext(CertificateContext);

  const renderCertificates = () => {
    return certificates.map((certificate) => {
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
