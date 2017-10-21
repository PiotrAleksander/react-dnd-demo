import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Snack from './Snack';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Container extends Component {
    render() {
        return (
            <div>
                <Snack name='Dynia' />
                <Snack name='Mafinka' />
                <Snack name='Donateł' />
                <Snack name='Burrito' />
                <Snack name='Popkorn' />
                <ShoppingCart />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Container);