import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRemoveRectangle = (
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
            d='M15.359 9.702a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM8.64 14.298a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm5.657 1.06a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM9.702 8.642a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm4.596 0-5.657 5.657 1.06 1.06 5.658-5.656-1.06-1.06Zm1.06 5.657L9.703 8.641l-1.06 1.06 5.656 5.658 1.06-1.06ZM18 1.25H6v1.5h12v-1.5ZM1.25 6v12h1.5V6h-1.5ZM6 22.75h12v-1.5H6v1.5ZM22.75 18V6h-1.5v12h1.5ZM18 22.75A4.75 4.75 0 0 0 22.75 18h-1.5A3.25 3.25 0 0 1 18 21.25v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm12 1.5A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemoveRectangle);
export default ForwardRef;
