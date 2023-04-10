import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFontSize = (
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
            d='M7 3.25a.75.75 0 0 1 .692.462l5 12a.75.75 0 0 1-1.384.576L9.833 12.75H4.167l-1.475 3.538a.75.75 0 0 1-1.384-.577l5-12A.75.75 0 0 1 7 3.25Zm0 2.7 2.208 5.3H4.792L7 5.95ZM22.75 12v4a.75.75 0 1 1-1.5 0v-.536a4.75 4.75 0 1 1 0-6.928V8a.75.75 0 0 1 1.5 0v4Zm-1.5 0a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontSize);
export default ForwardRef;
