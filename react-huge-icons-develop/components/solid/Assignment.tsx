import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAssignment = (
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
            d='M3.5 3A1.5 1.5 0 0 0 2 4.5v1.75h3V4.5A1.5 1.5 0 0 0 3.5 3ZM2 7.75v9.917a4 4 0 0 0 .8 2.4l.7.933.7-.933a4 4 0 0 0 .8-2.4V7.75H2ZM18 3h-6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h1a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4Zm-6.75 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Zm10.564 7.244a.75.75 0 0 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03l-1.753-1.402a.75.75 0 1 0-.937 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAssignment);
export default ForwardRef;
