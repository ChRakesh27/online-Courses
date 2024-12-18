import React, { useState } from "react";
import ResumeForm from "./ResumeForm";
import SelectTemplate from "./SelectTemplate";
function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState(-1);
  const [formData, setFormData] = useState(null);
  return (
    <div>
      {selectedTemplate >= 0 ? (
        <ResumeForm
          selectedTemplate={selectedTemplate}
          prevFormData={formData}
          onSendFormData={(data) => {
            setSelectedTemplate(-1);
            setFormData(data);
          }}
        />
      ) : (
        <SelectTemplate
          setSelectedTemplate={(val) => setSelectedTemplate(val)}
        />
      )}
    </div>
  );
}

export default ResumeBuilder;
