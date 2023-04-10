import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTraining = (
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
            d='M6 4v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.427 8.383a.75.75 0 0 1 .19 1.044l-4.927 6.117-1.233-.854 4.927-6.117a.75.75 0 0 1 1.043-.19Z'
            clipRule='evenodd'
        />
        <circle cx={5} cy={9} r={2} fill='currentColor' />
        <path
            fill='currentColor'
            d='M8 15v.5l3.243-1.7a1.452 1.452 0 1 1 1.548 2.455l-4.027 2.142c-.24.15-.5.244-.764.283V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a3 3 0 1 1 6 0Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.25 6a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8A.75.75 0 0 1 9.25 6Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTraining);
export default ForwardRef;
