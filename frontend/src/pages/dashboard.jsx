import React from 'react';
import { ArrowRight, Bell, CreditCard, DollarSign, LogOut, Repeat, Send, Settings, Shield, Smartphone, MessageSquare, BarChart2, Zap, FilePlus, QrCode, UserCheck } from 'lucide-react';

// --- Mock Data ---
const user = {
    name: 'Alex Morgan',
    avatar: '🤓',
};

const account = {
    balance: '1,250,450.75',
    currency: 'LKR',
    accountNumber: '**** **** **** 8842',
};

const transactions = [
    { id: 1, type: 'debit', description: 'Keels Supermarket', amount: '-5,430.00', date: 'Today, 04:30 PM' },
    { id: 2, type: 'credit', description: 'Freelance Project Payment', amount: '+150,000.00', date: 'Today, 09:15 AM' },
    { id: 3, type: 'debit', description: 'Uber Ride', amount: '-850.50', date: 'Yesterday, 08:00 PM' },
    { id: 4, type: 'debit', description: 'Dialog Bill Payment', amount: '-3,200.00', date: '2 days ago' },
];

const quickActions = [
    { name: 'Transfer', icon: Send },
    { name: 'Pay Bills', icon: CreditCard },
    { name: 'Top-up', icon: Repeat },
];

const serviceMenu = [
    { name: 'Fund Transfers', icon: Send, description: 'Move money between accounts.' },
    { name: 'Bill Payments', icon: FilePlus, description: 'Pay electricity, water, etc.' },
    { name: 'Mobile Recharge', icon: Smartphone, description: 'Top-up your mobile balance.' },
    { name: 'Card Services', icon: CreditCard, description: 'Manage your debit/credit cards.' },
    { name: 'QR Payments', icon: QrCode, description: 'Pay merchants by scanning a code.' },
    { name: 'Customer Support', icon: MessageSquare, description: 'Chat with us or file a complaint.' },
];

const advancedFeatures = [
    { name: 'AI Financial Assistant', icon: BarChart2, description: 'Get insights on your spending.' },
    { name: 'Cardless Withdrawal', icon: Zap, description: 'Withdraw cash using a QR code.' },
    { name: 'Biometric Security', icon: UserCheck, description: 'Manage Face ID/Fingerprint.' },
];

// --- Dashboard Component ---
const Dashboard = ({ onNavigate, PAGES }) => {

    const handleLogout = () => {
        // In a real app, you'd clear tokens/session here
        console.log('User logged out.');
        onNavigate(PAGES.HOME);
    };

    return (
        <main className="middle-content-main bg-slate-50">
            <div className="navbar-content-wrapper content-wrapper py-8">

                {/* --- Dashboard Header --- */}
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Welcome back, {user.name.split(' ')[0]}!</h1>
                        <p className="text-gray-500">Here's your financial overview for today.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <Bell size={22} className="text-gray-600" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <Settings size={22} className="text-gray-600" />
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
                                {user.avatar}
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">{user.name}</p>
                                <button onClick={handleLogout} className="text-sm text-red-500 hover:underline flex items-center gap-1">
                                    <LogOut size={14} /> Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* --- Main Content Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* --- Left Column (Balance & Actions) --- */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Balance Card */}
                        <div className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white p-6 rounded-2xl shadow-lg">
                            <p className="text-indigo-200">Total Balance</p>
                            <p className="text-4xl font-bold my-2">{account.currency} {account.balance}</p>
                            <div className="flex items-center justify-between mt-4">
                                <p className="font-mono text-indigo-200">{account.accountNumber}</p>
                                <CreditCard size={24} />
                            </div>
                        </div>

                        {/* Quick Actions Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="font-bold text-lg text-gray-800 mb-4">Quick Actions</h3>
                            <div className="flex justify-around">
                                {quickActions.map(action => (
                                    <button key={action.name} className="flex flex-col items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                                        <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                                            <action.icon size={24} />
                                        </div>
                                        <span className="text-sm font-medium">{action.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column (Transactions) --- */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-lg text-gray-800">Recent Transactions</h3>
                            <button className="text-sm text-indigo-600 font-semibold flex items-center gap-1">
                                View All <ArrowRight size={16} />
                            </button>
                        </div>
                        <ul className="space-y-3">
                            {transactions.map(tx => (
                                <li key={tx.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                            <DollarSign size={20} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{tx.description}</p>
                                            <p className="text-sm text-gray-500">{tx.date}</p>
                                        </div>
                                    </div>
                                    <p className={`font-bold ${tx.type === 'credit' ? 'text-green-600' : 'text-gray-800'}`}>
                                        {tx.amount}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* --- Services Menu --- */}
                <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="font-bold text-lg text-gray-800 mb-4">All Services</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                        {serviceMenu.map(item => (
                            <button key={item.name} className="flex flex-col items-center p-3 gap-2 text-gray-600 hover:bg-indigo-50 rounded-lg transition-colors">
                                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-indigo-600">
                                    <item.icon size={24} />
                                </div>
                                <span className="text-sm font-medium">{item.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Advanced & Unique Features --- */}
                <div className="mt-8">
                    <h3 className="font-bold text-lg text-gray-800 mb-4">🌟 GenZ Exclusive Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {advancedFeatures.map(feature => (
                            <div key={feature.name} className="bg-white p-5 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <feature.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">{feature.name}</h4>
                                    <p className="text-sm text-gray-500">{feature.description}</p>
                                    <button className="text-sm text-indigo-600 font-semibold mt-2">
                                        Explore &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Dashboard;