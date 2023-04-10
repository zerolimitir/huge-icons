import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAlarmCheck = (
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
            d='M9.469 12.414a.75.75 0 0 0-.938 1.172l.938-1.172Zm6.095-.92a.75.75 0 1 0-1.128-.988l1.128.988Zm-4.811 2.908-.469.586.469-.586Zm-2.222-.816 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172Z'
        />
        <circle cx={12} cy={13} r={9} stroke='currentColor' strokeWidth={1.5} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M16.803 2A12.046 12.046 0 0 1 22 6.364M7.197 2A12.047 12.047 0 0 0 2 6.364'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m21 22-2.243-3M3 22l2.243-3'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlarmCheck);
export default ForwardRef;
