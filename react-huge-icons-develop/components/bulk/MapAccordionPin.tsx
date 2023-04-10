import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapAccordionPin = (
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
            d='M16.75 13.925v7.917c1.692-.456 3.539-1.723 4.528-2.471A1.86 1.86 0 0 0 22 17.876v-9.67c0-.853-1.028-1.348-1.736-.872-.815.548-1.826 1.145-2.83 1.525v3.663a1.76 1.76 0 0 1-.684 1.403Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12 20.393c-.986-.75-1.972-1.5-3.25-1.607V6.026c1.278.107 2.264.857 3.25 1.607.668.508 1.337 1.017 2.096 1.325v3.564c0 .772.484 1.428 1.154 1.653V22c-1.278-.107-2.264-.857-3.25-1.607Z'
        />
        <path
            fill='currentColor'
            d='M2.722 8.655c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.076-3.514 1.748-.708.476-1.736-.02-1.736-.873v-9.67c0-.584.255-1.141.722-1.494Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.515 5.859a2 2 0 1 0-1.5 0v6.145a.75.75 0 0 0 1.5 0V5.859Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordionPin);
export default ForwardRef;
