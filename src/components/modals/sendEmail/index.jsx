import React from 'react';
import { useTranslation } from "react-i18next";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import sendEmail from '../../../utils/sendEmail';

import styles from './styles.module.scss';
import Button from '../../UI/button';

const EmailModal = props => {
    const { t } = useTranslation();
    const emailContent = t("email", { returnObjects: true });
    const [ send, setSend ] = React.useState(false);
    const [ name, setName ] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ text, setText ] = React.useState('');
    const [ nameErrorMessage, setNameErrorMessage ] = React.useState('');
    const [ emailErrorMessage, setEmailErrorMessage ] = React.useState('');

    const validateEmail = value => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!value) {
            setEmailErrorMessage(emailContent.requiredError);
            return false;
        } else if (regex.test(value) === false) {
            setEmailErrorMessage(emailContent.emailError);
            return false;
        } else {
            setEmailErrorMessage('');
            return true;
        }
    }

    const validateName = value => {
        const regex = /([A-Za-z]{2})\w+/;
        if (!value) {
            setNameErrorMessage(emailContent.requiredError);
            return false;
        } else if (regex.test(value) === false) {
            setNameErrorMessage(emailContent.nameError);
            return false;
        } else {
            setNameErrorMessage('');
            return true;
        }
    }

    const validateSubmit = async () => {
        if (validateName(name) && validateEmail(email)) {
            // TODO here goes api call
            console.log('Send email to', name, email, text, 'with this data', props.data)

            const list = props.data.description.map(item => `<li>${item}</li>`);
            const html = `<ul>${list.join('')}</ul>`;
            const sendData = {
                name,
                email,
                text,
                price: props.data.price,
                title: props.data.title,
                content: html
            }
            const response = await sendEmail(sendData);
            console.log('response2', response);
            // props.onClick();
            setSend(true);
        }
    }

    return (
        <div className={styles.emailModal} onClick={props.onClick}>
            <div className={styles.emailModal_modal} onClick={e => e.stopPropagation()}>
                {!send ? <>
                    <h5>{emailContent.title}</h5>
                    <input placeholder="Name" onChange={event => !!validateName(event.target.value) && setName(event.target.value)} />
                    <span className={styles.error_message}>{nameErrorMessage}</span>
                    <input placeholder="Email" onChange={event => !!validateEmail(event.target.value) && setEmail(event.target.value)} />
                    <span className={styles.error_message}>{emailErrorMessage}</span>
                    <textarea placeholder="Write a message..." onChange={event => setText(event.target.value)} />
                    <Button text={emailContent.submit} medium={true} type={'primary'} className={styles.emailModal_button} onClick={() => validateSubmit()}/>
                </>
                : <div className={styles.thankyou}>
                    <MdOutlineMarkEmailRead 
                        className={styles.thankyou__icon}
                    />
                    <p className={styles.thankyou_content} dangerouslySetInnerHTML={{ __html: emailContent.thankYou }} />
                    <Button text={'OK'} medium={true} type={'primary'} className={styles.emailModal_button} onClick={props.onClick}/>
                </div>}
            </div>
        </div>
    );
};

export default EmailModal;