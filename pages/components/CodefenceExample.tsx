import React, { useEffect } from 'react';

const CodefenceComponent: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@codefence/codefence@latest/dist/codefence.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const code = `
        const fs = require('fs');
        const name = "Ben";
        console.log(\`Hello \${name}, how are you today?\`);
        fs.writeFile('test.txt', \`Hello \${name}, how are you today?\`, function (err) {
            if (err) return console.log(err);
        });
    `;

    const test = `
        Hello .+, from the console\\.
    `;

    const testFile = `
        Hello .+, from a file\\.
    `;

    const editorHTML = `
        <code-fence lang="js" heading="Hello World with Tests" artifact="test.txt">
            <textarea slot="code">${code}</textarea>
            <textarea slot="test" name="Test Output">${test}</textarea>
            <textarea slot="test" file="test.txt" name="Test Output">${testFile}</textarea>
        </code-fence>
    `;

    return <div dangerouslySetInnerHTML={{ __html: editorHTML }} />;
};

export default CodefenceComponent;