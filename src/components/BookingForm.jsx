import React,{useState} from 'react';

export const BookingForm = ({handleForm}) => {
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");

    const handleChangeUserName=(event) =>
    {
       setUserName(event.target.value);
    };

    const handleChangeEmail=(event) =>
    {
        setEmail(event.target.value);
    };

    const handleBookingButton = (event) => {
        event.preventDefault();
        handleForm({userName,email});
    };

    return (
        <form>
            <input className="userName" placeholder="Введите имя" value={userName} onChange={handleChangeUserName} />
            <input className="email" placeholder="Введите email" value={email} onChange={handleChangeEmail} />
            <button type='submit' disabled={!(userName && email)} onClick={handleBookingButton}>Зарезервировать</button>
        </form>
    )
};