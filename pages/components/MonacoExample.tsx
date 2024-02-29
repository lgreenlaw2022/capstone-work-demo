import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the MonacoEditor component with SSR disabled
const MonacoEditor = dynamic(() => import('react-monaco-editor'), { ssr: false });

class CodeEditor extends React.Component<{}, { code: string }> {
    private readonly exercise =`
# Exercise: Working with dictionaries in Python
    
# A dictionary in Python is a collection of key-value pairs. 
# Each key is connected to a value, and you can use a key to access the value associated with that key.

# Your task is to:

# 1. Create a dictionary named 'my_dict'.

# 2. Add a key-value pair to 'my_dict'. The key should be 'name' and the value should be your name.

# 3. Retrieve the value associated with the key 'name' from 'my_dict' and print it.

# 4. Remove the key-value pair with the key 'name' from 'my_dict'.

# Here's a skeleton to get you started:

# 1. Create a dictionary
my_dict = {

# 2. Add a key-value pair
my_dict[

# 3. Retrieve the value
print(

# 4. Remove the key-value pair
del my_dict[
`;

    constructor(props: {}) {
        super(props);
        this.state = {
            code: this.exercise,
        };
    }

    editorDidMount = (editor: any, monaco: any) => {
        console.log('editorDidMount', editor);
        editor.focus();
    };

    onChange = (newValue: string) => {
        console.log('onChange', newValue);
        this.setState({ code: newValue });
    };

    render() {
        const options = {
            selectOnLineNumbers: true,
            colorDecorators: true,
        };

        return (
            <MonacoEditor
                width="800"
                height="600"
                language="python"
                theme="vs-dark"
                value={this.state.code}
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
            />
        );
    }
};

export default CodeEditor;