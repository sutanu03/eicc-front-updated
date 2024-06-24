"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UserProvider from '../context/UserContext';

export default function RootLayout({ children }) {
    return (
        
            <html lang="en">
                <body>
                <UserProvider>
                    <ToastContainer />
                    {children}
                </UserProvider>
                </body>
            </html>
        
    );
}

