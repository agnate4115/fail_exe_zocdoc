import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Page from '@layout/Page';

// Styled components
const Content = styled.div`
    padding: 20px;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 100%;
`;

const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    background: ${({ status }) =>
            status === 'approved' ? '#e6fffa' :
                    status === 'rejected' ? '#ffe2e2' : '#fff'};
`;

const PatientInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    
`;

const UrgencyBadge = styled.span`
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
    color: ${({ urgency }) =>
            urgency === 'high' ? '#c53030' :
                    urgency === 'medium' ? '#d69e2e' : '#2f855a'};
    background: ${({ urgency }) =>
            urgency === 'high' ? '#fee2e2' :
                    urgency === 'medium' ? '#fefcbf' : '#c6f6d5'};
    font-size: 0.875rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 8px;
`;

const Button = styled.button`
    padding: 5px 10px;
    font-size: 0.875rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: ${({ reject }) => (reject ? '#e53e3e' : '#38a169')};
    color: white;

    &:hover {
        background: ${({ reject }) => (reject ? '#c53030' : '#2f855a')};
    }
`;

const StatusBadge = styled.span`
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.875rem;
    color: white;
    background: ${({ status }) => (status === 'approved' ? '#48bb78' : '#f56565')};
`;

const PatientApprovalInterface = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      age: 45,
      gender: "Female",
      condition: "Hypertension",
      status: "pending",
      requestDate: "2024-11-01",
      urgency: "medium"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 32,
      gender: "Male",
      condition: "Type 2 Diabetes",
      status: "pending",
      requestDate: "2024-11-02",
      urgency: "high"
    },
    {
      id: 3,
      name: "Emily Davis",
      age: 28,
      gender: "Female",
      condition: "Migraine",
      status: "pending",
      requestDate: "2024-11-02",
      urgency: "low"
    }
  ]);

  const handleDecision = (patientId, decision) => {
    setPatients(patients.map(patient =>
      patient.id === patientId
        ? { ...patient, status: decision }
        : patient
    ));
  };

  return (
    <Page title="Patient Approval Dashboard">
      <Content>
        <List>
          {patients.map(patient => (
            <ListItem key={patient.id} status={patient.status}>
              <PatientInfo>
                <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{patient.name}</h3>
                <div style={{ fontSize: '0.875rem', color: '#4a5568' }}>
                  {patient.age} years • {patient.gender}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#4a5568' }}>
                  <strong>Condition:</strong> {patient.condition}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#4a5568' }}>
                  Request Date: {patient.requestDate}
                </div>
                <UrgencyBadge urgency={patient.urgency}>
                  {patient.urgency.toUpperCase()}
                </UrgencyBadge>
              </PatientInfo>
              {patient.status === 'pending' ? (
                <ButtonGroup>
                  <Button onClick={() => handleDecision(patient.id, 'approved')}>
                    Approve
                  </Button>
                  <Button reject onClick={() => handleDecision(patient.id, 'rejected')}>
                    Reject
                  </Button>
                </ButtonGroup>
              ) : (
                <StatusBadge status={patient.status}>
                  {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                </StatusBadge>
              )}
            </ListItem>
          ))}
        </List>
      </Content>
    </Page>
  );
};

export default PatientApprovalInterface;