import React from 'react';

function ContactList(props)
{
    return (
        <div>
            <h1>{props.contact.name}</h1>
            <p>Phone: {props.contact.Phone}</p>
            <p>email: {props.contact.email}</p>
        </div>
    );
}

export default ContactList;