import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgExchange = (
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
            d='M16.47 3.47a.75.75 0 0 1 1.06 0l3 3A.75.75 0 0 1 20 7.75H9A4.25 4.25 0 0 0 4.75 12v1a.75.75 0 0 1-1.5 0v-1A5.75 5.75 0 0 1 9 6.25h9.19l-1.72-1.72a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.53 20.53a.75.75 0 0 1-1.06 0l-3-3A.75.75 0 0 1 4 16.25h11A4.25 4.25 0 0 0 19.25 12v-1a.75.75 0 0 1 1.5 0v1A5.75 5.75 0 0 1 15 17.75H5.81l1.72 1.72a.75.75 0 0 1 0 1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgExchange);
export default ForwardRef;
