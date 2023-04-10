import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapAccordionBelow = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M21.098 15.567a19.2 19.2 0 0 0 .18-.134A1.86 1.86 0 0 0 22 13.938v-9.67c0-.853-1.028-1.348-1.736-.872-1 .672-2.297 1.42-3.514 1.747v4.904c2.475.638 4.348 2.814 4.348 5.48v.04ZM9.43 14.969a3.76 3.76 0 0 0-.68-.121V2.088c1.278.106 2.264.856 3.25 1.607.986.75 1.972 1.5 3.25 1.606v4.557c-2.952 0-5.457 2.138-5.807 4.994-.005.039-.01.078-.013.117ZM2.722 4.717c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.075-3.514 1.747C3.028 17.23 2 16.735 2 15.881v-9.67c0-.584.255-1.141.722-1.494Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M19.338 17.614c.26-.743.41-1.473.41-2.088 0-2.385-2.014-4.319-4.498-4.319-2.305 0-4.205 1.664-4.468 3.809-.02.167-.03.337-.03.51 0 2.385 2.249 6.478 4.498 6.478 1.669 0 3.338-2.253 4.088-4.39Zm-4.088-1.009a1.35 1.35 0 1 0 0-2.699 1.35 1.35 0 0 0 0 2.7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordionBelow);
export default ForwardRef;
