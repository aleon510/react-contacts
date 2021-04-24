import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import VerticallyAlignedCol from '../common/VerticallyAlignedCol';

const ContactCardWrapper = styled(Container)`
  margin-bottom: 48px;
  padding: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const CardAvatarWrapper = styled.div`
  padding-right: 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const CardAvatar = styled.img`
  border-radius: 50%;
  width: 150px;
`;

const ContactCard = ({
  firstName = '',
  lastName = '',
  phoneNumber = '',
  profilePic = '',
}) => {
  return (
    <ContactCardWrapper className='shadow bg-white rounded'>
      <Row>
        <VerticallyAlignedCol>
          <CardAvatarWrapper>
            <CardAvatar
              src={profilePic}
              alt={`Profile of ${firstName} ${lastName}.`}
            />
          </CardAvatarWrapper>
        </VerticallyAlignedCol>
        <VerticallyAlignedCol xs={8}>
          <p>
            {firstName} {lastName}
          </p>
          <p>{phoneNumber}</p>
        </VerticallyAlignedCol>
        <VerticallyAlignedCol>
          <FontAwesomeIcon icon={faTimesCircle} />
        </VerticallyAlignedCol>
      </Row>
    </ContactCardWrapper>
  );
};

export default ContactCard;
