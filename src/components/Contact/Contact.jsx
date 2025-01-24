import { BsPhone, BsPerson, BsTrash } from 'react-icons/bs';

import css from './Contact.module.css';

const Contact = ({ id, number, name, onDelete }) => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactText}>
        <h2 className={css.contactName}>
          <BsPerson size="22" />
          {name}
        </h2>
        <p className={css.contactNumber}>
          <BsPhone size="22" />
          {number}
        </p>
      </div>
      <button className={css.buttonDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
