import React from 'react';
import { MominAILogo } from './icons.tsx';

const ThankYouPage = () => {
    return (
        <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <MominAILogo />
                </div>

                <div className="bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-transparent backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                    <div className="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-4">
                        Welcome to MominAI!
                    </h1>

                    <p className="text-[var(--gray)] text-lg mb-6">
                        Thank you for signing up. We're excited to have you join our community of developers.
                    </p>

                    <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-xl mb-6">
                        <h2 className="text-xl font-semibold text-white mb-2">
                            🚀 We're Launching Soon!
                        </h2>
                        <p className="text-[var(--gray)]">
                            Our platform is currently in development. We'll notify you as soon as we launch and you can start building amazing applications with MominAI.
                        </p>
                    </div>

                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all transform hover:scale-105 shadow-lg shadow-[var(--accent-glow)] border-none"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;