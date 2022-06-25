import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        const res = await fetch(`http://localhost:4000/api/contact/get_contacts?id=${userId}`);
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getData = async () => {
            const fetchedContacts = await getContacts();
            setContacts(fetchedContacts);
        };
        getData();
    }, []);

    console.log('contacts =>', contacts);
    return (
        <div>
            <Header userName={''} />
            <div className='body-wrapper'>
                <SearchBar />
                <h1>hi</h1>
                <h2>isdvicsndiv</h2>
                <div className='card-container'>
                    {contacts.map((contact) => {
                        return (
                            <Card
                                key={contact._id}
                                name={contact.fullName}
                                phone={contact.phoneNumber}
                                email={contact.email}
                                relationship={contact.relationshipStatus}
                                location={contact.location.coordinates}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
