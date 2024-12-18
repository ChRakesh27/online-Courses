import React, { forwardRef, useEffect, useState } from "react";

const Template1 = forwardRef((props, ref) => {
  const { formData } = props;
  const [isSkillDataFound, setIsSkillDataFound] = useState(false);
  function isSkillFound() {
    for (const val of Object.values(formData.skillsets)) {
      if (val.length > 0) {
        setIsSkillDataFound(true);
        return;
      }
    }
    setIsSkillDataFound(false);
  }

  useEffect(() => {
    isSkillFound();
  }, [formData.skillsets]);
  return (
    <div
      className="bg-white rounded-lg shadow-lg max-w-3xl min-h-96 p-5 space-y-3"
      ref={ref}
    >
      <div className="text-center border-b-2 py-3">
        <div className="text-5xl">
          {formData.firstName} {formData.lastName}
        </div>
        <div className="mt-2">{formData.jobTitle}</div>
        <div>
          {formData.email && formData.email + " | "}
          {formData.phone && formData.phone + " | "}
          {formData.address && formData.address}
        </div>
      </div>
      {formData.education.length > 0 && (
        <div>
          <div className="text-xl font-bold text-gray-600">education</div>
          {formData.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <div className="font-bold">{edu.institution}</div>
                <div>
                  {edu.startDate}
                  {edu.gradDate && " - " + edu.gradDate}
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  {edu.degreeType} {edu.fieldOfStudy}
                </div>
                <div>{edu.location}</div>
              </div>
              {edu.score && (
                <div className="text-gray-500">
                  {edu.scoreType}: {edu.score}
                  {edu.scoreType === "percentage" && "%"}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {formData.experience.length > 0 && (
        <div>
          <div className="text-xl font-bold text-gray-600">EXPERIENCE</div>
          {formData.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <div>
                  <span className="font-bold">{exp.employer}</span>
                  {exp.jobTitle && " | " + exp.jobTitle}
                </div>
                <div>
                  {exp.location && exp.location + "|"} {exp.startDate}-
                  {exp.endDate}
                </div>
              </div>
              <div>{exp.description}</div>
            </div>
          ))}
        </div>
      )}
      {isSkillDataFound && (
        <div>
          <div className="text-xl font-bold text-gray-600">SKILLS</div>
          {Object.keys(formData.skillsets).map(
            (ele) =>
              formData.skillsets[ele].length > 0 && (
                <div className="flex" key={ele}>
                  <div className="text-gray-500">{ele}: </div>
                  <div className="px-2 ">
                    {formData.skillsets[ele].join(", ")}
                  </div>
                </div>
              )
          )}
        </div>
      )}
      {formData.projects.length > 0 && (
        <div>
          <div className="text-xl font-bold text-gray-600">PROJECTS </div>
          {formData.projects.map((pro, index) => (
            <div key={index}>
              {(pro.name || pro.startDate || pro.endDate) && (
                <div className="flex justify-between">
                  <div>
                    <span className="font-bold ">{pro.name} </span>
                    {pro.link && (
                      <a href={pro.link} rel="ref" target="_blank">
                        - Link
                      </a>
                    )}
                  </div>
                  <div>
                    {pro.startDate}
                    {pro.endDate && " - " + pro.endDate}
                  </div>
                </div>
              )}
              {pro.technologies && (
                <div>
                  <span className="text-gray-500">Technologies:</span>{" "}
                  {pro.technologies}
                </div>
              )}
              {pro.description && (
                <div>
                  <span className="text-gray-500">Description:</span>{" "}
                  {pro.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {formData.certificates.length > 0 && (
        <div>
          <div className="text-xl font-bold text-gray-600">CERTIFICATIONS </div>
          {formData.certificates.map((cer, index) => (
            <div key={index}>
              <div className="">
                {cer.link ? (
                  <a href={cer.link} rel="ref" target="_blank">
                    {cer.name}
                  </a>
                ) : (
                  cer.name
                )}
                {cer.issuedBy && " - " + cer.issuedBy}
              </div>
            </div>
          ))}
        </div>
      )}
      {formData.awards && (
        <div>
          <div className="text-xl font-bold text-gray-600">
            HONORS & AWARDS{" "}
          </div>
          <div>{formData.awards}</div>
        </div>
      )}
    </div>
  );
});

export default Template1;
