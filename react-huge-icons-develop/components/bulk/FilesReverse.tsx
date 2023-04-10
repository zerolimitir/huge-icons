import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilesReverse = (
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
            d='M21.003 18v-8a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.003 14V6a4 4 0 0 0-4-4H9.066a.5.5 0 0 0-.5.5v2.044A3.172 3.172 0 0 1 5.409 7.7c-.555.006-1.22.01-1.907.012a.5.5 0 0 0-.5.5V14a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4ZM7.743 2.459a.455.455 0 0 0-.782-.319 5989.992 5989.992 0 0 0-3.836 3.99.454.454 0 0 0 .327.77c.783.001 1.705 0 2.37-.008A1.93 1.93 0 0 0 7.743 4.97V2.459Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilesReverse);
export default ForwardRef;
