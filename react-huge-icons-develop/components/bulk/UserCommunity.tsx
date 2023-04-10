import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserCommunity = (
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
        <circle cx={6} cy={4} r={2} fill='currentColor' />
        <ellipse cx={6} cy={8} fill='currentColor' opacity={0.4} rx={3} ry={2} />
        <circle cx={18} cy={16} r={2} fill='currentColor' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 12 2.75a.75.75 0 0 1-.75-.75ZM2 11.25a.75.75 0 0 1 .75.75A9.25 9.25 0 0 0 12 21.25a.75.75 0 0 1 0 1.5C6.063 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <ellipse cx={18} cy={20} fill='currentColor' opacity={0.4} rx={3} ry={2} />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCommunity);
export default ForwardRef;
