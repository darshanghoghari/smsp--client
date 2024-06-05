// src/HouseDetail.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import './index.css';
import ActionModal from '../common/modal/index';
import { fetchHomeData } from '../../../features/home/homeSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';


const HouseDetail = () => {
    const dispatch = useDispatch();
    const { home, loading, error } = useSelector((state) => state.house);
    const [modalShow, setModalShow] = useState(false);
    const [modalAction, setModalAction] = useState('');
    const [modalData, setModalData] = useState({});
    const [houseData, setHouseData] = useState(null);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    useEffect(() => {
        setHouseData(home?.data);
    }, [home]);

    const handleModalShow = (actionType, data = {}) => {
        setModalAction(actionType);
        setModalData(data);
        setModalShow(true);
    };

    const handleModalClose = () => setModalShow(false);

    const handleModalSubmit = async (data) => {
        try {
            // if (modalAction === 'add') {
            //     await dispatch(addHouse(data));
            //     toast.success('House added successfully.');
            // } else if (modalAction === 'update') {
            //     await dispatch(updateHouse(data));
            //     toast.success('House updated successfully.');
            // } else if (modalAction === 'delete') {
            //     await dispatch(deleteHouse(data._id));
            //     toast.success('House deleted successfully.');
            // }
            setModalShow(false);
        } catch (error) {
            toast.error('Failed to perform action.');
        }
    };

    return (
        <Container fluid className="p-3">
            <ToastContainer />

            {/* First Row */}
            <Row className="align-items-center mb-3">
                <Col className="text-start">
                    <h1 className="m-0">House Details</h1>
                </Col>
                <Col className="text-end">
                    <Button variant="primary" onClick={() => handleModalShow('add')}>Add</Button>
                </Col>
            </Row>

            {/* Second Row */}
            <Row>
                <Col>
                    {loading ? (
                        <CircularProgress />
                    ) : error ? (
                        <div>Error: {error.message}</div>
                    ) : (
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>House No</th>
                                    <th>Type</th>
                                    <th>Sell Price</th>
                                    <th>Rate Money</th>
                                    <th>On Sale</th>
                                    {/* <th>Floor Count</th>
                                    <th>Owner</th>
                                    <th>Tenant</th>
                                    <th>Admin</th> */}
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {houseData && houseData.map((house, index) => (
                                    <tr key={house._id}>
                                        <td>{index + 1}</td>
                                        <td>{house.houseNo}</td>
                                        <td>{house.houseType}</td>
                                        <td>{house.houseSellPrice}</td>
                                        <td>{house.houseOnRateMoney}</td>
                                        <td>{house.houseOnSale ? 'Yes' : 'No'}</td>
                                        {/* <td>{house.houseFloorCount}</td>
                                        <td>{house.houseOwnerUserId}</td>
                                        <td>{house.houseOnRentTenantId}</td>
                                        <td>{house.adminUserId}</td> */}
                                        <td>
                                            <Button variant="info" size="sm" className="me-2" onClick={() => handleModalShow('view', house)}>View</Button>
                                            <Button variant="warning" size="sm" className="me-2" onClick={() => handleModalShow('update', house)}>Update</Button>
                                            <Button variant="danger" size="sm" onClick={() => handleModalShow('delete', house)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Col>
            </Row>

            {/* Action Modal */}
            <ActionModal
                show={modalShow}
                handleClose={handleModalClose}
                actionType={modalAction}
                data={modalData}
                handleSubmit={handleModalSubmit}
            />
        </Container>
    );
};

export default HouseDetail;



// // src/HouseDetail.js

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Container, Row, Col, Button, Table } from 'react-bootstrap';
// import './index.css';
// import ActionModal from '../common/modal/index';
// import { fetchHomeData } from '../../../features/home/homeSlice';

// const HouseDetail = () => {
//     const dispatch = useDispatch();
//     const { home, loading, error } = useSelector((state) => state.house);
//     const [modalShow, setModalShow] = useState(false);
//     const [modalAction, setModalAction] = useState('');
//     const [modalData, setModalData] = useState({});
//     const [houseData, setHouseData] = useState(null);

//     useEffect(() => {
//         dispatch(fetchHomeData());
//         setHouseData(home?.data);
//     }, [dispatch]);

//     const handleModalShow = (actionType, data = {}) => {
//         setModalAction(actionType);
//         setModalData(data);
//         setModalShow(true);
//     };

//     const handleModalClose = () => setModalShow(false);

//     const handleModalSubmit = (data) => {
//         if (modalAction === 'add') {
//             dispatch(addHouse(data));
//         }
//         // else if (modalAction === 'update') {
//         //     dispatch(updateHouse(data));
//         // } else if (modalAction === 'delete') {
//         //     dispatch(deleteHouse(data._id));
//         // }
//         setModalShow(false);
//     };

//     return (
//         <Container fluid className="p-3">
//             {/* First Row */}
//             <Row className="align-items-center mb-3">
//                 <Col className="text-start">
//                     <h1 className="m-0">House Details</h1>
//                 </Col>
//                 <Col className="text-end">
//                     <Button variant="primary" onClick={() => handleModalShow('add')}>Add</Button>
//                 </Col>
//             </Row>

//             {/* Second Row */}
//             <Row>
//                 <Col>
//                     <Table striped bordered hover responsive>
//                         <thead>
//                             <tr>
//                                 <th>No</th>
//                                 <th>House No</th>
//                                 <th>Type</th>
//                                 <th>Sell Price</th>
//                                 <th>Rate Money</th>
//                                 <th>On Sale</th>
//                                 {/* <th>Floor Count</th>
//                                 <th>Owner</th>
//                                 <th>Tenant</th>
//                                 <th>Admin</th> */}
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {houseData && houseData.map((house, index) => (
//                                 <tr key={house._id}>
//                                     <td>{index + 1}</td>
//                                     <td>{house.houseNo}</td>
//                                     <td>{house.houseType}</td>
//                                     <td>{house.houseSellPrice}</td>
//                                     <td>{house.houseOnRateMoney}</td>
//                                     <td>{house.houseOnSale ? 'Yes' : 'No'}</td>
//                                     {/* <td>{house.houseFloorCount}</td>
//                                     <td>{house.houseOwnerUserId}</td>
//                                     <td>{house.houseOnRentTenantId}</td>
//                                     <td>{house.adminUserId}</td> */}
//                                     <td>
//                                         <Button variant="info" size="sm" className="me-2" onClick={() => handleModalShow('view', house)}>View</Button>
//                                         <Button variant="warning" size="sm" className="me-2" onClick={() => handleModalShow('update', house)}>Update</Button>
//                                         <Button variant="danger" size="sm" onClick={() => handleModalShow('delete', house)}>Delete</Button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>
//                 </Col>
//             </Row>

//             {/* Action Modal */}
//             <ActionModal
//                 show={modalShow}
//                 handleClose={handleModalClose}
//                 actionType={modalAction}
//                 data={modalData}
//                 handleSubmit={handleModalSubmit}
//             />
//         </Container>
//     );
// };

// export default HouseDetail;
