import React, { useEffect, useRef, useState } from "react";
import Template1 from "./ResumeTemplates/Template1";
import Template2 from "./ResumeTemplates/Template2";
import jsPDF from "jspdf";

function ResumeForm({ selectedTemplate, prevFormData, onSendFormData }) {
  const templateRef = useRef();

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
    education: false,
    experience: false,
    skillsets: false,
    projects: false,
    certificates: false,
    awards: false,
    subeducation: 0,
    subExperience: 0,
    subProject: 0,
    subCertificate: 0,
  });

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "9876543210",
    address: "123 Main Street, Springfield",
    jobTitle: "Software Developer",
    education: [
      {
        id: 1,
        institution: "Springfield University",
        location: "Springfield",
        degreeType: "Bachelor's",
        fieldOfStudy: "Computer Science",
        startDate: "August 2015",
        gradDate: "May 2019",
        scoreType: "CGPA",
        score: "8.5",
      },
      {
        id: 2,
        institution: "Springfield High School",
        location: "Springfield",
        degreeType: "High School Diploma",
        fieldOfStudy: "Science",
        startDate: "June 2013",
        gradDate: "May 2015",
        scoreType: "Percentage",
        score: "90%",
      },
    ],
    experience: [
      {
        id: 1,
        employer: "Tech Solutions Inc.",
        jobTitle: "Frontend Developer",
        startDate: "July 2019",
        endDate: "December 2021",
        location: "Springfield",
        description:
          "Developed and maintained user interfaces using React and Angular.",
      },
      {
        id: 2,
        employer: "Innovatech LLC",
        jobTitle: "Full Stack Developer",
        startDate: "January 2022",
        endDate: "Present",
        location: "Shelbyville",
        description:
          "Built scalable web applications using Node.js, MongoDB, and React.",
      },
    ],
    skillsets: {
      languages: ["JavaScript", "Python", "Java"],
      libraries: ["React", "Angular", "Redux"],
      tools: ["Docker", "Git", "Webpack"],
      database: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    projects: [
      {
        id: 1,
        name: "E-commerce Website",
        technologies: "React, Node.js, MongoDB",
        link: "https://github.com/johndoe/ecommerce",
        startDate: "March 2021",
        endDate: "July 2021",
        description:
          "Developed a fully functional e-commerce platform with payment integration.",
      },
      {
        id: 2,
        name: "Quiz App",
        technologies: "Angular, Firebase",
        link: "https://github.com/johndoe/quiz-app",
        startDate: "January 2022",
        endDate: "April 2022",
        description:
          "Created a quiz application with user authentication and leaderboard features.",
      },
    ],
    certificates: [
      {
        id: 1,
        name: "AWS Certified Developer",
        link: "https://certificates.aws.com/12345",
        issuedBy: "Amazon Web Services",
      },
      {
        id: 2,
        name: "Full Stack Developer Certification",
        link: "https://certificates.coursera.com/67890",
        issuedBy: "Coursera",
      },
    ],
    awards: "Best Developer Award - Innovatech LLC, 2023",
  });

  useEffect(() => {
    if (prevFormData) {
      setFormData(prevFormData);
    }
  }, [prevFormData]);

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

  const templates = [
    <Template1 formData={formData} ref={templateRef} />,
    <Template2 formData={formData} ref={templateRef} />,
  ];

  function onDownloadPdf() {
    const doc = new jsPDF("p", "pt", [1050, 745]);
    doc.html(templateRef.current, {
      callback: function (doc) {
        doc.save(`${formData.firstName}_Resume.pdf`);
      },
      x: 0,
      y: 0,
    });
  }

  return (
    <div className="w-full h-screen ">
      <div className="flex">
        <div className="w-1/3 p-8 py-3 border-2 h-screen overflow-y-auto">
          <div>
            <div className="text-3xl">Resume Details</div>
            <div className="space-y-3">
              <div className="border-t-2 pt-4">
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
              <div className="border-t-2 pt-4">
                <div
                  className="text-lg font-bold cursor-pointer flex justify-between items-center"
                  onClick={() =>
                    setIsExpend({ ...isExpend, education: !isExpend.education })
                  }
                >
                  education
                  {isExpend.education ? (
                    <div className="text-2xl ">&#11206;</div>
                  ) : (
                    <div className="text-2xl ">&#11205;</div>
                  )}
                </div>
                {isExpend.education && (
                  <div className="space-y-3">
                    {formData.education.map((edu, index) => (
                      <div key={edu.id} className="border-2 p-2 rounded-lg">
                        <div className="cursor-pointer flex justify-between items-center">
                          <div
                            className="w-full"
                            onClick={() =>
                              setIsExpend((val) => ({
                                ...val,
                                subeducation:
                                  index === val.subeducation ? -1 : index,
                              }))
                            }
                          >
                            &#11048; {formData.education[index].institution}{" "}
                          </div>
                          <button
                            className="text-3xl text-red-500"
                            onClick={() => {
                              removeItem("education", edu.id);
                            }}
                          >
                            &times;
                          </button>
                        </div>
                        {isExpend.subeducation === index && (
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
                                    value={
                                      formData.education[index].institution
                                    }
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "education",
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
                                    value={formData.education[index].location}
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Location"
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "education",
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
                                    value={formData.education[index].degreeType}
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "education",
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
                                      formData.education[index].fieldOfStudy
                                    }
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Field of Study"
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "education",
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
                                    value={formData.education[index].startDate}
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "education",
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
                                    value={formData.education[index].gradDate}
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Grad Month / Year"
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "education",
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
                                    value={formData.education[index].scoreType}
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "education",
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
                                    value={formData.education[index].score}
                                    className="border-2 w-full rounded-lg p-2"
                                    placeholder="Score"
                                    onChange={(e) =>
                                      onHandleEduChange(
                                        "education",
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
                            education: [
                              ...val.education,
                              {
                                ...educationDetails,
                                id: val.education.length + 1,
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
              <div className="border-t-2 pt-4">
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
              <div className="border-t-2 pt-4">
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
              <div className="border-t-2 pt-4">
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
              <div className="border-t-2 pt-4">
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
              <div className="border-t-2 pt-4">
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
                        onChange={onHandleChange}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 px-32 py-3 border-2 h-screen overflow-y-auto bg-gray-300">
          <div className="flex justify-between pb-3 items-center">
            <div className="text-xl">Preview </div>
            <div className="flex space-x-3">
              <button
                className="text-blue-700"
                onClick={() => onSendFormData(formData)}
              >
                Change Template
              </button>
              <button
                className="bg-green-500 shadow-lg px-2 rounded-lg "
                onClick={onDownloadPdf}
              >
                Download
              </button>
            </div>
          </div>
          {templates[selectedTemplate]}
        </div>
      </div>
    </div>
  );
}

export default ResumeForm;
