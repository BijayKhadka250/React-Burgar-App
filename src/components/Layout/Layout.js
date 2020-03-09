import React from 'react'
import Styles from '../../index.css'
import Classes from './Layout.css'

import Auxiliary from '../../hoc/Auxiliary'

const layout = ( props ) => (
    <Auxiliary className = {Styles.body}>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
)

export default layout