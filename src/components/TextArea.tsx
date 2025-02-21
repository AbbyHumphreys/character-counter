import { React } from 'react'
import "./TextArea.sass"

type TextAreaProps = {
    text: string;
    setText: (text: string) => void;
};

const TextArea: React.FC<TextAreaProps> = ({ text, setText }) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    };
    
    const handleFocus = () => {
        if (text === "Type here...") {
            setText("");
        }
    };

    return (
        <div className="textarea-container">
            <form action="#">
                    <textarea 
                        name="text" 
                        id="text" 
                        value={text} 
                        rows={6} 
                        onChange={handleChange} 
                        onFocus={handleFocus}
                        placeholder="Type here..."
                    />
            </form>
        </div>
    )
}

export default TextArea;