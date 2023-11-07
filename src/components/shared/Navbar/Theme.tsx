"use client"
import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';

const Theme = () => {

    const [currentTheme, setCurrentTheme] = useState('light')

    useEffect(() => {
     console.log('setting theme icon')
    }, [])

    function updateTheme(){
        if (currentTheme === 'light'){
            setCurrentTheme('dark');
        }else{
            setCurrentTheme('light');
        }
    }
    
  return (
    <div>
       <button onClick={()=>updateTheme()}>
       {
            currentTheme === 'dark' ?(
                <FontAwesomeIcon icon={faSun} />
            ):
            (
                <FontAwesomeIcon icon={faMoon} />
            )
        }
       </button>
    </div>
  )
}

export default Theme