import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSearchShort = (
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
            d='M18.63 21.422a1.975 1.975 0 1 0 2.792-2.793L17.5 14.707 14.707 17.5l3.922 3.922Z'
            opacity={0.4}
        />
        <circle cx={11} cy={11} r={9} fill='currentColor' transform='rotate(-180 11 11)' />
    </svg>
);
const ForwardRef = forwardRef(SvgSearchShort);
export default ForwardRef;
