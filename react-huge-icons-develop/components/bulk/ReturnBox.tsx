import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReturnBox = (
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
            d='M20 19V9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12 8h7.5a1 1 0 0 1 .8.4l1.5 2A1 1 0 0 1 21 12h-5.5a1 1 0 0 1-.8-.4L12 8Zm0 0H4.5a1 1 0 0 0-.8.4l-1.5 2A1 1 0 0 0 3 12h5.5a1 1 0 0 0 .8-.4L12 8Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.325 1.674A.75.75 0 0 1 8 1.25h6.5a2.25 2.25 0 0 1 0 4.5H13a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 0 0-1.5H9.552l.622.784a.75.75 0 1 1-1.176.932l-1.586-2a.75.75 0 0 1-.087-.792Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReturnBox);
export default ForwardRef;
