import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgListViewRectangle = (
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
            d='M3 5.25A1.75 1.75 0 0 0 1.25 7v2c0 .966.784 1.75 1.75 1.75h2A1.75 1.75 0 0 0 6.75 9V7A1.75 1.75 0 0 0 5 5.25H3Zm0 8A1.75 1.75 0 0 0 1.25 15v2c0 .966.784 1.75 1.75 1.75h2A1.75 1.75 0 0 0 6.75 17v-2A1.75 1.75 0 0 0 5 13.25H3ZM9.25 6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 9.25 6Zm.75 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6ZM9.25 10a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75Zm.75 7.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H10Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgListViewRectangle);
export default ForwardRef;
