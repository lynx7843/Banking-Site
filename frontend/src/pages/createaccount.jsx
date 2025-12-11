import React, { useState } from 'react';
import { User, MessageSquare, Briefcase, CreditCard, Lock, CheckCircle, Target, Aperture, ChevronLeft, ChevronRight, Upload, Sliders } from 'lucide-react';

const BASE_URL = 'http://localhost:8080/api/accounts/apply';
// Define the steps for the multi-step form
const steps = [
    { id: 1, name: 'Personal Details', icon: User },
    { id: 2, name: 'Account Details', icon: CreditCard },
    { id: 3, name: 'Verification & KYC', icon: Upload },
    { id: 4, name: 'Security Setup', icon: Lock },
    { id: 5, name: 'Compliance & Legal', icon: Briefcase },
    { id: 6, name: 'GenZ Features', icon: Sliders },
    { id: 7, name: 'Review & Submit', icon: CheckCircle },
];

// Re-export PAGE constants from the main file for consistency
const PAGES = {
    HOME: 'home',
    CREATE_ACCOUNT: 'createAccount',
};


const GenZCreateAccountPage = ({ onNavigate }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Personal Details
        fullName: '', dob: '', gender: 'Prefer not to say', nationality: 'Sri Lankan', nicPassport: '',
        permanentAddress: '', currentAddress: '', district: '', province: '', email: '', mobile: '',
        occupation: '', employerName: '',
        // Step 2: Account Details
        accountType: 'GenZ Digital Savings', preferredBranch: 'Online (Digital Only)', initialDeposit: 500,
        savingsGoal: 'Emergency Fund', targetAmount: 100000, targetDate: '', accountNickname: '',
        // Step 3: Verification (Placeholder for files)
        nicFront: null, nicBack: null, passport: null, selfie: null, addressProof: null,
        // Step 4: Security Setup
        username: '', password: '', confirmPassword: '', pin: '', biometric: false, securityQuestion1: '', securityAnswer1: '',
        // Step 5: Compliance
        sourceOfFunds: 'Salary', monthlyExpectedTransactions: 50000, fatca: false, pep: false, taxResidency: 'Sri Lanka',
        // Step 6: GenZ Features
        aiBudget: true, autoSavings: true, contributionPlan: 'Monthly', themeColor: '#007bff', profileAvatar: '🤓',
        savingsStreak: true, rewardPoints: true, cashbackNotifs: true,
        // Step 7: Declarations
        agreePolicies: false, consentDigital: false, kycComplete: false, eSignature: '',
    });
    
    // Simulate form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send formData to a backend API here
        console.log('Form Submitted!', formData);
        alert('Application Submitted Successfully! Welcome to GenZBank.');
        onNavigate(PAGES.HOME);
    };

    // Generic handler for all input types
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        
        if (type === 'checkbox') {
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else if (type === 'file') {
            // For file uploads, store the File object (or a preview URL in a real app)
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleNext = () => {
        if (currentStep < steps.length) {
            // Basic validation check before moving to the next step (can be expanded)
            if (currentStep === 1 && !formData.fullName) {
                alert('Please enter your Full Name.');
                return;
            }
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
            
            <h4 className="form-sub-heading">Employment</h4>
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
            </div>
        </>
    );

    const renderStep2 = () => (
        <>
            <h4 className="form-sub-heading">Choose Your Account</h4>
            <select name="accountType" className="form-input" value={formData.accountType} onChange={handleChange} required>
                <option value="GenZ Digital Savings">GenZ Digital Savings (Recommended)</option>
                <option value="Savings Account">Standard Savings Account</option>
                <option value="Teen Savings">Teen Savings (under 18)</option>
                <option value="Youth Savings">Youth Savings (18-25)</option>
                <option value="Senior Savings">Senior Savings (60+)</option>
            </select>

            <div className="form-grid-2">
                <select name="preferredBranch" className="form-input" value={formData.preferredBranch} onChange={handleChange} required>
                    <option value="Online (Digital Only)">Online (Digital Only) - Recommended</option>
                    <option value="HQ - Colombo 03">HQ - Colombo 03</option>
                    <option value="Branch - Kandy">Branch - Kandy</option>
                    <option value="Branch - Galle">Branch - Galle</option>
                </select>
                <div className="input-with-label">
                    <label>Initial Deposit (LKR)</label>
                    <input type="number" name="initialDeposit" min="500" placeholder="Initial Deposit Amount (Min 500)" className="form-input" value={formData.initialDeposit} onChange={handleChange} required />
                </div>
            </div>

            <h4 className="form-sub-heading"><Target size={18} className="mr-1" /> Savings Goal Setup</h4>
            <div className="form-grid-2">
                <select name="savingsGoal" className="form-input" value={formData.savingsGoal} onChange={handleChange}>
                    <option value="Emergency Fund">Emergency Fund</option>
                    <option value="Travel">Travel</option>
                    <option value="Education">Education</option>
                    <option value="New Gadget">New Gadget</option>
                    <option value="Other">Other</option>
                </select>
                <div className="input-with-label">
                    <label>Target Amount (LKR)</label>
                    <input type="number" name="targetAmount" placeholder="Target Amount" className="form-input" value={formData.targetAmount} onChange={handleChange} />
                </div>
                <div className="input-with-label">
                    <label>Target Date</label>
                    <input type="date" name="targetDate" className="form-input" value={formData.targetDate} onChange={handleChange} />
                </div>
                <input type="text" name="accountNickname" placeholder="Account Nickname (e.g., 'My Travel Fund')" className="form-input" value={formData.accountNickname} onChange={handleChange} />
            </div>
        </>
    );

    const renderStep3 = () => (
        <>
            <p className="form-subtitle">Please upload clear images of your identity and address proof. (Max 2MB per file)</p>
            
            <div className="form-grid-2 upload-grid">
                {[
                    { name: 'nicFront', label: 'NIC Front', required: true },
                    { name: 'nicBack', label: 'NIC Back', required: true },
                    { name: 'selfie', label: 'Upload Selfie (Face Verification)', required: true },
                    { name: 'addressProof', label: 'Proof of Address (Utility Bill/Bank Statement)', required: true },
                    { name: 'passport', label: 'Passport (Optional)', required: false },
                ].map((item) => (
                    <div key={item.name} className="upload-container">
                        <label htmlFor={item.name} className="upload-label">
                            <Upload size={18} className="mr-1" /> {item.label} {item.required && <span className="required-star">*</span>}
                        </label>
                        <input type="file" id={item.name} name={item.name} className="file-input" onChange={handleChange} required={item.required} />
                        {formData[item.name] && <span className="file-status">✅ {formData[item.name].name}</span>}
                    </div>
                ))}
            </div>
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
            
            <h4 className="form-sub-heading">Quick Access</h4>
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
            {/* Add two more questions/answers in a real app */}
        </>
    );

    const renderStep5 = () => (
        <>
            <h4 className="form-sub-heading">Financial & Tax Compliance</h4>
            <div className="form-grid-2">
                <select name="sourceOfFunds" className="form-input" value={formData.sourceOfFunds} onChange={handleChange} required>
                    <option value="Salary">Salary</option>
                    <option value="Business">Business</option>
                    <option value="Freelance">Freelance / Gig Work</option>
                    <option value="Foreign Remittance">Foreign Remittance</option>
                    <option value="Other">Other</option>
                </select>
                <div className="input-with-label">
                    <label>Monthly Expected Transactions (LKR)</label>
                    <input type="number" name="monthlyExpectedTransactions" placeholder="Expected Monthly Transactions" className="form-input" value={formData.monthlyExpectedTransactions} onChange={handleChange} />
                </div>
                <input type="text" name="taxResidency" placeholder="Primary Tax Residency" className="form-input" value={formData.taxResidency} onChange={handleChange} required />
            </div>
            
            <h4 className="form-sub-heading">Declarations</h4>
            <div className="declaration-section">
                <div className="checkbox-group">
                    <input type="checkbox" id="fatca" name="fatca" checked={formData.fatca} onChange={handleChange} />
                    <label htmlFor="fatca">I am NOT a US Person (FATCA Declaration) *</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="pep" name="pep" checked={formData.pep} onChange={handleChange} />
                    <label htmlFor="pep">I am NOT a Politically Exposed Person (PEP) *</label>
                </div>
            </div>
        </>
    );

    const renderStep6 = () => (
        <>
            <h4 className="form-sub-heading">🌟 Smart Financial Goals</h4>
            <p className="form-subtitle">Leverage our AI features to save smarter!</p>
            <div className="form-grid-2 feature-toggle-grid">
                <div className="checkbox-group toggle-feature">
                    <input type="checkbox" id="aiBudget" name="aiBudget" checked={formData.aiBudget} onChange={handleChange} />
                    <label htmlFor="aiBudget">AI Budget Suggestions</label>
                </div>
                <div className="checkbox-group toggle-feature">
                    <input type="checkbox" id="autoSavings" name="autoSavings" checked={formData.autoSavings} onChange={handleChange} />
                    <label htmlFor="autoSavings">Auto-Savings Toggle (Round-Ups)</label>
                </div>
                <div className="input-with-label">
                    <label>Contribution Plan</label>
                    <select name="contributionPlan" className="form-input" value={formData.contributionPlan} onChange={handleChange}>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Bi-Weekly">Bi-Weekly</option>
                    </select>
                </div>
            </div>
            
            <h4 className="form-sub-heading">🎨 Personalization</h4>
            <div className="form-grid-2">
                <div className="input-with-label">
                    <label>Account Theme Color</label>
                    <input type="color" name="themeColor" className="form-input color-picker" value={formData.themeColor} onChange={handleChange} />
                </div>
                <div className="input-with-label">
                    <label>Profile Emoji / Avatar (Current: {formData.profileAvatar})</label>
                    <input type="text" name="profileAvatar" placeholder="Type an Emoji (e.g., 🚀)" className="form-input" value={formData.profileAvatar} onChange={handleChange} />
                </div>
            </div>

            <h4 className="form-sub-heading">🎮 Gamification & Rewards</h4>
            <div className="form-grid-3 feature-toggle-grid">
                <div className="checkbox-group toggle-feature">
                    <input type="checkbox" id="savingsStreak" name="savingsStreak" checked={formData.savingsStreak} onChange={handleChange} />
                    <label htmlFor="savingsStreak">Enable Savings Streak</label>
                </div>
                <div className="checkbox-group toggle-feature">
                    <input type="checkbox" id="rewardPoints" name="rewardPoints" checked={formData.rewardPoints} onChange={handleChange} />
                    <label htmlFor="rewardPoints">Enable Reward Points</label>
                </div>
                <div className="checkbox-group toggle-feature">
                    <input type="checkbox" id="cashbackNotifs" name="cashbackNotifs" checked={formData.cashbackNotifs} onChange={handleChange} />
                    <label htmlFor="cashbackNotifs">Enable Cashback Notifications</label>
                </div>
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
                <p><strong>Verification:</strong> NIC/Passport, Selfie & Address Proof {formData.nicFront ? 'Uploaded' : 'Pending'}</p>
                <p><strong>Features:</strong> AI Budget: {formData.aiBudget ? 'On' : 'Off'}, Theme: {formData.themeColor}</p>
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
                    {currentStep === 2 && renderStep2()}
                    {currentStep === 3 && renderStep3()}
                    {currentStep === 4 && renderStep4()}
                    {currentStep === 5 && renderStep5()}
                    {currentStep === 6 && renderStep6()}
                    {currentStep === 7 && renderStep7()}

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

                {/* Optional: Back to Home link */}
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

// FIX: Ensure the component name matches the export name.
export default GenZCreateAccountPage;