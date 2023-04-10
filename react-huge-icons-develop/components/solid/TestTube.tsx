import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTestTube = (
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
            d='M9 1.25a.75.75 0 0 0 0 1.5h1v4.778a2 2 0 0 1-.211.894L7.875 12.25h8.25L14.21 8.422a2 2 0 0 1-.21-.894V2.75h1a.75.75 0 0 0 0-1.5H9Zm-1.875 12.5h9.75l2.678 5.356A2 2 0 0 1 17.763 22H6.237a2 2 0 0 1-1.789-2.894l2.678-5.356Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTube);
export default ForwardRef;
