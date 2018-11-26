import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'hello-world'
})
export class HelloWorld {
    /**
     * Name
     */
    @Prop() name: string;

    render() {
        if (this.name) {
            return <p>Hello, {this.name}</p>;
        }
        return <p>Hello, World!</p>;
    }
}
