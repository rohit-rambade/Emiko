import { useState } from "react";

// Custom hook for form submission
const useFormSubmission = () => {
  // State to manage the visibility of the success modal
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Function to submit form data
  const submitForm = async (
    formData, // Form data to be submitted
    googleFormUrl, // URL of the Google Form endpoint
    googleFormFields, // Mapping of form fields to Google Form keys
    setFormData, // Function to clear form data after submission
    initialState // Initial state of the form data
  ) => {
    try {
      // Clear form data after submission
      setFormData(initialState);

      // Send form data to Google Form endpoint
      const response = await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(googleFormFields).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // Show success modal upon successful form submission
      setShowSuccessModal(true);
    } catch (error) {
      // Handle error if form submission fails
      console.error("Error submitting form:", error);
    }
  };

  // Return submitForm function and showSuccessModal state
  return { submitForm, showSuccessModal, setShowSuccessModal };
};

export default useFormSubmission;
