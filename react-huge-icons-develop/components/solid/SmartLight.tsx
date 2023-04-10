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
            d='M8.288 4.288A5.231 5.231 0 0 1 12 2.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 0 0 1.061-1.061A6.731 6.731 0 0 0 12 1.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 5.75a2.24 2.24 0 0 1 1.591.659.75.75 0 0 0 1.06-1.06A3.74 3.74 0 0 0 12 4.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 0 0 1.061 1.061Zm-2.536 2.62A2 2 0 0 1 9.62 8h4.758a2 2 0 0 1 1.748 1.029l2.222 4C19.088 14.362 18.125 16 16.6 16h-3.85v5.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V16H7.399c-1.525 0-2.489-1.638-1.748-2.971l2.222-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartLight);
export default ForwardRef;
