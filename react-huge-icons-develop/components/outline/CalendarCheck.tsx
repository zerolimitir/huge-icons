import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCalendarCheck = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M8 2v3m8-3v3'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z'
        />
        <path
            fill='currentColor'
            d='M9.469 14.414a.75.75 0 0 0-.938 1.172l.938-1.172Zm6.095-.92a.75.75 0 1 0-1.128-.988l1.128.988Zm-4.811 2.908-.469.586.469-.586Zm-2.222-.816 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172Z'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M3 9h18' />
    </svg>
);
const ForwardRef = forwardRef(SvgCalendarCheck);
export default ForwardRef;
