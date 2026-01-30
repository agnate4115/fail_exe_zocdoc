import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet';
import Page from '@layout/Page';

// Dummy data for beds and OPDs
const initialData = [
    { id: 1, type: 'Bed', details: 'Room 101', status: null },
    { id: 2, type: 'OPD', details: 'Dr. Smith - Cardiology', status: null },
    { id: 3, type: 'Bed', details: 'Room 102', status: null },
    { id: 4, type: 'OPD', details: 'Dr. Johnson - Orthopedics', status: null },
];

// Styled components
const Content = styled.div`
  padding: 20px;
  margin-top: var(--header-height);
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;

  button {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #f0f0f0;
  }
`;

const Status = styled.span`
  margin-left: 10px;
  font-weight: bold;
  color: ${({ status }) => (status === 'Approved' ? 'green' : status === 'Rejected' ? 'red' : 'black')};
`;

const ApproveBedsAndOPDsPage = () => {
    const [requests, setRequests] = useState(initialData);

    const handleApproval = (id) => {
        setRequests((prevRequests) =>
            prevRequests.map((request) =>
                request.id === id ? { ...request, status: 'Approved' } : request
            )
        );
    };

    const handleRejection = (id) => {
        setRequests((prevRequests) =>
            prevRequests.map((request) =>
                request.id === id ? { ...request, status: 'Rejected' } : request
            )
        );
    };

    return (
        <Page title="Approve Beds and OPDs">
            <Content>
                <Helmet>
                    <title>CAREMATE | Approve Beds and OPDs</title>
                </Helmet>
                <Title>Approve Beds and OPDs</Title>
                <List>
                    {requests.map((request) => (
                        <ListItem key={request.id}>
                            <span>{`${request.type}: ${request.details}`}</span>
                            <div>
                                <button onClick={() => handleApproval(request.id)}>Approve</button>
                                <button onClick={() => handleRejection(request.id)}>Reject</button>
                                {request.status && <Status status={request.status}>- Status: {request.status}</Status>}
                            </div>
                        </ListItem>
                    ))}
                </List>
            </Content>
        </Page>
    );
};

export default ApproveBedsAndOPDsPage;
