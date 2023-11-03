import React, { useState } from 'react';
import './assets/Form.css';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validEamil, setValidEmail] = useState(false);
    const [gender, setGender] = useState('female');
    const [birthYear, setBirthYear] = useState('');
    const [descriprtion, setDescriprtion] = useState('');
    const [agreeProv, setAgreeProv] = useState('no');
    
    const onChangeName =(e)=>{
        // setName(e.target.value);

        //10자 제한
        setName(e.target.value.substr(0, 10));
    };

    //비제어!
    const onChangeEmail =(e)=>{
        setEmail(e.target.value);
        //check email format (include @)
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        setValidEmail(re.test(email));
    };

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            <input id="name" name="name" type="text" value={name} onChange={onChangeName}/>

            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" value={email} onChange={onChangeEmail}/>
            {
                email =='' ? 
                    null:  
                    validEamil? <b>o</b>: 
                    <b>x</b>
            }

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" value={'female'} defaultChecked={gender === 'female'} onChange={e=>setGender(e.target.value)} />
                <label>남</label> <input type="radio" name="gender" value={'male'} defaultChecked={ gender === 'male' } onChange={e=>setGender(e.target.value)} />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select 

                id="birthYear"
                value={birthYear}
                onChange={e=> setBirthYear(e.target.value)}
                >
                <option value=''>생년을 선택하세요.</option>
                <option value='1984'>1984년</option>
                <option value='1985'>1985년</option>
                <option value='1986'>1986년</option>
                <option value='1987'>1987년</option>
                <option value='1988'>1988년</option>
                <option value='1989'>1989년</option>
                <option value='1990'>1990년</option>
            </select>

            <label htmlFor="descriprtion">자기소개</label>
            <textarea id={'descriprtion'} value={descriprtion} onChange={e=>setDescriprtion(e.target.value)}/>

            <fieldset>
                <legend>약관동의</legend>
                <input 
                    id="agree-prov" 
                    type="checkbox" 
                    name="agreeProv" 
                    value= { agreeProv }
                     defaultChecked={ agreeProv ==='yes' } 
                    onChange={e=>{
                        const val = e.target.value === 'yes' ? 'no':'yes';
                        setAgreeProv(val);
                    }} />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}