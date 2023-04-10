import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCartRemove = (
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
            d='M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4h1.5a2.75 2.75 0 0 0-2.75-2.75h-2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V4Z'
            opacity={0.4}
        />
        <circle cx={9.5} cy={20.5} r={1.5} fill='currentColor' />
        <circle cx={18.5} cy={20.5} r={1.5} fill='currentColor' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.702 8.202a.75.75 0 0 1 1.06 0L14 9.44l1.237-1.238a.75.75 0 1 1 1.061 1.06L15.061 10.5l1.237 1.238a.75.75 0 0 1-1.06 1.06L14 11.561l-1.238 1.237a.75.75 0 0 1-1.06-1.06l1.237-1.238-1.237-1.237a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCartRemove);
export default ForwardRef;
