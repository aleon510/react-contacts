import { Redirect, useParams } from 'react-router';
import { useContacts } from '../../contexts/ContactContext';
import ContactDetailsCard from './ContactDetailsCard';

const ContactDetailsPage = () => {
  const { contacts } = useContacts();
  const { index } = useParams();

  const id = parseInt(index);

  const contact =
    Number.isInteger(id) && id >= 0 && id < contacts.length
      ? contacts[id]
      : null;

  return (
    <div>
      {contact ? (
        <ContactDetailsCard contact={contact} />
      ) : (
        <Redirect to='/page-not-found' />
      )}
    </div>
  );
};

export default ContactDetailsPage;
