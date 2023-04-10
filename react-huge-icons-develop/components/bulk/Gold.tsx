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
            fill='currentColor'
            d='M8.392 8.153A1.5 1.5 0 0 1 9.852 7h4.296a1.5 1.5 0 0 1 1.46 1.153l.952 4A1.5 1.5 0 0 1 15.1 14H8.9a1.5 1.5 0 0 1-1.46-1.847l.952-4Z'
        />
        <path
            fill='currentColor'
            d='M3.392 15.153A1.5 1.5 0 0 1 4.852 14h4.297a1.5 1.5 0 0 1 1.459 1.153l.952 4A1.5 1.5 0 0 1 10.101 21H3.899a1.5 1.5 0 0 1-1.46-1.847l.953-4Zm10 0A1.5 1.5 0 0 1 14.852 14h4.297a1.5 1.5 0 0 1 1.459 1.153l.952 4A1.5 1.5 0 0 1 20.101 21h-6.202a1.5 1.5 0 0 1-1.46-1.847l.953-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 2.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm6.53 1.22a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Zm-13.06 0a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGold);
export default ForwardRef;
