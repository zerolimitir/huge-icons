import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCartSmile = (
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
            d='M17.653 11.632a.75.75 0 0 1-.285 1.021c-1.215.686-2.262 1.095-3.365 1.097-1.105.002-2.154-.404-3.374-1.098a.75.75 0 0 1 .742-1.304c1.136.647 1.911.903 2.629.902.719-.001 1.494-.262 2.631-.903a.75.75 0 0 1 1.022.285Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCartSmile);
export default ForwardRef;
