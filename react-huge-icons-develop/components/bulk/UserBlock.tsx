import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserBlock = (
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
        <ellipse cx={10} cy={17} fill='currentColor' opacity={0.4} rx={7} ry={4} />
        <circle cx={10} cy={7} r={4} fill='currentColor' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M19 14a3 3 0 0 0 2.482-4.686l-4.168 4.168a3.016 3.016 0 0 1-.796-.796l4.168-4.168A3 3 0 1 0 19 14Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserBlock);
export default ForwardRef;
