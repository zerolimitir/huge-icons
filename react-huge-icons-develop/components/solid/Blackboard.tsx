import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBlackboard = (
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
            d='M3 8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10h-1.667a.833.833 0 0 1-.833-.833c0-.92-.746-1.667-1.667-1.667h-3.666c-.92 0-1.667.746-1.667 1.667 0 .46-.373.833-.833.833H3V8Zm3.25 0A.75.75 0 0 1 7 7.25h5a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8ZM13 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.25h5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h11V18Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBlackboard);
export default ForwardRef;
