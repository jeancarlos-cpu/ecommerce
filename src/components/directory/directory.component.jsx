import React, {useState} from 'react';
import MenuItem from '../menu-item/menu-item.component';

import SECTIONS_DATA from './sections.data';
import './directory.styles.scss';

const Directory = () => {
    
        const [sections, setSectios] = useState(SECTIONS_DATA);

        return (
            <div className="directory-menu">
                {
                    sections.map(({ id, ...props }) => (
                        <MenuItem
                            key={id}
                            {...props}
                        />
                    ))
                }
            </div>
        )
};

export default Directory;