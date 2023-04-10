import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTextRotationVertical = (
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
            d='M12 12.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 0h6v-1.5h-6v1.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m4 18 2 2m0 0 2-2m-2 2V4'
        />
        <path
            fill='currentColor'
            d='m15 5 .692-.288a.75.75 0 0 0-1.384 0L15 5ZM9.308 16.712a.75.75 0 0 0 1.384.576l-1.384-.576Zm10 .576a.75.75 0 0 0 1.384-.576l-1.384.576Zm-5-12.576-5 12 1.384.576 5-12-1.384-.576Zm6.384 12-5-12-1.384.576 5 12 1.384-.576Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTextRotationVertical);
export default ForwardRef;
