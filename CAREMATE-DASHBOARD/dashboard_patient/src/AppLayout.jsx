// src/AppLayout.jsx

import { lazy, Suspense, useRef, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Components
import ScrollProgress from '@ui/ScrollProgress';
import Panel from '@layout/Panel';
import Sidebar from '@layout/Sidebar';
import BottomMenu from '@layout/BottomMenu';
import WidgetsLoader from '@components/WidgetsLoader';

// Hooks
import useWindowSize from '@hooks/useWindowSize';
import usePageIsOverflow from '@hooks/usePageIsOverflow';

// Lazy-loaded pages
const DashboardB = lazy(() => import('@pages/DashboardB'));
const PatientAppointments = lazy(() => import('@pages/PatientAppointments'));
const Tests = lazy(() => import('@pages/Tests'));
const Doctors = lazy(() => import('@pages/Doctors'));
const PatientMessenger = lazy(() => import('@pages/PatientMessenger'));
const Settings = lazy(() => import('@pages/Settings'));
const FileUpload = lazy(() => import('@pages/FileUpload')); // Importing the new FileUpload page

const AppLayout = () => {
    const appRef = useRef(null);
    const isOverflow = usePageIsOverflow();
    const { width } = useWindowSize();
    const isMobile = width < 768;

    useEffect(() => {
        if (appRef.current) {
            appRef.current.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className="app" ref={appRef}>
            {isOverflow ? <ScrollProgress /> : null}
            <Sidebar />
            <div className="app_content">
                <Panel />
                <Suspense fallback={<WidgetsLoader />}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard_b" />} />
                        <Route path="/dashboard_b" element={<DashboardB />} />
                        <Route path="/patient_appointments" element={<PatientAppointments />} />
                        <Route path="/tests" element={<Tests />} />
                        <Route path="/doctors" element={<Doctors />} />
                        <Route path="/patient_messenger" element={<PatientMessenger />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/upload" element={<FileUpload />} /> {/* Add the route for the FileUpload page */}
                    </Routes>
                </Suspense>
            </div>
            {isMobile ? <BottomMenu /> : null}
        </div>
    );
};

export default AppLayout;