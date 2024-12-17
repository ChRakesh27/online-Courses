import React, { useState } from "react";

function ResumeBuilder() {
  const [FormData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    jobTitle: "",
  });
  function onHandleChange(e) {
    const { name, value } = e.target;
    setFormData((val) => ({ ...val, [name]: value }));
  }

  return (
    <div className="w-full h-screen ">
      <div className="flex">
        <div className="w-1/3 p-3 border-2 h-screen overflow-y-auto">
          <div>
            <div className="text-3xl">Resume Details</div>
            <div className="space-y-3">
              <div>
                <div className="text-lg font-bold cursor-pointer">
                  <span>Profile Info</span>
                </div>
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
                          className="border-2 w-full rounded-lg p-2"
                          placeholder="Job Title"
                          onChange={onHandleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-lg font-bold">Eduction</div>
                <div>
                  <div className="flex justify-between space-x-3">
                    <div className="w-full">
                      <label>Institution </label>
                      <div className="w-full">
                        <input
                          type="text"
                          className="border-2 w-full rounded-lg p-2"
                          placeholder="First Name"
                          name="firstName"
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
                          onChange={onHandleChange}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label>Phone</label>
                      <div>
                        <input
                          type="text"
                          name="lastName"
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
                          className="border-2 w-full rounded-lg p-2"
                          placeholder="Job Title"
                          onChange={onHandleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 p-3 border-2 h-screen overflow-y-auto bg-gray-300">
          <div className="text-xl">Preview</div>

          <div className="bg-white rounded-lg p-8">
            <div className="text-center">
              <div className="text-5xl">
                {FormData.firstName} {FormData.lastName}
              </div>
              <div className="mt-2">{FormData.jobTitle}</div>
              <div>
                {FormData.email && FormData.email + " | "}
                {FormData.phone && FormData.phone + " | "}
                {FormData.address && FormData.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
