import { useEffect, useRef } from "react";




export default function PreviewTextComponent({ block }) { 
    return (
      <p

        style={{
          fontSize: block.getFontSize(),
          fontWeight: block.getWeight() + "", //convert it to a string
          color: block.getColor(),
          textTransform: block.getTextTransform() ? block.getTextTransform() : "none",
          marginBottom: "10px",
        //   lineHeight: "3rem",
          whiteSpace: "pre-line"
        }}
        >
            { block.getContent()}
      </p>
    );
}