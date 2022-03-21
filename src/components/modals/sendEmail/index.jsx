import React from 'react';
import { useTranslation } from "react-i18next";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";

import sendEmail from '../../../utils/sendEmail';

import styles from './styles.module.scss';
import Button from '../../UI/button';

const EmailModal = props => {
    const { t } = useTranslation();
    const emailContent = t("email", { returnObjects: true });
    const [ send, setSend ] = React.useState(false);
    const [ error, setError ] = React.useState(false);
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
            sendEmail(sendData).then(() => setSend(true)).catch(() => setError(true));
        }
    }


    const renderMessage = () => {
        if (send) {
            return (
                <div className={styles.thankyou}>
                    <MdOutlineMarkEmailRead 
                        className={styles.thankyou__icon}
                    />
                    <p className={styles.thankyou_content} dangerouslySetInnerHTML={{ __html: emailContent.thankYou }} />
                    <Button text={'OK'} medium={true} type={'primary'} className={styles.emailModal_button} onClick={props.onClick}/>
                </div>
            )
        }
        if (error) {
            return (
                <div className={styles.thankyou}>
                    <RiErrorWarningLine 
                        className={styles.thankyou__icon}
                    />
                    <p className={styles.thankyou_content} dangerouslySetInnerHTML={{ __html: emailContent.errorMessage }} />
                    <Button text={'OK'} medium={true} type={'primary'} className={styles.emailModal_button} onClick={props.onClick}/>
                </div>
            )
        }
    }

    return (
        <div className={styles.emailModal} onClick={props.onClick}>
            <div className={styles.emailModal_modal} onClick={e => e.stopPropagation()}>
                {!send && !error ? <>
                    <h4>{props.data.description[0]} {props.data.title}</h4>
                    <h5>{emailContent.title}</h5>
                    <input placeholder="Name*" onChange={event => !!validateName(event.target.value) && setName(event.target.value)} />
                    <span className={styles.error_message}>{nameErrorMessage}</span>
                    <input placeholder="Email*" onChange={event => !!validateEmail(event.target.value) && setEmail(event.target.value)} />
                    <span className={styles.error_message}>{emailErrorMessage}</span>
                    <textarea placeholder="Write a message..." onChange={event => setText(event.target.value)} />
                    <input placeholder="Phone" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
                    <Button text={emailContent.submit} medium={true} type={'primary'} className={styles.emailModal_button} onClick={() => validateSubmit()}/>
                </>
                : renderMessage()}
            </div>
        </div>
    );
};

export default EmailModal;