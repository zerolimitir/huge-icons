import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCheckMarkRectangle = (
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
            fillRule='evenodd'
            d='M2.75 6A3.25 3.25 0 0 1 6 2.75h11a.75.75 0 0 0 0-1.5H6A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h12A4.75 4.75 0 0 0 22.75 18V9a.75.75 0 0 0-1.5 0v9A3.25 3.25 0 0 1 18 21.25H6A3.25 3.25 0 0 1 2.75 18V6Zm18.808-1.498a.75.75 0 0 0-1.115-1.004l-7.738 8.598a1.25 1.25 0 0 1-1.71.14L7.469 9.413a.75.75 0 1 0-.937 1.172l3.526 2.82a2.75 2.75 0 0 0 3.762-.307l7.738-8.597Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckMarkRectangle);
export default ForwardRef;
