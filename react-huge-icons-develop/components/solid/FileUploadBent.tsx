import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileUploadBent = (
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
            fillRule='evenodd'
            d='M2 5v12.25c0 1.795 1.48 3.25 3.275 3.25 1.768 0 3.225-1.433 3.225-3.2a.8.8 0 0 1 .8-.8H18V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3Zm7.25 3.828a1.26 1.26 0 0 0-.134.116L7.53 10.53a.75.75 0 1 1-1.06-1.06l1.585-1.586a2.75 2.75 0 0 1 3.89 0L13.53 9.47a.75.75 0 0 1-1.06 1.06l-1.586-1.586a1.26 1.26 0 0 0-.134-.116V13a.75.75 0 1 1-1.5 0V8.828ZM21.877 18.99A4.002 4.002 0 0 1 18 22H6a4.002 4.002 0 0 0 3.877-3.01c.136-.535.57-.99 1.123-.99h10c.552 0 1.013.455.877.99Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileUploadBent);
export default ForwardRef;
