import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileWrittenBent = (
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
            d='M7 22a4.002 4.002 0 0 0 3.877-3.01c.136-.535.57-.99 1.123-.99h7V5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v13a4 4 0 0 0 4 4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M19 22a4.002 4.002 0 0 0 3.877-3.01c.136-.535-.325-.99-.877-.99H12c-.552 0-.987.455-1.123.99A4.002 4.002 0 0 1 7 22h12Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.25 7A.75.75 0 0 1 7 6.25h8a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 7Zm0 5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileWrittenBent);
export default ForwardRef;
