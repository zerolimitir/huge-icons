import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgApps = (
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
            d='M1.538 3.615a2 2 0 0 1 2-2h4.924a2 2 0 0 1 2 2v4.923a2 2 0 0 1-2 2H3.538a2 2 0 0 1-2-2V3.615Zm11.924 11.923a2 2 0 0 1 2-2h4.923a2 2 0 0 1 2 2v4.924a2 2 0 0 1-2 2h-4.923a2 2 0 0 1-2-2v-4.924Z'
            opacity={0.4}
        />
        <circle cx={17.923} cy={6.077} r={4.462} fill='currentColor' />
        <circle cx={6} cy={18} r={4.462} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgApps);
export default ForwardRef;
