import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLockers = (
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
            d='M12.75 3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 16a.75.75 0 0 0 1.5 0h-1.5Zm7 2a.75.75 0 0 0 1.5 0h-1.5Zm-14 0a.75.75 0 0 0 1.5 0h-1.5ZM22 7.75a.75.75 0 0 0 0-1.5v1.5ZM2 6.25a.75.75 0 0 0 0 1.5v-1.5ZM8.25 14a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm4.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5ZM5 3.75h14v-1.5H5v1.5ZM21.25 6v10h1.5V6h-1.5ZM19 18.25H5v1.5h14v-1.5ZM2.75 16V6h-1.5v10h1.5ZM5 18.25A2.25 2.25 0 0 1 2.75 16h-1.5A3.75 3.75 0 0 0 5 19.75v-1.5ZM21.25 16A2.25 2.25 0 0 1 19 18.25v1.5A3.75 3.75 0 0 0 22.75 16h-1.5ZM19 3.75A2.25 2.25 0 0 1 21.25 6h1.5A3.75 3.75 0 0 0 19 2.25v1.5ZM5 2.25A3.75 3.75 0 0 0 1.25 6h1.5A2.25 2.25 0 0 1 5 3.75v-1.5Zm6.25.75v16h1.5V3h-1.5Zm7 16v2h1.5v-2h-1.5Zm-14 0v2h1.5v-2h-1.5ZM22 6.25H2v1.5h20v-1.5ZM9.75 14v-2h-1.5v2h1.5Zm6 0v-2h-1.5v2h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLockers);
export default ForwardRef;
