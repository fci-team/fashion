import PhoneInput from 'react-phone-input-2';
// ** styles
import 'react-phone-input-2/lib/style.css';
import '../../style/regester.css'
const PhoneNumberInput = () => {
  return (
    <PhoneInput
      country={'eg'} // Set the default country
      enableSearch // Enable search functionality
      countryCodeEditable={false} // Disable editing of the country code
      inputClass="form-input" // Add custom CSS class to the input field
      // Other props to customize the flag appearance and behavior
    />
  );
};

export default PhoneNumberInput