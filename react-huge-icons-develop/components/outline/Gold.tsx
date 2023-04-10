import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGold = (
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
            strokeWidth={1.5}
            d='M8.392 8.153A1.5 1.5 0 0 1 9.852 7h4.296a1.5 1.5 0 0 1 1.46 1.153l.952 4A1.5 1.5 0 0 1 15.1 14H8.9a1.5 1.5 0 0 1-1.46-1.847l.952-4Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M3.392 15.153A1.5 1.5 0 0 1 4.852 14h4.297a1.5 1.5 0 0 1 1.459 1.153l.952 4A1.5 1.5 0 0 1 10.1 21H3.9a1.5 1.5 0 0 1-1.46-1.847l.952-4Zm10 0A1.5 1.5 0 0 1 14.852 14h4.296a1.5 1.5 0 0 1 1.46 1.153l.952 4A1.5 1.5 0 0 1 20.1 21h-6.2a1.5 1.5 0 0 1-1.46-1.847l.952-4Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 3v1m6 0-1 1M6 4l1 1'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGold);
export default ForwardRef;
