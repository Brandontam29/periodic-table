import { Link } from "react-router-dom";
import { Element as ElementType } from "../../types";
import styles from "./element.module.scss";

interface Props {
    element: ElementType;
}

export const Element = ({ element }: Props) => {
    return (
        <Link
            to={`${element.name}`}
            state={{ element }}
            style={{
                backgroundColor: `#${element.cpkHexColor}`,
                gridColumnStart: element.group,
                gridRowStart: element.period,
            }}
        >
            <div key={element.atomicNumber} className={styles.container}>
                <div className={styles.number}>{element.atomicNumber}</div>
                <div className={styles.symbol}>{element.symbol}</div>
                <div className={styles.name}>{element.name}</div>
            </div>
        </Link>
    );
};
