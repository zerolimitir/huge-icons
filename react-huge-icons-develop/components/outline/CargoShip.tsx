import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCargoShip = (
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
            strokeLinecap='square'
            strokeWidth={1.5}
            d='m18.96 20 2.738-4.486c.65-1.063.21-2.467-.922-2.95l-8.011-3.408a1.95 1.95 0 0 0-1.53 0l-8.01 3.409c-1.133.482-1.572 1.886-.923 2.949L5.04 20'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M18 11V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v7'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M13 5h-2M3 22l1.532-1.022a2.581 2.581 0 0 1 2.913.034v0a2.582 2.582 0 0 0 2.866.063l.186-.118a2.75 2.75 0 0 1 2.994.037v0A2.72 2.72 0 0 0 16.5 21v0a2.704 2.704 0 0 1 3 0l1.5 1'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCargoShip);
export default ForwardRef;
