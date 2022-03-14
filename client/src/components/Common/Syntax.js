import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);

const Syntax = ({ label, language, codeString }) => {
    return (
        <div>
            <p>
                <i>{label}</i>
            </p>
            <SyntaxHighlighter
                language={language ? language : "jsx"}
                style={vscDarkPlus}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default Syntax;
