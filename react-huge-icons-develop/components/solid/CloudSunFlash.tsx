import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSunFlash = (
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
            d='M15.75 2a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0V2Zm4.73 2.58a.75.75 0 0 0-1.06-1.06l-.708.707a.75.75 0 0 0 1.06 1.06l.708-.707ZM22.75 9a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM15 5a4 4 0 0 1 3.996 3.813 6.497 6.497 0 0 0-2.756-.269 8.534 8.534 0 0 0-3.207-3.028A3.982 3.982 0 0 1 15 5ZM8.683 17.68l3.433-4.12a.5.5 0 0 1 .884.321V16a.5.5 0 0 0 .5.5h1.432a.5.5 0 0 1 .385.82l-3.433 4.12a.5.5 0 0 1-.884-.321V19a.5.5 0 0 0-.5-.5H9.068a.5.5 0 0 1-.385-.82ZM2 13a7.003 7.003 0 0 0 5.193 6.765 1.498 1.498 0 0 1-.345-2.225l5-6a1.5 1.5 0 0 1 2.652.96V15H16a1.5 1.5 0 0 1 1.152 2.46L15.036 20H17a5 5 0 1 0-1.561-9.751 7.026 7.026 0 0 0-3.63-3.662A7 7 0 0 0 2 13Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSunFlash);
export default ForwardRef;
