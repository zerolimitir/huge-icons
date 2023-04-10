import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSquareRoot = (
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
            d='M11.744 7.75a.25.25 0 0 0-.24.178l-2.216 7.39c-.413 1.375-2.215 1.696-3.077.547L4.7 13.85a.25.25 0 0 0-.2-.1H3a.75.75 0 0 1 0-1.5h1.5c.55 0 1.07.26 1.4.7l1.511 2.015a.25.25 0 0 0 .44-.078l2.217-7.39a1.75 1.75 0 0 1 1.676-1.247H21a.75.75 0 0 1 0 1.5h-9.256Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18.652 11.227a.75.75 0 0 1 0 1.06L17.06 13.88l1.59 1.59a.75.75 0 0 1-1.06 1.061L16 14.94l-1.591 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.591-1.59-1.591a.75.75 0 0 1 1.06-1.061L16 12.818l1.591-1.591a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSquareRoot);
export default ForwardRef;
