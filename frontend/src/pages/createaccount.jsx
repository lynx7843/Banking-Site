import React, { useState } from 'react';
import axios from 'axios';
import { User, Lock, CheckCircle, ChevronLeft, ChevronRight, MessageSquare, Briefcase, CreditCard, Target, Aperture, Upload, Sliders } from 'lucide-react';

// The base URL for the Spring Boot API
const BASE_URL = 'http://localhost:8080/api/accounts/apply';
const steps = [
    { id: 1, name: 'Personal & Account', icon: User },
    { id: 2, name: 'Security & Verification', icon: Lock },
    { id: 3, name: 'Review & Submit', icon: CheckCircle },
];

const PAGES = {
    HOME: 'home',
    CREATE_ACCOUNT: 'createAccount',
};


const GenZCreateAccountPage = ({ onNavigate }) => {
    // Initial State Definition - Matches Spring Boot Entity fields
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Personal Details
        fullName: '', dob: '', gender: 'Prefer not to say', nationality: 'Sri Lankan', nicPassport: '',
        permanentAddress: '', currentAddress: '', district: '', province: '', email: '', mobile: '',
        occupation: '', employerName: '',
        // Account Details (Rendered in Step 1/Review)
        accountType: 'GenZ Digital Savings', preferredBranch: 'Online (Digital Only)', initialDeposit: 500,
        savingsGoal: 'Emergency Fund', targetAmount: 100000, targetDate: '', accountNickname: 'My First Savings',
        // File fields (These are NOT sent to the backend)
        nicFront: null, nicBack: null, passport: null, selfie: null, addressProof: null,
        // Step 2: Security Setup
        username: '', password: '', confirmPassword: '', pin: '', biometric: false, securityQuestion1: '', securityAnswer1: '',
        // Compliance & Features (Used in Review)
        sourceOfFunds: 'Salary', monthlyExpectedTransactions: 50000, fatca: false, pep: false, taxResidency: 'Sri Lanka',
        aiBudget: true, autoSavings: true, contributionPlan: 'Monthly', themeColor: '#007bff', profileAvatar: '🤓',
        savingsStreak: true, rewardPoints: true, cashbackNotifs: true,
        // Step 3: Declarations
        agreePolicies: false, consentDigital: false, kycComplete: false, eSignature: '',
    });


    // 🛑 The Submission Function (Data Insertion)
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Client-Side Validation
        if (formData.password !== formData.confirmPassword) {
            alert('Password and Confirm Password do not match!');
            return;
        }
        if (!formData.agreePolicies || !formData.kycComplete || !formData.eSignature) {
            alert('Please agree to all mandatory declarations and provide your E-Signature.');
            return;
        }

        // 2. Data Preparation: Filter out files and confirmPassword
        const {
            nicFront, nicBack, passport, selfie, addressProof,
            confirmPassword,
            ...dataToSend
        } = formData;

        // 3. Convert relevant strings to Numbers
        const applicationData = {
            ...dataToSend,
            initialDeposit: Number(dataToSend.initialDeposit),
            targetAmount: Number(dataToSend.targetAmount),
            monthlyExpectedTransactions: Number(dataToSend.monthlyExpectedTransactions),
            // dob and targetDate are sent as 'YYYY-MM-DD' strings, which Spring Boot converts to LocalDate
        };

        // 4. API Call for Data Insertion
        try {
            const response = await axios.post(BASE_URL, applicationData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Application Submitted Successfully!', response.data);
            alert(`Application Submitted Successfully! Account ID: ${response.data.id}. Welcome to GenZBank.`);

            onNavigate(PAGES.HOME);

        } catch (error) {
            console.error('Submission Failed:', error.response?.data || error.message);

            let errorMessage = 'An unexpected error occurred during submission.';
            if (error.message.includes('Network Error')) {
                errorMessage = 'Cannot connect to the backend server (Is Spring Boot running on port 8080?).';
            } else if (error.response && error.response.status === 500) {
                errorMessage = 'Submission failed. Check if Email, NIC, or Username is already registered (Unique Constraint Violation).';
            } else if (error.response) {
                errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
            }

            alert(`Application Submission Failed! ${errorMessage}`);
        }
    };

    // Generic handler for all input types
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === 'checkbox') {
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else if (type === 'file') {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleNext = () => {
        // Basic Step 1 Validation
        if (currentStep === 1 && (!formData.fullName || !formData.email || !formData.nicPassport)) {
            alert('Please complete all required fields in Step 1.');
            return;
        }
        // Basic Step 2 Validation
        if (currentStep === 2 && (formData.password !== formData.confirmPassword || !formData.password || !formData.username)) {
            alert('Please ensure you have created a valid username and matching passwords.');
            return;
        }

        if (currentStep < steps.length) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const StepIndicator = ({ step }) => {
        const Icon = step.icon;
        const isActive = currentStep === step.id;
        const isComplete = currentStep > step.id;

        return (
            <div className={`step-indicator ${isActive ? 'active' : ''} ${isComplete ? 'complete' : ''}`}>
                <div className="step-icon-wrapper">
                    <Icon size={18} />
                </div>
                <span className="step-name">{step.name}</span>
            </div>
        );
    };

    // --- Form Rendering Functions ---

    const renderStep1 = () => (
        <>
            <h4 className="form-sub-heading">Personal Details</h4>
            <div className="form-grid-2">
                <input type="text" name="fullName" placeholder="Full Name (First, Middle, Last)" className="form-input" value={formData.fullName} onChange={handleChange} required />
                <input type="date" name="dob" placeholder="Date of Birth" className="form-input" value={formData.dob} onChange={handleChange} required />

                <select name="gender" className="form-input" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                </select>

                <input type="text" name="nationality" placeholder="Nationality" className="form-input" value={formData.nationality} onChange={handleChange} required />
            </div>
            <input type="text" name="nicPassport" placeholder="NIC / Passport Number" className="form-input" value={formData.nicPassport} onChange={handleChange} required />

            <h4 className="form-sub-heading">Contact & Address</h4>
            <div className="form-grid-2">
                <input type="text" name="permanentAddress" placeholder="Permanent Address" className="form-input" value={formData.permanentAddress} onChange={handleChange} required />
                <input type="text" name="currentAddress" placeholder="Current Address (if different)" className="form-input" value={formData.currentAddress} onChange={handleChange} />
                <input type="text" name="district" placeholder="District" className="form-input" value={formData.district} onChange={handleChange} required />
                <input type="text" name="province" placeholder="Province" className="form-input" value={formData.province} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email Address" className="form-input" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="mobile" placeholder="Mobile Number" className="form-input" value={formData.mobile} onChange={handleChange} required />
            </div>

            <h4 className="form-sub-heading">Employment & Account Goal</h4>
            <div className="form-grid-2">
                <select name="occupation" className="form-input" value={formData.occupation} onChange={handleChange} required>
                    <option value="">Select Occupation</option>
                    <option value="Employed">Employed</option>
                    <option value="Self-Employed">Self-Employed</option>
                    <option value="Student">Student</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Other">Other</option>
                </select>
                <input type="text" name="employerName" placeholder="Employer/Institution Name" className="form-input" value={formData.employerName} onChange={handleChange} disabled={formData.occupation !== 'Employed' && formData.occupation !== 'Self-Employed'} />
                <select name="savingsGoal" className="form-input" value={formData.savingsGoal} onChange={handleChange} required>
                    <option value="">Select Savings Goal</option>
                    <option value="Emergency Fund">Emergency Fund</option>
                    <option value="New Gadget">New Gadget</option>
                    <option value="Travel">Travel</option>
                    <option value="Education">Education</option>
                    <option value="Investment">Investment</option>
                </select>
                <input type="number" name="targetAmount" placeholder="Target Amount (LKR)" className="form-input" value={formData.targetAmount} onChange={handleChange} min="1000" required />
            </div>
            <input type="number" name="initialDeposit" placeholder="Initial Deposit (LKR)" className="form-input" value={formData.initialDeposit} onChange={handleChange} min="500" required />
        </>
    );

    const renderStep4 = () => (
        <>
            <h4 className="form-sub-heading">Online Banking Credentials</h4>
            <input type="text" name="username" placeholder="Create Username (e.g., GenZUser123)" className="form-input" value={formData.username} onChange={handleChange} required />
            <div className="form-grid-2">
                <input type="password" name="password" placeholder="Create Password (Min 8 characters)" className="form-input" value={formData.password} onChange={handleChange} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-input" value={formData.confirmPassword} onChange={handleChange} required />
            </div>

            <h4 className="form-sub-heading">Quick Access & Biometrics</h4>
            <div className="form-grid-2">
                <input type="number" name="pin" placeholder="Create 4-Digit Quick PIN" min="1000" max="9999" className="form-input" value={formData.pin} onChange={handleChange} required />
                <div className="checkbox-group">
                    <input type="checkbox" id="biometric" name="biometric" checked={formData.biometric} onChange={handleChange} />
                    <label htmlFor="biometric">Enable Biometric Login (Face ID / Fingerprint)</label>
                </div>
            </div>

            <h4 className="form-sub-heading">Security Questions (for recovery)</h4>
            <div className="form-grid-2">
                <input type="text" name="securityQuestion1" placeholder="Security Question 1 (e.g., Mother's Maiden Name)" className="form-input" value={formData.securityQuestion1} onChange={handleChange} />
                <input type="text" name="securityAnswer1" placeholder="Answer 1" className="form-input" value={formData.securityAnswer1} onChange={handleChange} />
            </div>
        </>
    );

    const renderStep7 = () => (
        <div className="review-step">
            <h4 className="form-sub-heading">Summary Review</h4>
            <div className="review-summary-box">
                <p><strong>Account:</strong> {formData.accountType} ({formData.accountNickname})</p>
                <p><strong>Goal:</strong> {formData.savingsGoal} (Target LKR {formData.targetAmount.toLocaleString()})</p>
                <p><strong>User:</strong> {formData.fullName}, {formData.email}</p>
                <p><strong>Authentication:</strong> Username: {formData.username}, Biometric: {formData.biometric ? 'Enabled' : 'Disabled'}</p>
                <p><strong>Initial Deposit:</strong> LKR {formData.initialDeposit.toLocaleString()}</p>
            </div>

            <h4 className="form-sub-heading">Terms & Declarations</h4>
            <div className="declaration-section">
                <div className="checkbox-group">
                    <input type="checkbox" id="agreePolicies" name="agreePolicies" checked={formData.agreePolicies} onChange={handleChange} required />
                    <label htmlFor="agreePolicies">I agree to the Bank Policies and General Terms and Conditions. *</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="consentDigital" name="consentDigital" checked={formData.consentDigital} onChange={handleChange} required />
                    <label htmlFor="consentDigital">I consent to digital communication via Email, SMS, and WhatsApp.</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="kycComplete" name="kycComplete" checked={formData.kycComplete} onChange={handleChange} required />
                    <label htmlFor="kycComplete">I declare that all KYC details provided are complete and accurate. *</label>
                </div>
            </div>

            <h4 className="form-sub-heading">E-Signature</h4>
            <input type="text" name="eSignature" placeholder="Type your Full Name as E-signature" className="form-input" value={formData.eSignature} onChange={handleChange} required />
        </div>
    );


    return (
        <div className="create-account-page middle-content-main">
            <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
                <h1 className="page-title">🚀 Open Your GenZ Digital Savings Account</h1>
                <p className="page-subtitle">Welcome to the future of digital banking. Complete the quick steps below!</p>
            </div>

            <div className="steps-container">
                {steps.map((step) => <StepIndicator key={step.id} step={step} />)}
                <div className="progress-bar" style={{ width: `${(currentStep / steps.length) * 100}%` }}></div>
            </div>

            <form onSubmit={handleSubmit} className="application-form-placeholder multi-step-form">
                <div className="form-body">
                    <h3 className="form-title">Step {currentStep}: {steps[currentStep - 1].name}</h3>
                    <p className="form-subtitle">({currentStep} of {steps.length})</p>

                    {currentStep === 1 && renderStep1()}
                    {currentStep === 2 && renderStep4()} 
                    {currentStep === 3 && renderStep7()} 
                </div>

                <div className="form-navigation">
                    <button
                        type="button"
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className="btn btn-secondary nav-btn back-btn"
                    >
                        <ChevronLeft size={20} /> Back
                    </button>

                    {currentStep < steps.length ? (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="btn btn-primary nav-btn next-btn"
                        >
                            Next <ChevronRight size={20} />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={!formData.agreePolicies || !formData.eSignature}
                            className="btn btn-primary nav-btn submit-btn"
                        >
                            <CheckCircle size={20} className="mr-1" /> Submit Application
                        </button>
                    )}
                </div>

                <button
                    onClick={() => onNavigate(PAGES.HOME)}
                    className="btn btn-tertiary back-to-home-btn"
                >
                    Return to Home
                </button>
            </form>
        </div>
    );
};

export default GenZCreateAccountPage;