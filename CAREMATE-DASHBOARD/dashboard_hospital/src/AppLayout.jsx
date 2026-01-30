// utils
import { lazy, Suspense } from 'react';

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
import { useRef, useEffect } from 'react';

// pages
const DashboardI = lazy(() => import('@pages/DashboardI'));
const DoctorAppointments = lazy(() => import('@pages/DoctorAppointments'));
const PatientAppointments = lazy(() => import('@pages/PatientAppointments'));
const Patients = lazy(() => import('@pages/Patients'));
const Tests = lazy(() => import('@pages/Tests'));
const Doctors = lazy(() => import('@pages/Doctors'));
const StaffList = lazy(() => import('@pages/Staff'));
const DoctorMessenger = lazy(() => import('@pages/DoctorMessenger'));
const PatientMessenger = lazy(() => import('@pages/PatientMessenger'));
const DoctorsReviews = lazy(() => import('@pages/DoctorsReviews'));
const PatientReviews = lazy(() => import('@pages/PatientReviews'));
const Finances = lazy(() => import('@pages/Finances'));
const Settings = lazy(() => import('@pages/Settings'));
const PageNotFound = lazy(() => import('@pages/PageNotFound'));
const FileUpload = lazy(() => import('@pages/FileUpload'));

// Hospital pages
const ApproveBedsAndOPDsPage = lazy(() => import('@pages/ApproveBedsAndOPDsPage'));

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
                        <Route path="/" element={<Navigate to="/dashboard_i" />} />
                        <Route path="/dashboard_i" element={<DashboardI />} />
                        <Route path="/doctor_appointments" element={<DoctorAppointments />} />
                        <Route path="/patient_appointments" element={<PatientAppointments />} />
                        <Route path="/patients" element={<Patients />} />
                        <Route path="/tests" element={<Tests />} />
                        <Route path="/doctors" element={<Doctors />} />
                        <Route path="/staff" element={<StaffList />} />
                        <Route path="/doctor_messenger" element={<DoctorMessenger />} />
                        <Route path="/patient_messenger" element={<PatientMessenger />} />
                        <Route path="/doctor_reviews" element={<DoctorsReviews />} />
                        <Route path="/patient_reviews" element={<PatientReviews />} />
                        <Route path="/finances" element={<Finances />} />
                        <Route path="/settings" element={<Settings />} />

                        <Route path="/hospital/approve-beds-opds" element={<ApproveBedsAndOPDsPage />} />
                        <Route path="/404" element={<PageNotFound />} />
                        <Route path="*" element={<Navigate to="/404" replace />} />
                        <Route path="/upload" element={<FileUpload />} />
                    </Routes>
                </Suspense>
            </div>
            {isMobile ? <BottomMenu /> : null}
        </div>
    );
};

export default AppLayout;
