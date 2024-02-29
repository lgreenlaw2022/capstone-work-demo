import CodeMirror from '@uiw/react-codemirror';
import { historyField } from '@codemirror/commands';
import { python } from '@codemirror/lang-python';


// When custom fields should be serialized, you can pass them in as an object mapping property names to fields.
// See [toJSON](https://codemirror.net/docs/ref/#state.EditorState.toJSON) documentation for more details
const stateFields = { history: historyField };

export default function EditorWithInitialState() {
  const serializedState = localStorage.getItem('myEditorState');
  const value = localStorage.getItem('myValue') || '';

  const exercise =`
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
my_dict = 

# 2. Add a key-value pair
my_dict[

# 3. Retrieve the value
print(

# 4. Remove the key-value pair
del my_dict[
`;

  return (
    <div >
      <CodeMirror
        value={exercise}
        extensions={[python()]}
        initialState={
          serializedState
            ? {
                json: JSON.parse(serializedState || ''),
                fields: stateFields,
              }
            : undefined
        }
        onChange={(value, viewUpdate) => {
          localStorage.setItem('myValue', value);

          const state = viewUpdate.state.toJSON(stateFields);
          localStorage.setItem('myEditorState', JSON.stringify(state));
        }}
      />
    </div>
  );
}