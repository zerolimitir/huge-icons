import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDiamond = (
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
            d='m18.54 3.723 2.923 3.328c.678.773.718 1.925.096 2.744L13.685 20.16a2.11 2.11 0 0 1-3.37 0L2.44 9.795a2.174 2.174 0 0 1 .096-2.744L5.46 3.723C5.863 3.263 6.441 3 7.05 3h9.903c.607 0 1.185.263 1.589.723Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M21.25 7.633a.75.75 0 0 1 0 1.5H2.75a.75.75 0 1 1 0-1.5h18.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDiamond);
export default ForwardRef;
