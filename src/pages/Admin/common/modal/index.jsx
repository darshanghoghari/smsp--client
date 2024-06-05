// src/common/modal/index.js

import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ActionModal = ({ show, handleClose, actionType, data, handleSubmit }) => {
    const renderModalBody = () => {
        switch (actionType) {
            case 'add':
            case 'update':
                return (
                    <>
                        <Form.Group controlId="formHouseNo">
                            <Form.Label>House No</Form.Label>
                            <Form.Control type="text" placeholder="Enter house number" defaultValue={data.houseNo || ''} />
                        </Form.Group>
                        <Form.Group controlId="formHouseType" className="mt-2">
                            <Form.Label>House Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter house type" defaultValue={data.houseType || ''} />
                        </Form.Group>
                        <Form.Group controlId="formHouseSellPrice" className="mt-2">
                            <Form.Label>House Sell Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter sell price" defaultValue={data.houseSellPrice || ''} />
                        </Form.Group>
                        <Form.Group controlId="formHouseOnRateMoney" className="mt-2">
                            <Form.Label>House Rate Money</Form.Label>
                            <Form.Control type="text" placeholder="Enter rate money" defaultValue={data.houseOnRateMoney || ''} />
                        </Form.Group>
                        <Form.Group controlId="formHouseOnSale" className="mt-2">
                            <Form.Label>House On Sale</Form.Label>
                            <Form.Check type="checkbox" label="On Sale" defaultChecked={data.houseOnSale || false} />
                        </Form.Group>
                        <Form.Group controlId="formHouseFloorCount" className="mt-2">
                            <Form.Label>House Floor Count</Form.Label>
                            <Form.Control type="text" placeholder="Enter floor count" defaultValue={data.houseFloorCount || ''} />
                        </Form.Group>
                        <Form.Group controlId="formHouseOwnerUserId" className="mt-2">
                            <Form.Label>House Owner User ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter owner user ID" defaultValue={data.houseOwnerUserId || ''} />
                        </Form.Group>
                        <Form.Group controlId="formHouseOnRentTenantId" className="mt-2">
                            <Form.Label>House On Rent Tenant ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter tenant ID" defaultValue={data.houseOnRentTenantId || ''} />
                        </Form.Group>
                        <Form.Group controlId="formAdminUserId" className="mt-2">
                            <Form.Label>Admin User ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter admin user ID" defaultValue={data.adminUserId || ''} />
                        </Form.Group>
                    </>
                );
            case 'view':
                return (
                    <>
                        <p><strong>House No:</strong> {data.houseNo}</p>
                        <p><strong>House Type:</strong> {data.houseType}</p>
                        <p><strong>House Sell Price:</strong> {data.houseSellPrice}</p>
                        <p><strong>House Rate Money:</strong> {data.houseOnRateMoney}</p>
                        <p><strong>House On Sale:</strong> {data.houseOnSale ? 'Yes' : 'No'}</p>
                        <p><strong>House Floor Count:</strong> {data.houseFloorCount}</p>
                        <p><strong>House Owner User ID:</strong> {data.houseOwnerUserId}</p>
                        <p><strong>House On Rent Tenant ID:</strong> {data.houseOnRentTenantId}</p>
                        <p><strong>Admin User ID:</strong> {data.adminUserId}</p>
                    </>
                );
            case 'delete':
                return (
                    <p>Are you sure you want to delete the house with details: {data.houseNo}, {data.houseType}, {data.houseSellPrice}?</p>
                );
            default:
                return null;
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {actionType === 'add' ? 'Add House' :
                        actionType === 'update' ? 'Update House' :
                            actionType === 'view' ? 'View House' : 'Delete House'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {renderModalBody()}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {actionType === 'view' ? 'Close' : 'Cancel'}
                </Button>
                {actionType !== 'view' && (
                    <Button variant={actionType === 'delete' ? 'danger' : 'primary'} onClick={handleSubmit}>
                        {actionType === 'delete' ? 'Delete' : 'Save'}
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default ActionModal;




// // src/ActionModal.js

// import React from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// const ActionModal = ({ show, handleClose, actionType, data, handleSubmit }) => {
//     const renderModalBody = () => {
//         switch (actionType) {
//             case 'add':
//                 return (
//                     <>
//                         <Form.Group controlId="formDetail1">
//                             <Form.Label>Detail 1</Form.Label>
//                             <Form.Control type="text" placeholder="Enter detail 1" />
//                         </Form.Group>
//                         <Form.Group controlId="formDetail2" className="mt-2">
//                             <Form.Label>Detail 2</Form.Label>
//                             <Form.Control type="text" placeholder="Enter detail 2" />
//                         </Form.Group>
//                         <Form.Group controlId="formDetail3" className="mt-2">
//                             <Form.Label>Detail 3</Form.Label>
//                             <Form.Control type="text" placeholder="Enter detail 3" />
//                         </Form.Group>
//                     </>
//                 );
//             case 'update':
//                 return (
//                     <>
//                         <Form.Group controlId="formDetail1">
//                             <Form.Label>Detail 1</Form.Label>
//                             <Form.Control type="text" defaultValue={data.detail1} />
//                         </Form.Group>
//                         <Form.Group controlId="formDetail2" className="mt-2">
//                             <Form.Label>Detail 2</Form.Label>
//                             <Form.Control type="text" defaultValue={data.detail2} />
//                         </Form.Group>
//                         <Form.Group controlId="formDetail3" className="mt-2">
//                             <Form.Label>Detail 3</Form.Label>
//                             <Form.Control type="text" defaultValue={data.detail3} />
//                         </Form.Group>
//                     </>
//                 );
//             case 'view':
//                 return (
//                     <>
//                         <p><strong>Detail 1:</strong> {data.detail1}</p>
//                         <p><strong>Detail 2:</strong> {data.detail2}</p>
//                         <p><strong>Detail 3:</strong> {data.detail3}</p>
//                     </>
//                 );
//             case 'delete':
//                 return (
//                     <p>Are you sure you want to delete the item with details: {data.detail1}, {data.detail2}, {data.detail3}?</p>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>
//                     {actionType === 'add' ? 'Add Item' :
//                         actionType === 'update' ? 'Update Item' :
//                             actionType === 'view' ? 'View Item' : 'Delete Item'}
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     {renderModalBody()}
//                 </Form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                     {actionType === 'view' ? 'Close' : 'Cancel'}
//                 </Button>
//                 {actionType !== 'view' && (
//                     <Button variant={actionType === 'delete' ? 'danger' : 'primary'} onClick={handleSubmit}>
//                         {actionType === 'delete' ? 'Delete' : 'Save'}
//                     </Button>
//                 )}
//             </Modal.Footer>
//         </Modal>
//     );
// };

// export default ActionModal;
