import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUsersTriple = (
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
        <circle cx={7.5} cy={8.5} r={2.5} fill='currentColor' opacity={0.4} />
        <circle cx={16.5} cy={8.5} r={2.5} fill='currentColor' opacity={0.4} />
        <ellipse cx={12} cy={16} fill='currentColor' opacity={0.4} rx={6} ry={3} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.495 17.987C17.43 17.458 18 16.762 18 16c0-1.187-1.379-2.213-3.38-2.7A9.176 9.176 0 0 1 17 13c2.761 0 5 1.12 5 2.5S19.76 18 17 18c-.17 0-.34-.004-.505-.013Zm-8.99 0A9.296 9.296 0 0 1 7 18c-2.761 0-5-1.12-5-2.5S4.239 13 7 13c.861 0 1.672.109 2.38.3C7.378 13.788 6 14.814 6 16c0 .762.569 1.458 1.505 1.987Z'
            clipRule='evenodd'
        />
        <circle cx={12} cy={8} r={3} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgUsersTriple);
export default ForwardRef;
