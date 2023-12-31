import Block from "./Block";

export default class TextBlock extends Block { 
    constructor() {
        super("text");
        this.fontSize = 16; //default fontSize
        this.weight = 400; //default weight
        this.color = "#20385C";
        this.textTransform = false;  // false here indicates the default text transform
        this.content = "Type something...";
       
    }
    
    setContent(content) { 
        this.content = content;
    }

    getColor() { 
        return this.color
    }
    setColor(color) { 
        this.color = color;
    }
    setFontSize(size) { 
        this.fontSize = size;
    }

    getFontSize() { 
        return this.fontSize
    }
    
    setWeight(weight) { 
        this.weight = weight;
    }

    setTextTransform(transform) { 
        this.textTransform = transform;
    }

    editContent(newContent) { 
        this.content = newContent;
    }
    getContent() { 
        return this.content
    }

    getTextTransform() { 
       return this.textTransform
    }

    getWeight() { 
        return this.weight
    }
}