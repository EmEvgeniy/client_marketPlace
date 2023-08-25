import { FC, ReactNode } from "react"
import classes from './container.module.css'


interface ContainerInterface {
	children: ReactNode
}

const Container:FC<ContainerInterface> = ({children}) => {
	return (
		<div className={classes.container}>{children}</div>
	)
}

export default Container;