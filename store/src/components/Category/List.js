import React from 'react';
import { Category } from './Category';

const CategoryList = (props) => {
    return <div className="col-2">
        <ul className="list-group">
            {props.categories.map(category => <Category key={category.title} title={category.title} />)}
        </ul>
    </div>
}

export { CategoryList }