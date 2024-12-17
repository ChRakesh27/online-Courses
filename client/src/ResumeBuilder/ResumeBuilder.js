import React, { useEffect, useState } from "react";

function ResumeBuilder() {
  const educationDetails = {
    id: 1,
    institution: "",
    location: "",
    degreeType: "",
    fieldOfStudy: "",
    startDate: "",
    gradDate: "",
    scoreType: "cgpa",
    score: "",
  };
  const experienceDetails = {
    id: 1,
    employer: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  };

  const projectDetails = {
    id: 1,
    name: "",
    technologies: "",
    link: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  const certificateDetails = {
    id: 1,
    name: "",
    link: "",
    issuedBy: "",
  };
  const skillsets = {
    languages: [],
    libraries: [],
    tools: [],
    database: [],
  };

  const [isExpend, setIsExpend] = useState({
    profile: false,
    eduction: false,
    experience: false,
    skillsets: false,
    projects: false,
    certificates: false,
    awards: false,
    subEduction: 0,
    subExperience: 0,
    subProject: 0,
    subCertificate: 0,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    jobTitle: "",
    eduction: [],
    experience: [],
    skillsets: skillsets,
    projects: [],
    certificates: [],
    awards: "",
  });
  const [isSkillDataFound, setIsSkillDataFound] = useState(false);
  function onHandleChange(e) {
    const { name, value } = e.target;
    setFormData((val) => ({ ...val, [name]: value }));
  }

  function onHandleEduChange(fieldName, name, value, eduIndex) {
    const updatedFieldNameDetails = formData[fieldName].map((ele, index) => {
      if (eduIndex === index) {
        ele[name] = value;
      }
      return ele;
    });
    setFormData((val) => ({
      ...val,
      [fieldName]: updatedFieldNameDetails,
    }));
  }
  function removeItem(fieldName, id) {
    setFormData((val) => ({
      ...val,
      [fieldName]: val[fieldName].filter((ele) => ele.id !== id),
    }));
  }

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
    <div className="w-full h-screen ">
      <div className="flex">
        <div className="w-1/3 p-8 py-3 border-2 h-screen overflow-y-auto">
          <div>
            <div className="text-3xl">Resume Details</div>
            <div className="space-y-3">
              <div className="border-b-2 pb-4">
                <div
                  className="text-lg font-bold cursor-pointer flex justify-between items-center"
                  onClick={() =>
                    setIsExpend({ ...isExpend, profile: !isExpend.profile })
                  }
                >
                  <div>Profile Info</div>
                  {isExpend.profile ? (
                    <div className="text-2xl ">&#11206;</div>
                  ) : (
                    <div className="text-2xl ">&#11205;</div>
                  )}
                </div>
                {isExpend.profile && (
                  <div>
                    <div className="flex justify-between space-x-3">
                      <div className="w-full">
                        <label>First Name</label>
                        <div className="w-full">
                          <input
                            type="text"
                            className="border-2 w-full rounded-lg p-2"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={onHandleChange}
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <label>Last Name</label>
                        <div>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            className="border-2 w-full rounded-lg p-2"
                            placeholder="Last Name"
                            onChange={onHandleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between space-x-3">
                      <div className="w-full">
                        <label>Email</label>
                        <div className="w-full">
                          <input
                            type="text"
                            className="border-2 w-full rounded-lg p-2"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={onHandleChange}
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <label>Phone</label>
                        <div>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            className="border-2 w-full rounded-lg p-2"
                            placeholder="Phone"
                            onChange={onHandleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between space-x-3">
                      <div className="w-full">
                        <label>Address</label>
                        <div className="w-full">
                          <input
                            type="text"
                            className="border-2 w-full rounded-lg p-2"
                            placeholder="Address"
                            name="address"
                            value={formData.address}
                            onChange={onHandleChange}
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <label>Job Title</label>
                        <div>
                          <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            className="border-2 w-full rounded-lg p-2"
                            placeholder="Job Title"
                            onChange={onHandleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="border-b-2 pb-4">
                <div
                  className="text-lg font-bold cursor-pointer flex justify-between items-center"
                  onClick={() =>
                    setIsExpend({ ...isExpend, eduction: !isExpend.eduction })
                  }
                >
                  Eduction
                  {isExpend.eduction ? (
                    <div className="text-2xl ">&#11206;</div>
                  ) : (
                    <div className="text-2xl ">&#11205;</div>
                  )}
                </div>
                {isExpend.eduction && (
                  <div className="space-y-3">
                    {formData.eduction.map((edu, index) => (
                      <div key={edu.id} className="border-2 p-2 rounded-lg">
                        <div className="cursor-pointer flex justify-between items-center">
                          <div
                            className="w-full"
                            onClick={() =>
                              setIsExpend((val) => ({
                                ...val,
                                subEduction:
                                  index === val.subEduction ? -1 : index,
                              }))
                            }
                          >
                            &#11048; {formData.eduction[index].institution}{" "}
                          </div>
                          <button
                            className="text-3xl text-red-500"
                            onClick={() => {
                              removeItem("eduction", edu.id);
                            }}
                          >
                            &times;
                          </button>
                        </div>
                        {isExpend.subEduction === index && (
                          <div className=" border-t-2">
                            <div className="flex justify-between space-x-3">
                              <div className="w-full">
                                <label>Institution </label>
                                <div className="w-full">
                                  <input
                                    type="text"
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Institution"
                                    name="institution"
                                    value={formData.eduction[index].institution}
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "eduction",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  />
                                </div>
                              </div>
                              <div className="w-full">
                                <label>Location</label>
                                <div>
                                  <input
                                    type="text"
                                    name="location"
                                    value={formData.eduction[index].location}
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Location"
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "eduction",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between space-x-3">
                              <div className="w-full">
                                <label>Degree Type</label>
                                <div className="w-full">
                                  <input
                                    type="text"
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Degree Type"
                                    name="degreeType"
                                    value={formData.eduction[index].degreeType}
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "eduction",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  />
                                </div>
                              </div>
                              <div className="w-full">
                                <label>Field of Study</label>
                                <div>
                                  <input
                                    type="text"
                                    name="fieldOfStudy"
                                    value={
                                      formData.eduction[index].fieldOfStudy
                                    }
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Field of Study"
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "eduction",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between space-x-3">
                              <div className="w-full">
                                <label>Start Month / Year</label>
                                <div className="w-full">
                                  <input
                                    type="text"
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Start Month / Year"
                                    name="startDate"
                                    value={formData.eduction[index].startDate}
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "eduction",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  />
                                </div>
                              </div>
                              <div className="w-full">
                                <label>Grad Month / Year</label>
                                <div>
                                  <input
                                    type="text"
                                    name="gradDate"
                                    value={formData.eduction[index].gradDate}
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Grad Month / Year"
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "eduction",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-full">
                              <label>Scores</label>
                              <div className="flex justify-between space-x-3">
                                <div className="w-full">
                                  <select
                                    className="border-2 w-full rounded-lg p-2"
                                    name="scoreType"
                                    value={formData.eduction[index].scoreType}
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "eduction",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  >
                                    <option value="cgpa">CGPA</option>
                                    <option value="sgpa">SGPA</option>
                                    <option value="percentage">
                                      PERCENTAGE
                                    </option>
                                  </select>
                                </div>
                                <div>
                                  <input
                                    type="text"
                                    name="score"
                                    value={formData.eduction[index].score}
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Score"
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "eduction",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    <div>
                      <button
                        className="w-full border-2 rounded-lg p-2 mt-5 bg-blue-100"
                        onClick={() => {
                          setFormData((val) => ({
                            ...val,
                            eduction: [
                              ...val.eduction,
                              {
                                ...educationDetails,
                                id: val.eduction.length + 1,
                              },
                            ],
                          }));
                        }}
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="border-b-2 pb-4">
                <div
                  className="text-lg font-bold cursor-pointer flex justify-between items-center"
                  onClick={() =>
                    setIsExpend({
                      ...isExpend,
                      experience: !isExpend.experience,
                    })
                  }
                >
                  Experience
                  {isExpend.experience ? (
                    <div className="text-2xl ">&#11206;</div>
                  ) : (
                    <div className="text-2xl ">&#11205;</div>
                  )}
                </div>
                {isExpend.experience && (
                  <div className="space-y-3">
                    {formData.experience.map((exp, index) => (
                      <div key={exp.id} className="border-2 p-2 rounded-lg">
                        <div className="cursor-pointer flex justify-between items-center">
                          <div
                            className="w-full"
                            onClick={() =>
                              setIsExpend((val) => ({
                                ...val,
                                subExperience:
                                  index === val.subExperience ? -1 : index,
                              }))
                            }
                          >
                            &#11048; {formData.experience[index].employer}{" "}
                          </div>
                          <button
                            className="text-3xl text-red-500"
                            onClick={() => {
                              removeItem("experience", exp.id);
                            }}
                          >
                            &times;
                          </button>
                        </div>
                        {isExpend.subExperience === index && (
                          <div className=" border-t-2">
                            <div className="flex justify-between space-x-3">
                              <div className="w-full">
                                <label>Employer </label>
                                <div className="w-full">
                                  <input
                                    type="text"
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Employer"
                                    name="employer"
                                    value={formData.experience[index].employer}
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "experience",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  />
                                </div>
                              </div>
                              <div className="w-full">
                                <label>Job Title</label>
                                <div>
                                  <input
                                    type="text"
                                    name="jobTitle"
                                    value={formData.experience[index].jobTitle}
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Job Title"
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "experience",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-between space-x-3">
                              <div className="w-full">
                                <label>Start Month / Year</label>
                                <div className="w-full">
                                  <input
                                    type="text"
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Start Month / Year"
                                    name="startDate"
                                    value={formData.experience[index].startDate}
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "experience",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  />
                                </div>
                              </div>
                              <div className="w-full">
                                <label>End Month / Year</label>
                                <div>
                                  <input
                                    type="text"
                                    name="endDate"
                                    value={formData.experience[index].endDate}
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="End Month / Year"
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "experience",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-full">
                              <label>Location</label>
                              <div className="w-full">
                                <input
                                  type="text"
                                  className="border-2 w-full rounded-lg p-2"
                                  placeholder="location"
                                  name="location"
                                  value={formData.experience[index].location}
                                  onChange={(e) =>
                                    onHandleEduChange(
                                      "experience",
                                      e.target.name,
                                      e.target.value,
                                      index
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="flex justify-between space-x-3">
                              <div className="w-full">
                                <label>Description</label>
                                <div className="w-full">
                                  <textarea
                                    type="text"
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Description"
                                    name="description"
                                    value={
                                      formData.experience[index].description
                                    }
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "experience",
                                        e.target.name,
                                        e.target.value,
                                        index
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    <div>
                      <button
                        className="w-full border-2 rounded-lg p-2 mt-5 bg-blue-100"
                        onClick={() => {
                          setFormData((val) => ({
                            ...val,
                            experience: [
                              ...val.experience,
                              {
                                ...experienceDetails,
                                id: val.experience.length + 1,
                              },
                            ],
                          }));
                        }}
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="border-b-2 pb-4">
                <div
                  className="text-lg font-bold cursor-pointer flex justify-between items-center"
                  onClick={() =>
                    setIsExpend({ ...isExpend, skillsets: !isExpend.skillsets })
                  }
                >
                  <div>
                    Skillsets{" "}
                    <small className="font-normal">(press enter to add)</small>
                  </div>
                  {isExpend.skillsets ? (
                    <div className="text-2xl ">&#11206;</div>
                  ) : (
                    <div className="text-2xl ">&#11205;</div>
                  )}
                </div>
                {isExpend.skillsets && (
                  <div>
                    {Object.keys(formData.skillsets).map((skill) => (
                      <div key={skill} className="space-y-2">
                        <div className="w-full mt-3">
                          <label>Add {skill} </label>
                          <div className="w-full">
                            <input
                              type="text"
                              className="border-2 w-full rounded-lg p-2"
                              placeholder={"Add " + skill}
                              name={skill}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  setFormData((val) => ({
                                    ...val,
                                    skillsets: {
                                      ...val.skillsets,
                                      [skill]: [
                                        ...val.skillsets[skill],
                                        e.target.value,
                                      ],
                                    },
                                  }));
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap space-x-3">
                          {formData.skillsets[skill].map((ele, index) => (
                            <button
                              className="border-2 px-3 py-1 text-center rounded-lg bg-blue-300 "
                              key={index}
                              onClick={() => {
                                setFormData((val) => ({
                                  ...val,
                                  skillsets: {
                                    ...val.skillsets,
                                    [skill]: val.skillsets[skill].filter(
                                      (_, i) => i !== index
                                    ),
                                  },
                                }));
                              }}
                            >
                              {ele}
                              &times;
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="border-b-2 pb-4">
                <div
                  className="text-lg font-bold cursor-pointer flex justify-between items-center"
                  onClick={() =>
                    setIsExpend({ ...isExpend, projects: !isExpend.projects })
                  }
                >
                  Projects
                  {isExpend.projects ? (
                    <div className="text-2xl ">&#11206;</div>
                  ) : (
                    <div className="text-2xl ">&#11205;</div>
                  )}
                </div>
                {isExpend.projects && (
                  <div className="space-y-3">
                    {formData.projects.map((pro, index) => (
                      <div key={pro.id} className="border-2 p-2 rounded-lg">
                        <div className="cursor-pointer flex justify-between items-center">
                          <div
                            className="w-full"
                            onClick={() =>
                              setIsExpend((val) => ({
                                ...val,
                                subProject:
                                  index === val.subProject ? -1 : index,
                              }))
                            }
                          >
                            &#11048; {formData.projects[index].name}{" "}
                          </div>
                          <button
                            className="text-3xl text-red-500"
                            onClick={() => {
                              removeItem("projects", pro.id);
                            }}
                          >
                            &times;
                          </button>
                        </div>
                        {isExpend.subProject === index && (
                          <div className=" border-t-2">
                            <div className="w-full">
                              <label>Project Name </label>
                              <div className="w-full">
                                <input
                                  type="text"
                                  className="border-2 w-full rounded-lg p-2"
                                  placeholder="Project Name"
                                  name="name"
                                  value={formData.projects[index].name}
                                  onChange={(e) =>
                                    onHandleEduChange(
                                      "projects",
                                      e.target.name,
                                      e.target.value,
                                      index
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <label>Technologies Used </label>
                              <div className="w-full">
                                <input
                                  type="text"
                                  className="border-2 w-full rounded-lg p-2"
                                  placeholder="Technologies Used"
                                  name="technologies"
                                  value={formData.projects[index].technologies}
                                  onChange={(e) =>
                                    onHandleEduChange(
                                      "projects",
                                      e.target.name,
                                      e.target.value,
                                      index
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <label>Project Link / GitHub Repository </label>
                              <div className="w-full">
                                <input
                                  type="text"
                                  className="border-2 w-full rounded-lg p-2"
                                  placeholder="Project Link / GitHub Repository"
                                  name="link"
                                  value={formData.projects[index].link}
                                  onChange={(e) =>
                                    onHandleEduChange(
                                      "projects",
                                      e.target.name,
                                      e.target.value,
                                      index
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <label>Description </label>
                              <div className="w-full">
                                <textarea
                                  type="text"
                                  className="border-2 w-full rounded-lg p-2"
                                  placeholder="Description"
                                  name="description"
                                  value={formData.projects[index].description}
                                  onChange={(e) =>
                                    onHandleEduChange(
                                      "projects",
                                      e.target.name,
                                      e.target.value,
                                      index
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}{" "}
                    <div>
                      <button
                        className="w-full border-2 rounded-lg p-2 mt-5 bg-blue-100"
                        onClick={() => {
                          setFormData((val) => ({
                            ...val,
                            projects: [
                              ...val.projects,
                              {
                                ...projectDetails,
                                id: val.projects.length + 1,
                              },
                            ],
                          }));
                        }}
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="border-b-2 pb-4">
                <div
                  className="text-lg font-bold cursor-pointer flex justify-between items-center"
                  onClick={() =>
                    setIsExpend({
                      ...isExpend,
                      certificates: !isExpend.certificates,
                    })
                  }
                >
                  Certificates
                  {isExpend.certificates ? (
                    <div className="text-2xl ">&#11206;</div>
                  ) : (
                    <div className="text-2xl ">&#11205;</div>
                  )}
                </div>
                {isExpend.certificates && (
                  <div className="space-y-3">
                    {formData.certificates.map((cer, index) => (
                      <div key={cer.id} className="border-2 p-2 rounded-lg">
                        <div className="cursor-pointer flex justify-between items-center">
                          <div
                            className="w-full"
                            onClick={() =>
                              setIsExpend((val) => ({
                                ...val,
                                subCertificate:
                                  index === val.subCertificate ? -1 : index,
                              }))
                            }
                          >
                            &#11048; {formData.certificates[index].name}{" "}
                          </div>
                          <button
                            className="text-3xl text-red-500"
                            onClick={() => {
                              removeItem("certificates", cer.id);
                            }}
                          >
                            &times;
                          </button>
                        </div>
                        {isExpend.subCertificate === index && (
                          <div className=" border-t-2">
                            <div className="w-full">
                              <label>Certificate Name </label>
                              <div className="w-full">
                                <input
                                  type="text"
                                  className="border-2 w-full rounded-lg p-2"
                                  placeholder="Certificate Name"
                                  name="name"
                                  value={formData.certificates[index].name}
                                  onChange={(e) =>
                                    onHandleEduChange(
                                      "certificates",
                                      e.target.name,
                                      e.target.value,
                                      index
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <label>Certificate Link </label>
                              <div className="w-full">
                                <input
                                  type="text"
                                  className="border-2 w-full rounded-lg p-2"
                                  placeholder="Certificate Link"
                                  name="link"
                                  value={formData.certificates[index].link}
                                  onChange={(e) =>
                                    onHandleEduChange(
                                      "certificates",
                                      e.target.name,
                                      e.target.value,
                                      index
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <label>Issued by </label>
                              <div className="w-full">
                                <input
                                  type="text"
                                  className="border-2 w-full rounded-lg p-2"
                                  placeholder="Issued by"
                                  name="issuedBy"
                                  value={formData.certificates[index].issuedBy}
                                  onChange={(e) =>
                                    onHandleEduChange(
                                      "certificates",
                                      e.target.name,
                                      e.target.value,
                                      index
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}{" "}
                    <div>
                      <button
                        className="w-full border-2 rounded-lg p-2 mt-5 bg-blue-100"
                        onClick={() => {
                          setFormData((val) => ({
                            ...val,
                            certificates: [
                              ...val.certificates,
                              {
                                ...certificateDetails,
                                id: val.certificates.length + 1,
                              },
                            ],
                          }));
                        }}
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="border-b-2 pb-4">
                <div
                  className="text-lg font-bold cursor-pointer flex justify-between items-center"
                  onClick={() =>
                    setIsExpend({ ...isExpend, awards: !isExpend.awards })
                  }
                >
                  Additional
                  {isExpend.awards ? (
                    <div className="text-2xl ">&#11206;</div>
                  ) : (
                    <div className="text-2xl ">&#11205;</div>
                  )}
                </div>
                {isExpend.awards && (
                  <div className="w-full">
                    <label> </label>
                    <div className="w-full">
                      <input
                        type="text"
                        className="border-2 w-full rounded-lg p-2"
                        placeholder="Honors & Awards"
                        name="awards"
                        value={formData.awards}
                        onChange={(e) =>
                          setFormData((val) => ({
                            ...val,
                            awards: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 px-32 py-3 border-2 h-screen overflow-y-auto bg-gray-300">
          <div className="text-xl">Preview</div>

          <div className="bg-white rounded-lg p-16 py-10 space-y-3">
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
            {formData.eduction.length > 0 && (
              <div>
                <div className="text-xl">EDUCTION</div>
                {formData.eduction.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between">
                      <div className="font-bold">{edu.institution}</div>
                      <div>
                        {edu.startDate}-{edu.gradDate}
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
                <div className="text-xl">EXPERIENCE</div>
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
                <div className="text-xl">SKILLS</div>
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
                <div className="text-xl">PROJECTS </div>
                {formData.projects.map((pro, index) => (
                  <div key={index}>
                    {(pro.name || pro.startDate || pro.endDate) && (
                      <div className="flex justify-between">
                        <div className="font-bold">{pro.name}</div>
                        <div>
                          {pro.startDate}-{pro.endDate}
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
                <div className="text-xl">CERTIFICATIONS </div>
                {formData.certificates.map((cer, index) => (
                  <div key={index}>
                    <div className="">
                      {cer.name} - {cer.issuedBy}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {formData.awards && (
              <div>
                <div className="text-xl">HONORS & AWARDS </div>
                <div>{formData.awards}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
