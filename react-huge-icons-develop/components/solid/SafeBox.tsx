import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSafeBox = (
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
            d='M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm2 3.25A2.75 2.75 0 0 0 5.25 8v8A2.75 2.75 0 0 0 8 18.75h8A2.75 2.75 0 0 0 18.75 16v-1a.75.75 0 0 0-1.5 0v1c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25V8c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v1a.75.75 0 0 0 1.5 0V8A2.75 2.75 0 0 0 16 5.25H8Zm5.3 6a1.5 1.5 0 1 0 0 1.5H18a.75.75 0 0 0 0-1.5h-4.7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSafeBox);
export default ForwardRef;
