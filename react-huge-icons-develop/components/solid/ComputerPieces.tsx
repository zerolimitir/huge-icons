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
            fillRule='evenodd'
            d='M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.25H2V5Zm0 9.75h20V15a3 3 0 0 1-3 3h-6.25v2.5H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V18H5a3 3 0 0 1-3-3v-.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgComputerPieces);
export default ForwardRef;
