import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHeadphonesMicrophone = (
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
        <g fill='currentColor' fillRule='evenodd' clipRule='evenodd' opacity={0.4}>
            <path d='M12 2.75A8.25 8.25 0 0 0 3.75 11v2.75h-1.5V11c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v2.75h-1.5V11A8.25 8.25 0 0 0 12 2.75Z' />
            <path d='M21 13.25a.75.75 0 0 1 .75.75v2A6.75 6.75 0 0 1 15 22.75h-3a.75.75 0 0 1 0-1.5h3c2.9 0 5.25-2.35 5.25-5.25v-2a.75.75 0 0 1 .75-.75Z' />
        </g>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M14.25 13a3.75 3.75 0 1 1 7.5 0v2a3.75 3.75 0 1 1-7.5 0v-2Zm-12 0a3.75 3.75 0 1 1 7.5 0v2a3.75 3.75 0 1 1-7.5 0v-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeadphonesMicrophone);
export default ForwardRef;
