import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChemistryCylindrical = (
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
            d='M6.75 2a.75.75 0 0 0-1.5 0v5.25H4a.75.75 0 0 0 0 1.5h1.25v12.5H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H6.75V8.75h4.5V15a3.75 3.75 0 1 0 7.5 0V8.75H20a.75.75 0 0 0 0-1.5h-1.25v-4.5H19a.75.75 0 0 0 0-1.5h-8a.75.75 0 0 0 0 1.5h.25v4.5h-4.5V2Zm10.5 5.25h-4.5v-4.5h4.5v4.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChemistryCylindrical);
export default ForwardRef;
