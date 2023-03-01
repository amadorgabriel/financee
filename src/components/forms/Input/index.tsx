import { InputHTMLAttributes } from "react";

import styles from "./style.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label }: InputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="input" className="mb-1">
        {label}
      </label>
      <input id="input" placeholder="Digite aqui.." />
    </div>
  );
}
