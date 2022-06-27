import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Map from '../components/Map';
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState([]);

    const getContacts = async () => {
        const res = await fetch(`http://localhost:4000/api/contact/get_contacts?id=${userId}`);
        const data = await res.json();
        return data;
    };

    const getData = async () => {
        const fetchedContacts = await getContacts();
        setContacts(fetchedContacts);
        setSearch(fetchedContacts);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        console.log(value);
        let results = [];
        results = search.filter((contacts) => {
            return contacts.fullName.search(value) != -1 || contacts.phoneNumber.search(value) != -1 || contacts.email.search(value) != -1;
        });
        setContacts(results);
    };

    return (
        <div>
            <Header userName={userName} pageTitle='Your Contacts' />
            <div className='body-wrapper'>
                <div className='search'>
                    <input className='search-bar' type='text' placeholder='Search' onChange={(e) => handleSearch(e)} />
                </div>
                <h1>hi</h1>
                <h2>isdvicsndiv</h2>
                <div className='card-container'>
                    {contacts.map((contact) => {
                        return (
                            <Card
                                key={contact._id}
                                id={contact._id}
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
