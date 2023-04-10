import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgComputerPieces = (
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
            d='M2 13.25h-.75v1.5H2v-1.5Zm20 1.5h.75v-1.5H22v1.5Zm-13 6.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5ZM12.75 18a.75.75 0 0 0-1.5 0h1.5ZM5 2.75h14v-1.5H5v1.5ZM21.25 5v10h1.5V5h-1.5ZM19 17.25H5v1.5h14v-1.5ZM2.75 15V5h-1.5v10h1.5ZM5 17.25A2.25 2.25 0 0 1 2.75 15h-1.5A3.75 3.75 0 0 0 5 18.75v-1.5ZM21.25 15A2.25 2.25 0 0 1 19 17.25v1.5A3.75 3.75 0 0 0 22.75 15h-1.5ZM19 2.75A2.25 2.25 0 0 1 21.25 5h1.5A3.75 3.75 0 0 0 19 1.25v1.5ZM5 1.25A3.75 3.75 0 0 0 1.25 5h1.5A2.25 2.25 0 0 1 5 2.75v-1.5Zm-3 13.5h20v-1.5H2v1.5Zm7 8h3v-1.5H9v1.5Zm3 0h3v-1.5h-3v1.5Zm.75-.75v-4h-1.5v4h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgComputerPieces);
export default ForwardRef;
