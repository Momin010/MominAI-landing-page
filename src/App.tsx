

import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor.tsx';
import LandingPage from './components/LandingPage.tsx';
import Loader from './components/Loader.tsx';
import ThankYouPage from './components/ThankYouPage.tsx';
import CheckoutPage from './components/CheckoutPage.tsx';

const App = () => {
    // A single state to manage which view is active.
    const [view, setView] = useState<'landing' | 'thankyou' | 'loading' | 'checkout'>('landing');
    // State to hold the plan selected for checkout.
    const [checkoutPlan, setCheckoutPlan] = useState<string | null>(null);

    useEffect(() => {
        // This effect runs once on initial load to determine the correct view from the URL.
        const params = new URLSearchParams(window.location.search);
        const plan = params.get('checkout');

        if (params.get('thankyou') === 'true') {
            // If '?thankyou=true' is in the URL, show the thank you page.
            setView('thankyou');
        } else if (plan) {
            // If '?checkout=[plan]' is in the URL, show the checkout page.
            setCheckoutPlan(plan);
            setView('checkout');
        }
        else {
            // If the URL doesn't specify a view, show the landing page.
            setView('landing');
        }
    }, []);

    // This effect manages the styles of the root HTML element based on the current view.
    useEffect(() => {
        const rootEl = document.getElementById('root');
        if (!rootEl) return;

        if (view === 'loading' || view === 'thankyou' || view === 'checkout') {
            // For constrained views, lock the root to the viewport height.
            rootEl.style.height = '100vh';
            rootEl.style.overflow = 'hidden';
        } else {
            // For the landing page, allow the root to grow with its content and scroll.
            rootEl.style.height = 'auto';
            rootEl.style.overflow = 'visible';
        }

        // Cleanup function to reset styles when the component unmounts.
        return () => {
            if (rootEl) {
                rootEl.style.height = 'auto';
                rootEl.style.overflow = 'visible';
            }
        };
    }, [view]);

    // Navigate to the thank you page on successful signup. This causes a full page reload.
    const handleLoginSuccess = () => {
        window.location.href = '/?thankyou=true';
    };

    // Navigate back to the landing page on logout. This also reloads the page.
    const handleLogout = () => {
        window.location.href = '/';
    };

    // A helper function to render the correct component based on the current view state.
    const renderContent = () => {
        switch (view) {
            case 'loading':
                return <Loader />;
            case 'thankyou':
                return <ThankYouPage />;
            case 'checkout':
                return <CheckoutPage plan={checkoutPlan} />;
            case 'landing':
            default:
                return <LandingPage onLoginSuccess={handleLoginSuccess} />;
        }
    };

    return (
        <>
            <CustomCursor />
            {renderContent()}
        </>
    );
};

export default App;