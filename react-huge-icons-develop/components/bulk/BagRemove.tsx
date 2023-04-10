import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBagRemove = (
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
            d='M4.562 9.504A4 4 0 0 1 8.532 6h6.937a4 4 0 0 1 3.969 3.504l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.25 5a3.75 3.75 0 1 1 7.5 0v2a.75.75 0 0 1-1.5 0V5a2.25 2.25 0 0 0-4.5 0v2a.75.75 0 0 1-1.5 0V5Zm1.098 6.349a.75.75 0 0 1 1.061 0L12 12.939l1.591-1.59a.75.75 0 0 1 1.06 1.06L13.062 14l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 15.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBagRemove);
export default ForwardRef;
