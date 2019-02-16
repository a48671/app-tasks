import React, { PureComponent } from 'react';

import Overlay from '../Overlay/Overlay';
import Dialog from '../Dialog/Dialog';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';

export default class CreateTask extends PureComponent {
    render() {
        return (
            <Overlay>
                <Dialog 
                    title="Create new task"
                >
                    <Input />
                    <Input />
                    <Textarea />
                </Dialog>
            </Overlay>
        );
    }
}
