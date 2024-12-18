import React from "react";
import template1 from "../assets/templates/template1.png";
import template2 from "../assets/templates/template2.png";
function SelectTemplate({ setSelectedTemplate }) {
  const templates = [template1, template2];
  return (
    <div className="p-6 bg-gray-50 h-screen space-y-3">
      <div className="text-5xl font-bold">Choose Your Own Templates</div>
      <div className="flex space-x-3 p-3">
        {templates.map((template, index) => (
          <div
            key={index}
            className="border-2 shadow-lg cursor-pointer"
            onClick={() => setSelectedTemplate(index)}
          >
            <img src={template} alt="" width={250} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectTemplate;
