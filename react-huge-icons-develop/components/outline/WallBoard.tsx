import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWallBoard = (
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
            d='M5 6.75h14v-1.5H5v1.5ZM21.25 9v10h1.5V9h-1.5ZM19 21.25H5v1.5h14v-1.5ZM2.75 19V9h-1.5v10h1.5ZM5 21.25A2.25 2.25 0 0 1 2.75 19h-1.5A3.75 3.75 0 0 0 5 22.75v-1.5ZM21.25 19A2.25 2.25 0 0 1 19 21.25v1.5A3.75 3.75 0 0 0 22.75 19h-1.5ZM19 6.75A2.25 2.25 0 0 1 21.25 9h1.5A3.75 3.75 0 0 0 19 5.25v1.5ZM5 5.25A3.75 3.75 0 0 0 1.25 9h1.5A2.25 2.25 0 0 1 5 6.75v-1.5Zm2 4a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 0h10v-1.5H7v1.5Zm0 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 0h10v-1.5H7v1.5Zm0 2.5a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5 0h5v-1.5H7v1.5Z'
        />
        <path
            fill='currentColor'
            d='M5.584 5.376a.75.75 0 0 0 .832 1.248l-.832-1.248ZM12 2l.416-.624a.75.75 0 0 0-.832 0L12 2Zm5.584 4.624a.75.75 0 1 0 .832-1.248l-.832 1.248Zm-11.168 0 6-4-.832-1.248-6 4 .832 1.248Zm5.168-4 6 4 .832-1.248-6-4-.832 1.248Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWallBoard);
export default ForwardRef;
