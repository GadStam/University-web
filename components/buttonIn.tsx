import React from 'react'
import './buttonStle.css'
import { text } from 'stream/consumers'

interface ButtonProps {
  text: string;
  onClick?: () => void; // Añadimos la prop onClick opcional
}

export const ButtonIn: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div>
        <button className="btn" type="button">
    <strong>{text}</strong>
    <div id="container-stars">
        <div id="stars"></div>
    </div>

    <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
    </div>
</button>

    </div>
  )
}
