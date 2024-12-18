import React, { forwardRef, useEffect, useState } from "react";

const Template2 = forwardRef((props, ref) => {
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
    <div className="flex flex-col bg-white shadow-lg max-w-3xl" ref={ref}>
      <div className="relative h-40 bg-gray-600 text-white flex items-center justify-center">
        <h1 className="absolute uppercase font-raleway text-5xl md:text-7xl tracking-wider">
          {formData.firstName} {formData.lastName}
        </h1>
      </div>

      <div className="flex flex-row">
        <div className="bg-yellow-100 p-8 w-80 min-h-96 relative">
          <div className="">
            <p>{formData.email}</p>
            <p>{formData.phone}</p>
            <p>{formData.address}</p>

            {isSkillDataFound && (
              <div className="mt-8">
                <h3 className="uppercase border-b-2 border-gray-500 pb-1 font-semibold">
                  Skills
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {Object.values(formData.skillsets).map((skills) =>
                    skills.map((skill, index) => <li key={index}>{skill}</li>)
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 w-full">
          <h2 className="text-center uppercase text-3xl font-semibold mb-4">
            {formData.jobTitle}
          </h2>
          <div className="h-0.5 bg-gray-500 mx-auto w-60"></div>
          {formData.education.length > 0 && (
            <div className="mt-8">
              <h3 className="uppercase bg-gray-200 py-1 px-2 text-center font-semibold">
                education
              </h3>
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
            <div className="mt-8">
              <h3 className="uppercase bg-gray-200 py-1 px-2 text-center font-semibold">
                Experience
              </h3>
              {formData.experience.map((exp, index) => (
                <div className="mt-4" key={index}>
                  <div className="flex justify-between">
                    <div className="text-xl font-semibold">{exp.employer}</div>
                    <div className="text-gray-600">
                      {exp.startDate}-{exp.endDate}
                    </div>
                  </div>
                  <p className="text-gray-500">{exp.jobTitle}</p>
                  <p className="text-justify mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          )}
          {formData.projects.length > 0 && (
            <div className="mt-8">
              <h3 className="uppercase bg-gray-200 py-1 px-2 text-center font-semibold">
                PROJECTS
              </h3>
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
        </div>
      </div>
    </div>
  );
});

export default Template2;
