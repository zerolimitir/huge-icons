import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFontRectangle = (
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
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z'
        />
        <path
            fill='currentColor'
            d='M9 13.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 0h6v-1.5H9v1.5Z'
        />
        <path
            fill='currentColor'
            d='m12 6 .692-.288a.75.75 0 0 0-1.384 0L12 6ZM6.308 17.712a.75.75 0 0 0 1.384.576l-1.384-.576Zm10 .576a.75.75 0 0 0 1.384-.576l-1.384.576Zm-5-12.576-5 12 1.384.576 5-12-1.384-.576Zm6.384 12-5-12-1.384.576 5 12 1.384-.576Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontRectangle);
export default ForwardRef;
