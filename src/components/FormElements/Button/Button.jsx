import React, {useEffect} from 'react';
import "./styles.css";

const Button = ({text, onClick}) => {

  useEffect(() => {
    const btn = document.querySelector(".ripple-btn");
    btn.onclick = function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => {
          ripple.remove();
        }, 500);
    };
  },[])

  return (
    <button href="#" onClick={onClick} className="ripple-btn" data-testid="button">
    {text}
    </button>
  )
}

export default Button