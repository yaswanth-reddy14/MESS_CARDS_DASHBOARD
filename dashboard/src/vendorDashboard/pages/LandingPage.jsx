import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Login from '../components/forms/Login';
import Register from '../components/forms/Register';
import AddFirm from '../components/forms/AddFirm';
import AddProduct from '../components/forms/AddProduct';
import axios from 'axios';

const LandingPage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showFirm, setShowFirm] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [showFirmsList, setShowFirmsList] = useState(false); // New state for firm list
    const [firms, setFirms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const showLoginHandler = () => {
        setShowLogin(true);
        setShowRegister(false);
        setShowFirm(false);
        setShowProduct(false);
        setShowFirmsList(false);
    };

    const showRegisterHandler = () => {
        setShowRegister(true);
        setShowLogin(false);
        setShowFirm(false);
        setShowProduct(false);
        setShowFirmsList(false);
    };

    const showFirmHandler = () => {
        setShowFirm(true);
        setShowLogin(false);
        setShowRegister(false);
        setShowProduct(false);
        setShowFirmsList(false);
    };

    const showProductHandler = () => {
        setShowProduct(true);
        setShowLogin(false);
        setShowRegister(false);
        setShowFirm(false);
        setShowFirmsList(false);
    };

    const showFirmsListHandler = async () => {
        setShowFirmsList(true);
        setShowLogin(false);
        setShowRegister(false);
        setShowFirm(false);
        setShowProduct(false);
        setLoading(true);
        setError('');

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Please log in to view firms');
                setLoading(false);
                return;
            }

            const response = await axios.get('http://localhost:4000/vendor/firms', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setFirms(response.data.firms);
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to fetch firms');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='landingSection'>
            <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler} />
            <div className="collectionSection">
                <SideBar 
                    showFirmHandler={showFirmHandler} 
                    showProductHandler={showProductHandler}
                    showFirmsListHandler={showFirmsListHandler} // Pass new handler
                />
                {showLogin && <Login />}
                {showRegister && <Register showLoginHandler={showLoginHandler} />}
                {showFirm && <AddFirm />}
                {showProduct && <AddProduct />}
                {showFirmsList && (
                    <div className="firmsList">
                        <h3>Firms</h3>
                        {error && <p className="error">{error}</p>}
                        {loading ? (
                            <p>Loading...</p>
                        ) : firms.length > 0 ? (
                            <table className="firmsTable">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Area</th>
                                        <th>Address</th>
                                        <th>Contact</th>
                                        <th>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {firms.map(firm => (
                                        <tr key={firm._id}>
                                            <td>{firm.mess_Name}</td>
                                            <td>{firm.area}</td>
                                            <td>{firm.mess_Address}</td>
                                            <td>{firm.contact || '-'}</td>
                                            <td>
                                                {firm.image ? (
                                                    <img src={firm.image} alt={firm.mess_Name} width="50" />
                                                ) : '-'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No firms available.</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default LandingPage;