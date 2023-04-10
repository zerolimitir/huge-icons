import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLoginOpen = (
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
            d='M6.475 2.715c1.688-1.125 3.905-.093 4.234 1.801H14a2.75 2.75 0 0 1 2.75 2.75.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25h-3.25v12.5H14c.69 0 1.25-.56 1.25-1.25a.75.75 0 0 1 1.5 0 2.75 2.75 0 0 1-2.75 2.75h-3.291c-.33 1.895-2.546 2.927-4.234 1.802l-2-1.334a2.75 2.75 0 0 1-1.225-2.288V6.336c0-.919.46-1.777 1.225-2.287l2-1.334Zm9.055 7.021a.75.75 0 0 1 0 1.06l-.72.72H20a.75.75 0 1 1 0 1.5h-5.19l.72.72a.75.75 0 0 1-1.06 1.06l-1.293-1.292a1.75 1.75 0 0 1 0-2.475l1.293-1.293a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLoginOpen);
export default ForwardRef;
