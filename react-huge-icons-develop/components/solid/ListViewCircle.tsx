import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgListViewCircle = (
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
            d='M6.75 8a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Zm0 8a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Zm2.5-10a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 9.25 6Zm.75 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6ZM9.25 10a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75Zm.75 7.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H10Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgListViewCircle);
export default ForwardRef;
