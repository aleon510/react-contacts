import ContactCard from "./ContactCard"
import styled from 'styled-components';

const ContactListWrapper = styled.div`
    padding: 100px 0;
    background-color: #e4e4e4;
`;

const ContactList = ({ contacts=[] }) => {
    return (
        <ContactListWrapper>
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            )}
        </ContactListWrapper>
    )
}

export default ContactList;
