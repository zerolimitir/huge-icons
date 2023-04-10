import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookInfo = (
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
        <path fill='currentColor' d='M17 2H7a3 3 0 0 0-3 3v14h16V5a3 3 0 0 0-3-3Z' opacity={0.4} />
        <path fill='currentColor' d='M20 16H7a3 3 0 1 0 0 6h10a3 3 0 0 0 3-3v-3Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 8.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgBookInfo);
export default ForwardRef;
