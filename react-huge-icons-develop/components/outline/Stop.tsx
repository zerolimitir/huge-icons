import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStop = (
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
            d='M9 5.75h6v-1.5H9v1.5ZM18.25 9v6h1.5V9h-1.5ZM15 18.25H9v1.5h6v-1.5ZM5.75 15V9h-1.5v6h1.5ZM9 18.25A3.25 3.25 0 0 1 5.75 15h-1.5A4.75 4.75 0 0 0 9 19.75v-1.5ZM18.25 15A3.25 3.25 0 0 1 15 18.25v1.5A4.75 4.75 0 0 0 19.75 15h-1.5ZM15 5.75A3.25 3.25 0 0 1 18.25 9h1.5A4.75 4.75 0 0 0 15 4.25v1.5Zm-6-1.5A4.75 4.75 0 0 0 4.25 9h1.5A3.25 3.25 0 0 1 9 5.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStop);
export default ForwardRef;
