// utils
import { lazy, Suspense, useRef, useEffect } from 'react';

// components
import ScrollProgress from '@ui/ScrollProgress';
import Panel from '@layout/Panel';
import Sidebar from '@layout/Sidebar';
import { Navigate, Route, Routes } from 'react-router-dom';
import BottomMenu from '@layout/BottomMenu';
import WidgetsLoader from '@components/WidgetsLoader';

// hooks
import useWindowSize from '@hooks/useWindowSize';
import usePageIsOverflow from '@hooks/usePageIsOverflow';

// pages
const DashboardA = lazy(() => import('@pages/DashboardA'));
const DoctorAppointments = lazy(() => import('@pages/DoctorAppointments'));
const PatientAppointments = lazy(() => import('@pages/PatientAppointments'));
const Patients = lazy(() => import('@pages/Patients'));
const Tests = lazy(() => import('@pages/Tests'));
const Doctors = lazy(() => import('@pages/Doctors'));
const DoctorMessenger = lazy(() => import('@pages/DoctorMessenger'));
const Settings = lazy(() => import('@pages/Settings'));
const PatientApprovalInterface = lazy(() => import('@pages/PatientApprovalInterface')); // New page added
const FileUpload = lazy(() => import('@pages/FileUpload'));

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
                        <Route path="/" element={<Navigate to="/dashboard_a" />} />
                        <Route path="/dashboard_a" element={<DashboardA />} />
                        <Route path="/doctor_appointments" element={<DoctorAppointments />} />
                        <Route path="/patient_appointments" element={<PatientAppointments />} />
                        <Route path="/patients" element={<Patients />} />
                        <Route path="/tests" element={<Tests />} />
                        <Route path="/doctors" element={<Doctors />} />
                        <Route path="/doctor_messenger" element={<DoctorMessenger />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/patient_approval" element={<PatientApprovalInterface />} /> {/* New route */}
                        <Route path="*" element={<Navigate to="/dashboard_a" replace />} />
                        <Route path="/upload" element={<FileUpload />} />
                    </Routes>
                </Suspense>
            </div>
            {isMobile ? <BottomMenu /> : null}
        </div>
    );
};

export default AppLayout;