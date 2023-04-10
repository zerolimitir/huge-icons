import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartLight = (
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
            d='M12 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 2.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 5.75Zm0 9.5a.75.75 0 0 1 .75.75v5.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V16a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M7.873 9.029A2 2 0 0 1 9.621 8h4.758a2 2 0 0 1 1.748 1.029l2.222 4C19.09 14.362 18.126 16 16.601 16H7.4c-1.525 0-2.489-1.638-1.748-2.971l2.222-4Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartLight);
export default ForwardRef;
