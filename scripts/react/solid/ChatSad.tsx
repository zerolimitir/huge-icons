import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatSad = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.34 3.025c-1.269.123-2.251.39-3.28.893a9.009 9.009 0 0 0-5.02 7.242c-.031.311-.041 1.436-.031 3.48l.014 3.02.11.378c.437 1.504 1.584 2.572 3.093 2.879.395.081.521.083 4.341.083 3.223 0 4.025-.011 4.441-.059a8.992 8.992 0 0 0 7.075-5.001 8.974 8.974 0 0 0-1.07-9.571c-1.215-1.517-2.984-2.648-4.853-3.102-.889-.217-1.134-.237-2.96-.248a64.757 64.757 0 0 0-1.86.006m2.668 10.338c1.14.227 2.199.823 3.226 1.815.394.38.486.538.486.832 0 .478-.447.82-.917.702-.137-.035-.257-.121-.54-.389-.659-.623-1.077-.924-1.677-1.205-.558-.261-.917-.337-1.586-.337s-1.028.076-1.586.337c-.6.281-1.018.582-1.677 1.205-.283.268-.403.354-.54.389a.728.728 0 0 1-.917-.702c0-.294.092-.452.486-.832 1.62-1.565 3.399-2.181 5.242-1.815'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatSad);
export default ForwardRef;
