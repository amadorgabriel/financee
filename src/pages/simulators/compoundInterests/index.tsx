import { Input } from "../../../components/forms/Input";

import style from "./styles.module.scss";

export function CompoundInterests() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Input label="Valor inicial" />
        <select>
          <option value="">Option 1</option>
          <option value="">Option 2</option>
        </select>
        <button>Enviar</button>
      </div>
    </div>
  );
}
